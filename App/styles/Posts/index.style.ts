import {StyleSheet} from 'react-native';
import normalize from '../../helpers/normalizeText';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  item: {
    textAlign: 'center',
    marginTop: 20,
    padding: 25,
    fontSize: normalize(28),
    backgroundColor: 'steelblue',
  },
});
