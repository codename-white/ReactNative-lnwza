import { addBookDatabase, uploadBookImage } from "@/utils/book-service";
import * as ImagePicker from "expo-image-picker";
import { useNavigation, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function CreateBook() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<string>("https://picsum.photos/400/600");
  const [saving, setSaving] = useState(false);
  
  const router = useRouter();
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({ title: "เพิ่มหนังสือใหม่" });
  }, [navigation]);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission required", "ต้องการสิทธิ์เข้าถึงรูปภาพ");
      return;
    }
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 0.7,
    });
    if (!res.canceled) {
      setImage(res.assets[0].uri);
    }
  };

  const handleSave = async () => {
    if (!title.trim()) {
      Alert.alert("Validation", "กรุณากรอกชื่อหนังสือ");
      return;
    }

    try {
      setSaving(true);
      let finalImageUrl = image;

      // ถ้าเป็นรูปจากเครื่อง ต้อง upload ก่อน
      if (image.startsWith("file://") || image.startsWith("content://")) {
        console.log("Uploading image...");
        finalImageUrl = await uploadBookImage(image);
      }

      const bookData: any = {
        title: title.trim(),
        description: description.trim(),
        price: Number(price) || 0,
        image: finalImageUrl,
      };

      await addBookDatabase(bookData);
      Alert.alert("สำเร็จ", "เพิ่มหนังสือเรียบร้อยแล้ว");
      router.back();
    } catch (error) {
      console.error("Save error:", error);
      Alert.alert("Error", "เกิดข้อผิดพลาดในการบันทึกข้อมูล");
    } finally {
      setSaving(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {saving && (
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color="#fff" />
          <Text style={{ color: "white", marginTop: 10 }}>กำลังบันทึก...</Text>
        </View>
      )}

      <Text style={styles.label}>ชื่อหนังสือ</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={styles.input}
        placeholder="ระบุชื่อหนังสือ"
      />

      <Text style={styles.label}>รายละเอียด</Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        style={[styles.input, { height: 120, textAlignVertical: "top" }]}
        multiline
        placeholder="ระบุรายละเอียดหนังสือ"
      />

      <Text style={styles.label}>ราคา (฿)</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        style={styles.input}
        keyboardType="numeric"
        placeholder="0.00"
      />

      <Text style={styles.label}>รูปภาพ</Text>
      <Image source={{ uri: image }} style={styles.image} />
      <Button title="เลือกรูปภาพ" onPress={pickImage} color="#5bc0de" />

      <View style={{ height: 20 }} />
      <Button
        title={saving ? "กำลังบันทึก..." : "บันทึกหนังสือ"}
        onPress={handleSave}
        disabled={saving}
        color="#5cb85c"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, paddingBottom: 40 },
  label: { fontWeight: "bold", marginTop: 15, fontSize: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginVertical: 10,
    resizeMode: "cover",
    backgroundColor: "#eee",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
});
