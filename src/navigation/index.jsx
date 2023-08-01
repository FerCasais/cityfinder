import { NavigationContainer } from "@react-navigation/native";

import MyAppNavigator from "./myappNavigator";

function RootNavigator ()  {
    return (
        <NavigationContainer>
            <MyAppNavigator/>
        </NavigationContainer>
    )

}

export default RootNavigator;