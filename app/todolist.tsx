import TodoItem from "@/components/week9/TodoItem";
import { addTodo, deleteTodo, getTodos, Todo, updateTodo } from "@/utils/todo-service";
import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, TouchableOpacity, View } from "react-native";

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  const onLoad = async () => {
    try {
      setLoading(true);
      const data = await getTodos();
      setTodos(data);
    } catch (error) {
      console.error("Error loading todos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    onLoad();
  }, []);

  const onCreate = async () => {
    try {
      const newTodo = await addTodo(""); // สร้างว่างๆ ไว้ก่อนตามโครงสร้างเดิม
      setTodos([...todos, newTodo]);
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  const onUpdate = async (new_title: string, id: string) => {
    try {
      const updated = await updateTodo(id, { title: new_title });
      setTodos(todos.map(item => item.id === id ? updated : item));
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const onCheck = async (id: string) => {
    try {
      const current = todos.find(item => item.id === id);
      if (!current) return;
      const updated = await updateTodo(id, { completed: !current.completed });
      setTodos(todos.map(item => item.id === id ? updated : item));
    } catch (error) {
      console.error("Error checking todo:", error);
    }
  };

  const onDelete = async (id: string) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter(item => item.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="lightblue" />
      </View>
    );
  }


  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ marginTop: 15 }}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          // <Text>{item.title}</Text>
          <TodoItem
            item={item}
            onUpdate={onUpdate}
            onCheck={onCheck}
            onDelete={onDelete}
          />
        )}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "lightblue",
          padding: 10,
          width: 50,
          height: 50,
          alignItems: "center",
          alignContent: "center",
          borderRadius: 25,
          position: "absolute",
          right: 10,
          bottom: 10,
        }}
        onPress={onCreate}
      >
        <FontAwesome name="plus" size={26} />
      </TouchableOpacity>
    </View>
  );
}