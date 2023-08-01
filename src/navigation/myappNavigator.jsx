import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Maps, Home } from "../screens";
import { COLORS } from "../themes/colors";


const Stack = createNativeStackNavigator( );

function MyAppNavigator () {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home"
            component={Home}
            options={{
     
                headerTitleAlign: "center",
                headerStyle: {
                  backgroundColor: COLORS.primary,
                },
                headerTintColor: "#fff",
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
         
                headerTitleAlign: "center",
                headerStyle: {
                  backgroundColor: COLORS.primary,
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontSize: 28,
                  color: COLORS.white,
               
                  
                },
              }}
            
            />

           
        </Stack.Navigator>
    )

}

export default MyAppNavigator;