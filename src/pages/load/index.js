import React from "react";
import { Center, Image, NativeBaseProvider } from "native-base";
import { StyleSheet, View } from 'react-native';

export default function Load() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>     
        <Center flex={1}>
          <Image source={{
            uri: "https://i.pinimg.com/originals/e0/94/d9/e094d9bb9a23354435ac138f3200e53d.gif"
          }} alt="Alternate Text" size="220" />
        </Center>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width:'100%',
    backgroundColor: "#05040f"
  }
});
