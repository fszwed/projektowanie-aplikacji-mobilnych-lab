import React from 'react';
import { Text } from 'react-native';

interface UserNameProps {
    name: string;
}

const UserName: React.FC<UserNameProps> = ({ name }) => {
    return <Text>{name}</Text>;
};

export default UserName;