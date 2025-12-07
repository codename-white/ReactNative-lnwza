import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {
    // State สำหรับนับจำนวน (เริ่มต้นที่ 0)
    const [heartBeat, setHeartBeat] = useState(0);

    // ฟังก์ชันสำหรับเพิ่มค่าเมื่อกดปุ่ม
    const onPressHeart = () => {
        setHeartBeat(heartBeat + 1);
    };

    return (
        <View>
            {/* จัด Layout: Row, Padding, Space-around, AlignItems Center */}
            <View style={{ flexDirection: "row", padding: 20, justifyContent: "space-around", alignItems: "center", marginTop: -20 }}>
                
                {/* ปุ่มกดรูปหัวใจ */}
                <TouchableOpacity onPress={onPressHeart}>
                    <FontAwesome name="heart" size={40} color="orange" />
                </TouchableOpacity>

                {/* ตัวเลขแสดงผล */}
                <Text style={{ fontSize: 40 }}>{heartBeat}</Text>
                
            </View>
        </View>
    );
}