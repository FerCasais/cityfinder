import { Text, TouchableHighlight, ImageBackground } from 'react-native';
import { styles } from './style';

const CategoriesItem = ({ id, name, backgroundColor, backgroundImage, onPressSelected   }) => {

onPressSelected = () => {
  console.warn(id)

  
}


  return (
    <TouchableHighlight
    style={styles.item}
      onPress={() => 
        onPressSelected({ id }) 
        
        
      }>
      <ImageBackground source={{ uri: backgroundImage }} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>{name}</Text>
      </ImageBackground>
    </TouchableHighlight>
  );
};
export default CategoriesItem;
