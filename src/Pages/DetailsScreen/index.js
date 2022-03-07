import React from 'react';
import { Button, View, Text } from 'react-native';
import Tasks from '../Tasks';

export default function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Tasks />
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Agenda')}
      />
    </View>
  );
}