import { getLocation } from "@/utils/gps";
import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Dimensions, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function LocationQuiz() {
    const [location, setLocation] = useState<any>(null);
    const [users, setUsers] = useState<any[]>([]);

    // ACTION WHEN ENTER SCREENS
    const onLoad = async () => {
        // 1. ดึงตำแหน่งปัจจุบัน (ใช้ Utility )
        let loc = await getLocation();
        if (loc) {
            setLocation(loc);
        }
    };

    const loadUsers = async () => {
        try {
            // 2. ดึงข้อมูลรายชื่อคนจาก API
            const response = await fetch("https://ckartisan.com/api/location");
            const data = await response.json();
            
            // กรองเฉพาะที่มี lat/lon
            const validUsers = Array.isArray(data) ? data.filter(u => u.latitude && u.longitude) : [];
            setUsers(validUsers);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        // console.log("ENTER SCREEN");
        onLoad();
        loadUsers();

        // Realtime loop
        const interval = setInterval(loadUsers, 10000);
        return () => clearInterval(interval);
    }, []);

    // SCREEN UI
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* ส่วนแสดงเวลา */}
            <View style={{ alignItems: 'center', padding: 10 }}>
                <Text style={{ fontSize: 12, color: '#555' }}>
                    {location ? new Date(location.timestamp).toString() : "-"}
                </Text>
            </View>

            {/* ส่วนแสดง Info Bar */}
            <View style={{ flexDirection: 'row', height: 70, backgroundColor: "#50E3C2", padding: 10 }}>
                <View style={{ flex: 1, flexDirection: 'column', borderRightWidth: 1, borderColor: 'rgba(0,0,0,0.1)' }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Lat/Lon</Text>
                    <Text style={{ textAlign: 'center' }}>{location ? location.coords.latitude.toFixed(6) : "-"}</Text>
                    <Text style={{ textAlign: 'center' }}>{location ? location.coords.longitude.toFixed(6) : "-"}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Speed / Accuracy</Text>
                    <Text style={{ textAlign: 'center' }}>
                        {location ? (Number(location.coords.speed) * 3.6).toFixed(0) : "-"} km/h
                    </Text>
                    <Text style={{ textAlign: 'center' }}>
                        {location ? Number(location.coords.accuracy).toFixed(0) : "-"} m.
                    </Text>
                </View>
            </View>

            {/* ส่วนแสดงแผนที่ */}
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ width: Dimensions.get('window').width, height: '100%' }}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    region={location ? {
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    } : undefined}
                >
                    {/* วนลูปแสดงหมุดของ User */}
                    {users.map((user, index) => (
                        <Marker
                            key={user.id || index}
                            coordinate={{
                                latitude: Number(user.latitude),
                                longitude: Number(user.longitude),
                            }}
                            title={user.user_id}
                            description={`Update: ${user.updated_at || "-"}`}
                        >
                            <View style={{ alignItems: 'center' }}>
                                <View style={{
                                    backgroundColor: 'white',
                                    borderRadius: 15,
                                    padding: 2,
                                    borderWidth: 1,
                                    borderColor: 'tomato'
                                }}>
                                    <FontAwesome name="user" size={24} color="tomato" />
                                </View>
                                {/* สามเหลี่ยมชี้หมุด */}
                                <View style={{
                                    width: 0, height: 0,
                                    backgroundColor: 'transparent',
                                    borderStyle: 'solid',
                                    borderLeftWidth: 5,
                                    borderRightWidth: 5,
                                    borderTopWidth: 8,
                                    borderLeftColor: 'transparent',
                                    borderRightColor: 'transparent',
                                    borderTopColor: 'tomato',
                                    marginTop: -1
                                }} />
                            </View>
                        </Marker>
                    ))}
                </MapView>
            </View>
        </View>
    );
}