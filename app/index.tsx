import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container} >
      ...
      
       <Link href="/test-components" style={styles.link}>
        <Text style={styles.linkText}>Test Components</Text>
      </Link>

       <Link href="/page2" style={styles.link}>
          <Text style={styles.linkText}>ไปหน้าที่ 2</Text>
        </Link>
      
      <Link href="/travel" style={styles.link}>
        <Text style={styles.linkText}>Travel</Text>
      </Link>

      <Link href="/resort" style={styles.link}>
        <Text style={styles.linkText}>Resort</Text>
      </Link>


      <Link href="/health" style={styles.link}>
          <Text style={styles.linkText}>Health</Text>
      </Link>

       <Link href="/review" style={styles.link}>
          <Text style={styles.linkText}>Reviwe</Text>
        </Link>

    </View>
  );
}




const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", },
  link: { margin: 10, padding: 10, backgroundColor: "#2196F3", borderRadius: 5, },
  linkText: { color: "#fff", fontSize: 16, textAlign: "center", },
});