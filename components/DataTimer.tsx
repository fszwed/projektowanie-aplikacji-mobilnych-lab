import React from 'react';
import { View, Text } from 'react-native';

interface DataTimerProps {
    currentTime: string;
}

const DataTimer: React.FC<DataTimerProps> = ({ currentTime }) => {
    return (
        <View>
            <Text>Czas początkowy:</Text>
            <Text>{currentTime}</Text>
        </View>
    );
};

export default DataTimer;