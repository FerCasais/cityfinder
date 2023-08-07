import { StyleSheet,  SafeAreaView, View, ActivityIndicator } from 'react-native';
import { Header } from './components';
import { COLORS } from './themes/colors';
import  RootNavigator  from './navigation/index'
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "dancing-bold": require("../assets/fonts/DancingScript-Bold.ttf"),
    "dancing-script": require("../assets/fonts/DancingScript-SemiBold.ttf"),
    "castaro": require("../assets/fonts/CastoroTitling-Regular.ttf"),
  });


  if (!fontsLoaded) {
    return (
      <View style={styles.splashFonts}>
        <ActivityIndicator style={styles.activityIndicator} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
        <Header title="Far away" />
      
      <RootNavigator/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backGround2,
  },
});


    

