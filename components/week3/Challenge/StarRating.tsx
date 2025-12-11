import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface StarRatingProps {
    rating: number;
    size?: number;
    color?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, size = 14, color = '#f1c40f' }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        const name = i <= rating ? 'star' : 'star-o';
        stars.push(
            <FontAwesome
                key={i}
                name={name}
                size={size}
                color={color}
                style={{ marginRight: 2 }}
            />
        );
    }
    return <View style={styles.container}>{stars}</View>;
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
});

export default StarRating;