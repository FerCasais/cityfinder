import { StyleSheet, StatusBar } from "react-native";
import { COLORS } from "../../themes/colors";



 export const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.backGround,
      marginTop: StatusBar.currentHeight,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      
      elevation: 3,
      
      
     
     
    },
    textTitle: {
        fontSize: 32,
        color: COLORS.text,
        padding: 10,
        fontWeight: 'bold',
        fontFamily: "dancing-script"
     
        
    }
  });


  