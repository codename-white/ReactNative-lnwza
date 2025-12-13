import React from "react";
import { Image, Text, View } from "react-native";

// แก้จุดที่ 1: เติม : any หลัง props เพื่อแก้เส้นแดง
export default function TourItem(props: any) {
  return (
    <View style={{ marginRight: 10 }}>
      <Image
        style={{ width: 200, height: 150, borderRadius: 10 }}
        source={{
          uri: props.item.uri,
        }}
      />
      <View
        style={{
          marginTop: -30,
          height: 30,
          width: 200,
          paddingHorizontal: 10,
          backgroundColor: "black",
          opacity: 0.5,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <Text style={{ fontSize: 20, color: "white" }}>{props.item.title}</Text>
      </View>
    </View>
  );
}