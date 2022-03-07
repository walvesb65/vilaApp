import React from 'react';
import { Button, View } from 'native-base';
import Load from '../Load';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#05040f"}}>
      <Load />
      <Button
        title="Go to App"
        size="12"
        variant="subtle"
        backgroundColor="#240c84"
        onPress={() => navigation.navigate('Details')}
        width="50%"
        marginBottom="30%"
      >OPEN AGENDA</Button>
    </View>
  );
}
