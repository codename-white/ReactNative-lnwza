import React from 'react';
import { Alert, Button, Image, ScrollView, Text, TextInput } from 'react-native';


export default function TestComponent() {
  return (
    <ScrollView  style={{ margin : 20 }} >
        <TextInput
  keyboardType="email-address"
  autoCapitalize="none"
  autoCorrect={false}
  maxLength={30}
  multiline={false}
  placeholder="Please enter your email"
  returnKeyType="next"
  onChangeText={(text)=>{}}
  defaultValue="Default text"
/>

<Button
  title="Press me"
  onPress={() => Alert.alert("Simple Button pressed")}
  color="#665544"
/>
<Text> Hello World </Text>
{/* <Image source={ require('@/assets/week3/tiny_logo.png') } style={{ width:50, height:50 }} /> */}
<Image source={{ uri : 'https://reactnative.dev/img/tiny_logo.png' }} style={{ width:50, height:50 }} />
{/* <Image source={{ uri : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' }} style={{ width:50, height:50 }} /> */}


    </ScrollView>
  );
}
