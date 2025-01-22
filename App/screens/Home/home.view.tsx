import {View, Text, Image, StatusBar, FlatList} from 'react-native';
import React from 'react';
import Button from '../../components/Button/button';
import {MainColour} from '../../helpers/colors';
import {matrix} from '../../helpers';
import ImageSliderComponent from '../../components/ImageSlider';
import ImageComponent from '../../components/Image';
import ScheduleSection from './component/scheduleSection';
import HorizontalImageList from './component/bottomImage';
import {ScrollView} from 'react-native-gesture-handler';
import normalize from '../../helpers/normalizeText';
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
          borderRadius: 50,
          backgroundColor: '#D3D3D3',
          height: 60,
          width: 60,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {ImageComponent(item)}
      </View>
      <Text style={{fontSize: normalize(12)}}>{item}</Text>
    </View>
  );
  return (
    <ScrollView
      style={{
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'space-evenly',
        backgroundColor: '#fff',
        paddingHorizontal: matrix.horizontalScale(0),
      }}>
      <StatusBar animated={true} backgroundColor="#61dafb" hidden={true} />
      <View style={{height: '27%', marginTop: 0}}>
        <ImageSliderComponent />
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <FlatList
          data={categories}
          keyExtractor={item => item}
          numColumns={4}
          key={4}
          renderItem={({item}) => renderItem(item)}
          contentContainerStyle={{padding: 0}}
        />
      </View>
      {ScheduleSection()}

      <View style={{paddingHorizontal: 15}}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: normalize(16),
              alignSelf: 'flex-start',
              color: 'grey',
              padding: 5,
            }}>
            Upcoming Shows
          </Text>
          <Text style={{color: '#FF0000', fontSize: normalize(12)}}>
            View all
          </Text>
        </View>

        {HorizontalImageList()}
      </View>

      {/* <View
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
      </View> */}
    </ScrollView>
  );
}

export default HomeView;
