// app/index.tsx
import React, { useCallback, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
  Alert,
  StyleSheet,
} from "react-native";
import { useFocusEffect, useNavigation, useRouter } from "expo-router";
import { getBooks, deleteBook } from "@/utils/book-storage";
import { Book } from "@/utils/types";

export default function BookListScreen() {
  const [books, setBooks] = useState<Book[]>([]);
  const router = useRouter();
  const navigation = useNavigation();

  const load = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  // set title
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "รายการหนังสือ",
    });
  }, [navigation]);

  useFocusEffect(
    useCallback(() => {
      load();
    }, [])
  );

  const handleDelete = (id: string) => {
    Alert.alert("ลบหนังสือ", "คุณแน่ใจหรือไม่ที่จะลบรายการนี้?", [
      { text: "ยกเลิก", style: "cancel" },
      {
        text: "ลบ",
        style: "destructive",
        onPress: async () => {
          await deleteBook(id);
          load();
        },
      },
    ]);
  };

  const renderItem = ({ item }: { item: Book }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => router.push(`/book/${item.id}`)}
    >
      <Image source={{ uri: item.image }} style={styles.thumb} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price} ฿</Text>
        <View style={styles.actions}>
          <Button
            title="Edit"
            onPress={() =>
              router.push({
                pathname: "/book/edit/[id]",
                params: { id: item.id },
              })
            }
          />
          <Button
            title="Delete"
            color="#d9534f"
            onPress={() => handleDelete(item.id)}
          />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Button
        title="เพิ่มหนังสือใหม่"
        onPress={() => router.push("/book/create")}
      />
      <FlatList
        data={books}
        keyExtractor={(i) => i.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingTop: 12 }}
      />
      {books.length === 0 && (
        <View style={styles.empty}>
          <Text>ยังไม่มีหนังสือในรายการ — กด "เพิ่มหนังสือใหม่"</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: {
    flexDirection: "row",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    overflow: "hidden",
  },
  thumb: { width: 80, height: 110, backgroundColor: "#eee" },
  info: { flex: 1, padding: 8, justifyContent: "space-between" },
  title: { fontSize: 16, fontWeight: "600" },
  price: { color: "#1a8917", marginTop: 6 },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 150,
    marginTop: 8,
  },
  empty: { marginTop: 20, alignItems: "center" },
});