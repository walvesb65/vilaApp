import React from 'react';
import { Button, View, Text } from 'native-base';
import Load from '../load';

export default function Home({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fff"
      }}>
      <Load />
      <Button
        small primary
        size="12"
        variant="subtle"
        backgroundColor="#4788f4"
        onPress={() => navigation.navigate('Agenda')}
        width="50%"
        marginBottom="30%"
      >
        <Text color="#fff" fontWeight="extrabold">OPEN AGENDA</Text>
      </Button>

    </View>
  );
}
