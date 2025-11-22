import React from 'react';
import { View } from 'react-native';

export default function Ex05() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-around',  
        alignItems: 'stretch',
      }}
    >

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between', 
        }}
      >
        <View style={{ width: 100, height: 100, backgroundColor: '#50E3C2' }} />
        <View style={{ width: 100, height: 100, backgroundColor: '#50E3C2' }} />
        <View style={{ width: 100, height: 100, backgroundColor: '#50E3C2' }} />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ width: 100, height: 100, backgroundColor: '#4A90E2' }} />
        <View style={{ width: 100, height: 100, backgroundColor: '#4A90E2' }} />
        <View style={{ width: 100, height: 100, backgroundColor: '#4A90E2' }} />
      </View>

      {/* Row 3 */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ width: 100, height: 100, backgroundColor: '#9013FE' }} />
        <View style={{ width: 100, height: 100, backgroundColor: '#9013FE' }} />
        <View style={{ width: 100, height: 100, backgroundColor: '#9013FE' }} />
      </View>
    </View>
  );
}
