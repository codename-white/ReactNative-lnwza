import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Section6() {
    return (
        // View : column (ค่า default ของ React Native คือ column อยู่แล้ว)
        // ใส่ borderTopWidth เพื่อคั่นส่วนเหมือน Section ก่อนหน้า
        <View style={{ padding: 20, flexDirection: 'column' }}>
            
            {/* Text : Location */}
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                Location
            </Text>

            {/* Text : Address Description */}
            <Text style={{ color: '#444444', marginTop: 10 }}>
                218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…
            </Text>

            <View style={{ marginTop: 10 }}>
                <Image 
                    style={{ width: '100%', height: 100, borderRadius: 10 }} 
                    source={require('../../assets/week3/map.jpg')} 
                />
            </View>

        </View>
    );
}