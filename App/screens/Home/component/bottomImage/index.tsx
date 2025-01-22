import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import ImageComponent from '../../../../components/Image';
import normalize from '../../../../helpers/normalizeText';

const mockData = [
  {
    id: '1',
    title: 'Beautiful Beach',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    time: '2.00pm',
  },
  {
    id: '2',
    title: 'Mountain View',
    image:
      'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    time: '4.00pm',
  },
  {
    id: '3',
    title: 'City Skyline',
    image:
      'https://images.unsplash.com/photo-1499346030926-9a72daac6c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    time: '6.00pm',
  },
  {
    id: '4',
    title: 'Forest Trail',
    image:
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    time: '8.00am',
  },
  {
    id: '5',
    title: 'Desert Sunset',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    time: '5.00pm',
  },
];

const HorizontalImageList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={mockData}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image source={{uri: item.image}} style={styles.image} />
            <View style={styles.timeContainer}>
              {ImageComponent('time')}
              <Text style={styles.time}>{item.time}</Text>
            </View>

            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    marginRight: 16,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 130,
    borderRadius: 10,
    marginBottom: 8,
  },
  title: {
    fontSize: normalize(12),
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    bottom: 10,
  },
  time: {
    fontSize: normalize(14),
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    padding: 5,
  },
  timeContainer: {
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    top: 5,
    left: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default HorizontalImageList;
