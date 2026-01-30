import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
// import UniversityMarkers from "./UniversityMarkers"; // ถ้าไม่ได้ใช้ในหน้า Quiz ปิดไว้ก่อนก็ได้ครับ

export default function MyMapView(props: any) {
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;

  if (props.location) {
    return (
      <MapView
        style={{ width: width, height: height }}
        initialRegion={{
          latitude: props.location.coords.latitude,
          longitude: props.location.coords.longitude,
          latitudeDelta: 0.05, // ปรับให้กว้างขึ้นนิดนึงจะเห็นคนรอบๆ ง่ายขึ้นครับ
          longitudeDelta: 0.05,
        }}
      >
        {/* บรรทัดนี้สำคัญมาก: เพื่อให้ Marker รูปคนจาก LocationQuiz แสดงผล */}
        {props.children}
        
        {/* หากต้องการให้จุดสีฟ้า (ตัวเอง) แสดงผลตลอดเวลาให้ใส่: */}
        <Marker
          coordinate={{
            latitude: props.location.coords.latitude,
            longitude: props.location.coords.longitude,
          }}
          title="ตำแหน่งของฉัน"
          pinColor="blue"
        />
      </MapView>
    );
  } else {
    return <MapView style={{ width: width, height: height }}></MapView>;
  }
}