import { TouchableHighlight } from "react-native";
import { View, Text } from "react-native";
import { styles } from "./style";



 function StartPage ({navigation}) {
    return(<>
    <View style={styles.container}>
        <TouchableHighlight style={styles.touchableContainer} onPress={()=> navigation.navigate('Home')}>
            <Text style={styles.text}>
                A cuánto crees que estás del primer mundo?
            </Text>
            
        </TouchableHighlight>
    </View>
   
    </>
    )
}

export default StartPage;
