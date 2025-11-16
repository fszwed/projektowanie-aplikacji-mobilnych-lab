import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StyledPizzaText = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.baseText}>
                <Text style={[styles.italicText, styles.boldText]}>Pizza</Text>
                {' to bardzo smaczne włoskie danie. Wykonuje się ją z ciasta drożdżowego. Na ciasto wylewa się sos pomidorowy. Na wierzch kładzie się składniki: '}
                <Text style={styles.boldText}>
                    kiełbasę, ser żółty, oliwki, paprykę.
                </Text>
                {' Istnieje wiele rodzajów '}
                <Text style={styles.italicText}>pizzy</Text>
                {', może być mięsna, bezmięsna, rybna lub słodka z '}
                <Text style={styles.yellowText}>ananasem.</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    baseText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333',
    },
    boldText: {
        fontWeight: 'bold',
    },
    italicText: {
        fontStyle: 'italic',
    },
    yellowText: {
        color: '#E49B0F',
        fontWeight: 'bold',
    },
});

export default StyledPizzaText;