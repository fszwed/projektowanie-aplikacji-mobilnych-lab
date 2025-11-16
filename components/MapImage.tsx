import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const MapImage = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.map}
                source={{
                    uri: 'https://i.erli.pl/kd7jsy.25d2b8.l.webp',
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: 600,
        height: 600,
    },
});

export default MapImage;