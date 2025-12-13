import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

export default function Event(props: any) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json"
        );
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <View style={props.style}>
      {/* Header ส่วนบน */}
      <Text style={styles.headText}>Up Coming Events</Text>
      <Text style={styles.subHeadText}>What's the Worst That Could Happen</Text>

      {/* 3. FlatList แนวนอน */}
      <FlatList
        horizontal={true} // เลื่อนแนวนอน
        showsHorizontalScrollIndicator={false} //ซ่อนแถบสกอล์
        data={events}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => (
          // --- เริ่มต้นส่วนการ์ด Item ---
          <View style={styles.cardContainer}>
            <Image style={styles.cardImage} source={{ uri: item.uri }} />

            <View style={styles.cardContent}>
              <View style={styles.dateBox}>
                <Text style={styles.monthText}>{item.month}</Text>
                <Text style={styles.dateText}>{item.date}</Text>
              </View>

              <View style={styles.infoBox}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.detailText}>{item.datetime}</Text>
                <Text style={styles.detailText}>{item.place}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  subHeadText: {
    fontSize: 14,
    color: "gray",
    marginBottom: 15,
  },
  cardContainer: {
    marginRight: 15,
    width: 280,
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    flexDirection: "row",
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
  },
  dateBox: {
    paddingRight: 15,
    alignItems: "center",
  },
  monthText: {
    fontSize: 16,
    color: "red",
    fontWeight: "bold",
  },
  dateText: {
    fontSize: 18,
    color: "#333",
    fontWeight: "bold",
  },
  // View (padding) -> Info
  infoBox: {
    flex: 1, // ขยายเต็มพื้นที่ที่เหลือ
    paddingLeft: 10,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  detailText: {
    fontSize: 12,
    color: "gray",
  },
});
