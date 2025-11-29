import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Section7() {
    return (
        <View style={{ padding: 20 }}>
            <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                    Room Type
                </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
                
                <Image 
                    style={{ width: 80, height: 80, borderRadius: 10 }} 
                    source={require('../../assets/week3/room-8.jpg')} 
                />

                <View style={{ justifyContent: 'space-between', paddingLeft: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                        Standard Twin Room
                    </Text>
                    
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#e47e5d' }}>
                        $399.99
                    </Text>
                    
                    <Text style={{ color: '#00aeb0', fontSize: 12 }}>
                        Hurry Up! This is your last room!
                    </Text>
                </View>

            </View>
        </View>
    );
}