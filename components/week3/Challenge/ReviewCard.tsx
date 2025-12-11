import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import StarRating from './StarRating';

// กำหนด Type ของข้อมูลที่รับเข้ามา
interface ReviewItem {
    id: string;
    name: string;
    rating: number;
    date: string;
    title: string;
    comment: string;
    avatar: ImageSourcePropType;
}

interface ReviewCardProps {
    item: ReviewItem;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ item }) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                {/* Avatar */}
                <Image source={item.avatar} style={styles.avatar} />
                
                {/* Name, Date, Rating */}
                <View style={styles.cardHeaderContent}>
                    <View style={styles.cardTopRow}>
                        <Text style={styles.userName}>{item.name}</Text>
                        <Text style={styles.dateText}>{item.date}</Text>
                    </View>
                    <StarRating rating={item.rating} />
                </View>
            </View>

            {/* Title & Comment */}
            <View style={styles.cardBody}>
                <Text style={styles.reviewTitle}>{item.title}</Text>
                <Text style={styles.reviewComment}>{item.comment}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
    },
    cardHeader: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    cardHeaderContent: {
        flex: 1,
        justifyContent: 'center',
    },
    cardTopRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2,
    },
    userName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    dateText: {
        fontSize: 10,
        color: '#aaa',
    },
    cardBody: {
        marginTop: 5,
    },
    reviewTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    reviewComment: {
        fontSize: 13,
        color: '#777',
        lineHeight: 18,
    },
});

export default ReviewCard;