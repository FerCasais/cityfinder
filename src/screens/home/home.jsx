import { styles } from './style';
import { View, Text, TouchableHighlight, FlatList } from 'react-native';
import CATEGORIES from '../../constants/data/categories.json'
import { CategoriesItem } from '../../components';




function Home ( {navigation } )  {

  const touchme = () => {
    navigation.navigate ( 'Maps' );
  
  }


  const keyExtractor = (item) => item.id.toString();


    return(
     <View style={styles.container}>
            <FlatList
            data={CATEGORIES}
            renderItem= 
          {({ item }) => <CategoriesItem {...item} />}
                
          keyExtractor= {keyExtractor}
           
                
           />
            <TouchableHighlight onPress={touchme} style={styles.touchable}>
              <Text style={styles.touchable}>tocame</Text>
            </TouchableHighlight> 
        </View>)
       
  
}

export default Home;