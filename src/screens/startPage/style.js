import { StyleSheet } from "react-native";
import { COLORS } from "../../themes/colors";

export const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.text,

},
text : {
    fontSize: 20,
    padding: 20,
    marginRight: 30,
    marginLeft: 30,
    fontFamily: 'castaro'
},
touchableContainer: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
}
});