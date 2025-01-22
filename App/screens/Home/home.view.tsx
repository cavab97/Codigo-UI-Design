import {View, Text, Image, StatusBar, FlatList} from 'react-native';
import React from 'react';
import Button from '../../components/Button/button';
import {MainColour} from '../../helpers/colors';
import {matrix} from '../../helpers';
import ImageSliderComponent from '../../components/ImageSlider';
import ImageComponent from '../../components/Image';
import ScheduleSection from './component/scheduleSection';
const categories = [
  'Map',
  'Inhabitants',
  'Shows',
  'Shopping',
  'Dine',
  'Meet & Greets',
];
const parkInfo = [
  {
    title: 'Park Hours',
    time: 'Today, 13 Feb 10am - 5pm',
    type: 'Plan my Visit',
    typeId: 1,
  },
  {
    title: 'My e-tickets',
    time: "There aren't any yet.",
    type: 'Retrieve here',
    typeId: 2,
  },
];
function HomeView({navigation}: any) {
  const renderItem = (item: string) => (
    <View style={{alignItems: 'center', margin: 10}}>
      <View
        style={{
          borderRadius: 30,
          backgroundColor: '#D3D3D3',
          height: 50,
          width: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {ImageComponent(item)}
      </View>
      <Text>{item}</Text>
    </View>
  );
  return (
    <View
      style={{
        flex: 1,
        // alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'space-evenly',
        paddingHorizontal: matrix.horizontalScale(0),
      }}>
      <StatusBar animated={true} backgroundColor="#61dafb" hidden={true} />
      <View style={{height: '30%', marginTop: 10}}>
        <ImageSliderComponent />
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'grey',
        }}>
        <FlatList
          data={categories}
          keyExtractor={item => item}
          numColumns={4}
          key={4}
          renderItem={({item}) => renderItem(item)}
          contentContainerStyle={{padding: 0, backgroundColor: 'yellow'}}
        />
      </View>
      {ScheduleSection()}

      <Text
        style={{
          fontWeight: 'bold',
          fontSize: matrix.moderateScale(18),
          alignSelf: 'flex-start',
          color: 'grey',
        }}>
        Upcoming Shows
      </Text>
      <View
        style={{
          flexDirection: 'column',
          width: '100%',
          alignSelf: 'center',
          justifyContent: 'space-around',
          height: '15%',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          // $onPress={() => navigation.navigate(SELECTION_ONE)}
          $brColor={MainColour(true).secondaryColour}>
          <Text
            style={{fontWeight: 'bold', fontSize: matrix.moderateScale(20)}}>
            Get Started
          </Text>
        </Button>
      </View>
    </View>
  );
}

export default HomeView;
