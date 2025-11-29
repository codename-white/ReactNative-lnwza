import React from 'react';
import { View, Text } from 'react-native';

export default function Section4() {
    return (

        <View style={{ 
            padding: 20, 
            borderTopWidth: 1, 
            borderBottomWidth: 1, 
            borderColor: '#A6B1C2'
        }}>
            
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                Hotel Description
            </Text>

            <Text style={{ marginTop: 10, color: '#444444' }}>
                218 Austen Mountain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore
            </Text>

        </View>
    );
}