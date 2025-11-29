import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Section8() {
    return (
        <View style={{ 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: 20,
            borderTopWidth: 1,
            borderColor: '#e0e0e0'
        }}>
            
            <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontSize: 12, color: 'gray' }}>Price</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#e47e5d' }}>
                    $399.99
                </Text>
                <Text style={{ fontSize: 12, color: 'gray' }}>AVG/Night</Text>
            </View>

            <View>
                <TouchableOpacity style={{ 
                    backgroundColor: '#e47e5d', 
                    paddingVertical: 10,
                    paddingHorizontal: 20, 
                    borderRadius: 10 
                }}>
                    <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>
                        Book Now
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}