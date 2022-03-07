
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';

import Home from './src/pages/home';
import DetailsScreen from './src/pages/detailsTask';
import Tasks from './src/pages/tasks';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Welcome" component={Home} />
          <Stack.Screen name="Agenda" component={DetailsScreen} />
          <Stack.Screen name="Tasks" component={Tasks} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
