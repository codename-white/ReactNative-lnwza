import React from 'react';
import { View, Image } from 'react-native';

export default function Section1() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
                <Image 
                    style={{ flex: 1, resizeMode: 'cover', aspectRatio: 4/2 }} 
                    source={require('../../assets/week3/room-6.jpg')} 
                />
            </View>
        </View>
    );
}