import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// Import Components ที่เราแยกไว้ (Path ต้องถูกต้องตามโฟลเดอร์จริง)
import ReviewCard from '../components/week3/Challenge/ReviewCard';
import StarRating from '../components/week3/Challenge/StarRating';
import { SafeAreaView } from 'react-native-safe-area-context';

// --- Mock Data ---
// หมายเหตุ: ตรง require path ปรับตามตำแหน่งจริงของไฟล์ assets เทียบกับไฟล์นี้
const REVIEWS_DATA = [
    {
        id: '1',
        name: 'Grigoriy Kozhukhov',
        rating: 4,
        date: 'Jun 2018',
        title: 'Nice Place',
        comment: 'Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. Located in one of the uprising areas of Tokyo',
        avatar: require('../assets/week3/profile-4.jpg'), 
    },
    {
        id: '2',
        name: 'Ea Tipene',
        rating: 4,
        date: 'Jun 2018',
        title: 'Great for families',
        comment: 'Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. Located in one of the uprising areas of Tokyo',
        avatar: require('../assets/week3/profile-3.jpg'),
    },
];

// Component ย่อยสำหรับกราฟแท่ง (เฉพาะหน้านี้เลยเขียนไว้ในนี้)
const RatingBar = ({ stars, width }: { stars: number, width: string }) => (
    <View style={styles.ratingBarContainer}>
        <View style={styles.ratingBarStars}>
            <StarRating rating={stars} size={10} color="#999" />
        </View>
        <View style={styles.progressBarBackground}>
            {/* แปลง width string ให้เป็น Style */}
            <View style={[styles.progressBarFill, { width: width as any }]} />
        </View>
    </View>
);

export default function ReviewScreen() {
    return (
        <SafeAreaView style={styles.container}>
            {/* 1. Header */}
            

            <ScrollView style={styles.content}>
                {/* 2. Summary Section */}
                <View style={styles.summaryContainer}>
                    <View style={styles.scoreContainer}>
                        <Text style={styles.scoreText}>4.7</Text>
                        <Text style={styles.outOfText}>out of 5</Text>
                    </View>

                    <View style={styles.chartContainer}>
                        <RatingBar stars={5} width="10%" />
                        <RatingBar stars={4} width="60%" />
                        <RatingBar stars={3} width="15%" />
                        <RatingBar stars={2} width="5%" />
                        <RatingBar stars={1} width="5%" />
                        <Text style={styles.totalRatingsText}>25 Ratings</Text>
                    </View>
                </View>

                {/* 3. Review List Section */}
                <View style={styles.listContainer}>
                    {REVIEWS_DATA.map((item) => (
                        <ReviewCard key={item.id} item={item} />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    // Header
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#333',
    },
    headerRightText: {
        color: '#ff5a5f',
        fontSize: 16,
    },
    content: {
        flex: 1,
    },
    // Summary
    summaryContainer: {
        flexDirection: 'row',
        padding: 20,
        marginBottom: 10,
    },
    scoreContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scoreText: {
        fontSize: 48,
        color: '#ff5a5f',
        fontWeight: '400',
    },
    outOfText: {
        fontSize: 14,
        color: '#888',
    },
    chartContainer: {
        flex: 2,
        justifyContent: 'center',
        paddingLeft: 20,
    },
    ratingBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    ratingBarStars: {
        flexDirection: 'row',
        marginRight: 8,
        width: 60,
        justifyContent: 'flex-end',
    },
    progressBarBackground: {
        flex: 1,
        height: 3,
        backgroundColor: '#eee',
        borderRadius: 2,
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: '#ff5a5f',
        borderRadius: 2,
    },
    totalRatingsText: {
        textAlign: 'right',
        fontSize: 12,
        color: '#333',
        marginTop: 5,
        fontWeight: '600',
    },
    // List
    listContainer: {
        paddingHorizontal: 20,
    },
});