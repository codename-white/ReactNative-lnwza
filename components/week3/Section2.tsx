import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Section2() {
  return (
    <View style={{ 
        flex: 1, 
        marginTop: -30, 
        marginHorizontal: 20, 
        padding: 20, 
        backgroundColor: 'white', 
        borderRadius: 15,
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5 
    }}>
      
      <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>
        Hilton San Francisco
      </Text>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 10 }}>
        {/* FontAwesome * 5 */}
        <FontAwesome name="star" size={20} color="orange" />
        <FontAwesome name="star" size={20} color="orange" />
        <FontAwesome name="star" size={20} color="orange" />
        <FontAwesome name="star" size={20} color="orange" />
        <FontAwesome name="star-half-empty" size={20} color="orange" />
      </View>
    
      <Text style={{ textAlign: 'center', fontSize: 12, color: 'gray' }}>
        Facilities provided may range from a modest quality mattress in a small room to large suites
      </Text>

    </View>
  );
}