import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Maps, Home} from '../screens';
import StartPage from '../screens/startPage';
import { COLORS } from '../themes/colors';


const Stack = createNativeStackNavigator();

function MyAppNavigator() {
  return (
    <Stack.Navigator initialRouteName="StartPage">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLORS.primary,
           
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 28,
            color: COLORS.white,
           
           
          },
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Maps"
        component={Maps}
        options={{
          headerTitle: 'sí, podés llorar',

          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 22,
            color: COLORS.white,
            fontFamily: 'castaro'
          },
        }}
      />
      <Stack.Screen
        name="StartPage"
        component={StartPage}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 28,
            color: COLORS.black,
          },
          headerShown: false,
        }}
      />
      
    </Stack.Navigator>
  );
}

export default MyAppNavigator;
