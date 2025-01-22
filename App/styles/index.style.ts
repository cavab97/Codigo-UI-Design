import {StyleSheet} from 'react-native';
import normalize from '../helpers/normalizeText';
export const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: normalize(22),
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: normalize(16),
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
