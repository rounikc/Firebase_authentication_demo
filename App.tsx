import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from './Screens/Loginscreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Loginscreen'>
          <Stack.Screen 
            name="Loginscreen" 
            component={Loginscreen}
            options={{ 
              headerShown: false 
            }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
