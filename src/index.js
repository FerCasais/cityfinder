import { StyleSheet,  SafeAreaView,  } from 'react-native';
import { Header } from './components';
import { COLORS } from './themes/colors';
import  RootNavigator  from './navigation/index'

export default function App() {

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


    

