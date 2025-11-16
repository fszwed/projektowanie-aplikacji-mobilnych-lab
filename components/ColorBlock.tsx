import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ColorBlockProps {
    color: string;
    size: number;
}

const ColorBlock: React.FC<ColorBlockProps> = ({ color, size }) => {
    const blockStyle = {
        backgroundColor: color,
        width: size,
        height: size,
    };

    return <View style={[styles.block, blockStyle]} />;
};

const styles = StyleSheet.create({
    block: {
        margin: 10,
    },
});

export default ColorBlock;