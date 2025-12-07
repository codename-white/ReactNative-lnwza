import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function Bmi() {
    const [weight, setWeight] = useState('70');
    const [height, setHeight] = useState('170');
    const [bmi, setBmi] = useState('0');
    const [status, setstatus] = useState('');

    console.log("STATE : ", weight, height, bmi);

    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        const w = parseFloat(weight);
        const h = parseFloat(height);
        const bmiValue = (w / ((h / 100) * (h / 100)));
        
        setBmi(bmiValue.toFixed(2));

        // [Quiz 1] : Logic กำหนดข้อความตามเงื่อนไข BMI
        let description = "";
        if (bmiValue < 18.5)
            description = "Underweight";
        else if (bmiValue >= 18.5 && bmiValue <= 24.99)
            description = "Normal";
        else if (bmiValue >= 25 && bmiValue <= 29.99)
            description = "Overweight";
        else if (bmiValue >= 30 && bmiValue <= 39.99)
            description = "Obese";
        else
            description = "Morbidly Obese";

        setstatus(description); // Set ค่าข้อความเพื่อแสดงผล
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            {/* ส่วนที่ 1: Input น้ำหนัก */}
            <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10, marginTop: 20, justifyContent: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
                <Text style={{ fontSize: 20 }}>Weight (kg.)</Text>
                <TextInput
                    value={weight}
                    style={{ fontSize: 20, marginTop: 10 }}
                    placeholder="Input your weight ..."
                    keyboardType="numeric"
                    onChangeText={(newWeight) => setWeight(newWeight)}
                />
            </View>

            {/* ส่วนที่ 2: Input ส่วนสูง */}
            <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10, marginTop: 20, justifyContent: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
                <Text style={{ fontSize: 20 }}>Height (cm.)</Text>
                <TextInput
                    value={height}
                    style={{ fontSize: 20, marginTop: 10 }}
                    placeholder="Input your height ..."
                    keyboardType="numeric"
                    onChangeText={(newHeight) => setHeight(newHeight)}
                />
            </View>

            {/* ส่วนที่ 3: แสดงผลลัพธ์ (Display Output) */}
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 20 }}>
                {/* กล่องแสดงค่าตัวเลข BMI */}
                <View style={{ backgroundColor: "white", flex: 1, borderRadius: 10, height: 100, justifyContent: "center", alignItems: "center", marginRight: 5, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
                    <Text style={{ fontSize: 35, fontWeight: "semibold", textAlign: "center" }}>{bmi}</Text>
                </View>

                {/* กล่องแสดงข้อความผลลัพธ์ */}
                <View style={{ backgroundColor: "white", flex: 1, borderRadius: 10, height: 100, justifyContent: "center", alignItems: "center", marginLeft: 5, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>{status}</Text>
                </View>
            </View>

            {/* ส่วนที่ 4: ปุ่มคำนวณ */}
            <TouchableOpacity onPress={onPressButton}>
                <View style={{ padding: 10, backgroundColor: "#4682B4", borderRadius: 40, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
                    <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                        Calculate
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}