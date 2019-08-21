import React from 'react';
import { Image, Text, Button } from 'react-native';

export default function LoginScreen() {
    render(){
        return (
            <Text>You've hit the login screen!</Text>
            <Button
                onPress={this.props.onLoginPress}
                title="Login!"
            />
        );
    }
}