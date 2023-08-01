import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: COLORS.white,
    fontSize: 32,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  image: {
    height: 84,
    width: 300,
  },
});
