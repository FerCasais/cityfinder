import { styles } from './style';
import { View, Text, TouchableHighlight, FlatList, SafeAreaView } from 'react-native';
import CATEGORIES from '../../constants/data/categories.json';
import { CategoriesItem } from '../../components';

function Home( { navigation } ) {

  const onPressSelected  = ( { categoryId, name, color, image2, price, backgroundImage, latitude, longitude}) => {

    navigation.navigate("Maps", {
      categoryId: categoryId,
      name: name,
      color: color,
      image2: image2,
      price: price,
      backgroundImage: backgroundImage,
      latitude: latitude,
      longitude: longitude
    
     
    })
  }

  return ( <View style={styles.container}>
    <View>
     
    </View>
    {
      <FlatList
        data={CATEGORIES}
        style={styles.categoryContainer}
        contentContainerStyle={styles.listCategory}
        renderItem={({ item }) => <CategoriesItem {...item} onPressSelected={()=>onPressSelected({ categoryId: item.id,
          color: item.backgroundColor,
          name: item.name,
          image2: item.image2,
          price: item.price,
          backgroundImage: item.backgroundImage,
          latitude: item.latitude,
          longitude: item.longitude
        
        })} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    }
  </View>)
 
}

export default Home;
