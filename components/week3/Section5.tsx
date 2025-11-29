import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const MyIcon = (props: any) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <FontAwesome name={props.name} size={20} color="#188F7F" />
      <Text style={{ fontSize: 10, color: 'gray', marginTop: 5 }}>
        {props.title}
      </Text>
    </View>
  );
};

export default function Section5() {
  return (
    <View style={{ 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        padding: 10,
        marginVertical: 10
    }}>
      
      <MyIcon title="wifi" name="wifi" />
      <MyIcon title="coffee" name="coffee" />
      <MyIcon title="bath" name="bath" />
      <MyIcon title="car" name="car" />
      <MyIcon title="paw" name="paw" />

    </View>
  );
}