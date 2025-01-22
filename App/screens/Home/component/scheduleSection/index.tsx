import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ImageComponent from '../../../../components/Image';
import normalize from '../../../../helpers/normalizeText';

const parkInfo = [
  {
    title: 'My e-tickets',
    time: "There aren't any yet.",
    type: 'Retrieve here',
    typeId: 2,
  },
  {
    title: 'Park Hours',
    time: 'Today, 13 Feb 10am - 5pm',
    type: 'Plan my Visit',
    typeId: 1,
  },
];

const ScheduleSection = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={parkInfo}
        keyExtractor={item => item.typeId.toString()}
        horizontal
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={{width: 16}} />}
        renderItem={({item}) => (
          <View style={styles.card}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{item.title}</Text>
              {ImageComponent(item.typeId.toString())}
            </View>

            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.type}>{item.type}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    height: 120,
    flex: 0,
    width: 180,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: normalize(16),
    fontWeight: 'bold',
    marginBottom: 5,
  },
  time: {
    fontSize: normalize(14),
    color: '#555',
    marginBottom: 5,
  },
  type: {
    fontSize: normalize(12),
    color: '#FF0000',
  },
  list: {
    paddingVertical: 10,
  },
  titleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default ScheduleSection;
