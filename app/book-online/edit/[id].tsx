import {
  getBookByIdDatabase,
  updateBookDatabase,
  uploadBookImage,
} from "@/utils/book-service";
import { Book } from "@/utils/types";
import * as ImagePicker from "expo-image-picker";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
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

export default function EditBook() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const navigation = useNavigation();

  const [book, setBook] = useState<Book | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const b = await getBookByIdDatabase(id || "");
        if (b) {
          setBook(b);
          setTitle(b.title);
          setDescription(b.description);
          setPrice(String(b.price));
          setImage(b.image);
          navigation.setOptions({
            title: "แก้ไข: " + b.title,
          });
        }
      } catch (error) {
        console.error("Load book error:", error);
        Alert.alert("Error", "ไม่สามารถเริ่มข้อมูลหนังสือได้");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id, navigation]);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission required", "ต้องการสิทธิ์เข้าถึงรูปภาพ");
      return;
    }
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });
    if (!res.canceled) {
      setImage(res.assets[0].uri);
    }
  };

  const handleUpdate = async () => {
    if (!book || !id) return;
    if (!title.trim()) {
      Alert.alert("Validation", "กรุณากรอกชื่อหนังสือ");
      return;
    }

    try {
      setSaving(true);
      let finalImageUrl = image;

      // ถ้า image เริ่มต้นด้วย file:// แสดงว่าเป็นรูปใหม่ที่พึ่งเลือกมา ต้อง upload ก่อนา
      if (image.startsWith("file://") || image.startsWith("content://")) {
        console.log("Uploading new image...");
        finalImageUrl = await uploadBookImage(image);
      }

      const updated: Partial<Book> = {
        title: title.trim(),
        description: description.trim(),
        price: Number(price) || 0,
        image: finalImageUrl,
      };

      await updateBookDatabase(id, updated);
      Alert.alert("สำเร็จ", "บันทึกข้อมูลเรียบร้อยแล้ว");
      router.back(); // กลับไปหน้าก่อนหน้า (ถ้าใช้ navigate อาจจะต้องการระบุ path เจาะจง)
    } catch (error) {
      console.error("Update error:", error);
      Alert.alert("Error", "เกิดข้อผิดพลาดในการบันทึกข้อมูล");
    } finally {
      setSaving(false);
    }
  };

  if (loading)
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={{ marginTop: 10 }}>กำลังโหลดข้อมูล...</Text>
      </View>
    );

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
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <View style={[styles.image, styles.imagePlaceholder]}>
          <Text>ไม่มีรูปภาพ</Text>
        </View>
      )}
      <Button title="เลือกรูปภาพใหม่" onPress={pickImage} color="#5bc0de" />

      <View style={{ height: 20 }} />
      <Button
        title={saving ? "กำลังบันทึก..." : "บันทึกการแก้ไข"}
        onPress={handleUpdate}
        disabled={saving}
        color="#5cb85c"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, paddingBottom: 40 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
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
  },
  imagePlaceholder: {
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
});
