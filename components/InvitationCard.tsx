import React from 'react';
import { View, Text } from 'react-native';

interface InvitationProps {
    date: string;
    time: string;
    location: string;
    dressCode: string;
}

const InvitationCard: React.FC<InvitationProps> = ({ date, time, location, dressCode }) => {
    return (
        <View>
            <Text>Zaproszenie na Urodziny</Text>
            <Text>Data: {date}</Text>
            <Text>Godzina: {time}</Text>
            <Text>Miejsce: {location}</Text>
            <Text>Strój: {dressCode}</Text>
        </View>
    );
};

export default InvitationCard;