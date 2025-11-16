import React, { Component } from 'react';
import { Text } from 'react-native';

interface UserSurnameProps {
    surname: string;
}

class UserSurname extends Component<UserSurnameProps, {}> {
    render() {
        const { surname } = this.props;
        return <Text>{surname}</Text>;
    }
}


export default UserSurname;