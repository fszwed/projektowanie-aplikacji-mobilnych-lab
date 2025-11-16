import React from 'react';
import { View, StyleSheet } from 'react-native';
import ColorBlock from './ColorBlock';

const LayoutWithBlocks = () => {
    return (
        <View style={styles.container}>
            <ColorBlock color="#e74c3c" size={80} />
            <ColorBlock color="#2ecc71" size={80} />
            <ColorBlock color="#3498db" size={80} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
});

export default LayoutWithBlocks;