import Height from "@/components/week9/Height";
import WeightChart from "@/components/week9/WeightChart";
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";

export default function YourHealth() {
  return (
    <ScrollView style={styles.container}>
      <Height />
      <WeightChart />
    </ScrollView>
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