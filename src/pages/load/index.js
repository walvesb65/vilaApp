import React from "react";
import { Center, Image, NativeBaseProvider } from "native-base";
import { StyleSheet, View } from 'react-native';

export default function Load() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>     
        <Center flex={1}>
          <Image source={{
            uri: "https://cdn.dribbble.com/users/4874/screenshots/1792443/media/07162da5c8b25998b759ff1a7aefb9e8.gif"
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
    backgroundColor: "#fff"
  }
});
