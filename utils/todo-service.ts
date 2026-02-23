import { supabase } from './supabase';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  created_at?: string;
}

// ดึงข้อมูลทั้งหมด
export async function getTodos(): Promise<Todo[]> {
  const { data, error } = await supabase
    .from('todos')
    .select('*')
    .order('created_at', { ascending: true });
  if (error) throw error;
  return data || [];
}

// เพิ่ม Todo ใหม่
export async function addTodo(title: string): Promise<Todo> {
  const { data, error } = await supabase
    .from('todos')
    .insert([{ title, completed: false }])
    .select()
    .single();
  if (error) throw error;
  return data;
}

// อัปเดต Todo (title หรือ completed)
export async function updateTodo(id: string, updates: Partial<Todo>): Promise<Todo> {
  const { data, error } = await supabase
    .from('todos')
    .update(updates)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

// ลบ Todo
export async function deleteTodo(id: string): Promise<void> {
  const { error } = await supabase
    .from('todos')
    .delete()
    .eq('id', id);
  if (error) throw error;
}
