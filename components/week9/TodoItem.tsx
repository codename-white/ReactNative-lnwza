import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function TodoItem(props:any) {    
    return (     
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal : 25,
                paddingVertical : 10,
            }}>
            <TouchableOpacity style={{  flex : 2 }} onPress={()=>props.onCheck(props.item.id) }>
                <FontAwesome name={ props.item.completed ? "check-square" : "square-o" } size={23} />                               
            </TouchableOpacity>
            <View style={{ flex: 12 }}>                                  
                <TextInput value={props.item.title} placeholder="What's in your mind? " onChangeText={(new_title) => props.onUpdate(new_title, props.item.id) }  />                                  
            </View>
            <TouchableOpacity  style={{  flex : 1 }} onPress={()=>props.onDelete(props.item.id) } >
                <FontAwesome name="trash" size={23} />
            </TouchableOpacity>
        </View>             
    );
}1