import React, { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { getData, storeData } from "@/utils/storage"

export default function Height() {
  const [height, setHeight] = useState<string>("0");

  const load = async () => {
    console.log("load");
     let h = await getData("height") ;
     h = h || "0"; // Default to "0" if no height is stored
     setHeight(h);
  };

  useEffect(() => {
    load();
  }, []);

  const save = async () => {
    console.log("save");
     await storeData("height", height);
     Alert.alert("Height saved: " + height);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Details</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Height (cm):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(text) => setHeight(text)}
          value={height.toString()}
        />
      </View>

      <Button title="Save Height" onPress={save} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    marginRight: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    flex: 1,
  },
  displayContainer: {
    marginTop: 20,
  },
  displayText: {
    fontSize: 18,
    marginBottom: 5,
  },
});