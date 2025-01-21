import {View, Text, Image, StatusBar} from 'react-native';
import React from 'react';
import Button from '../../components/Button/button';
import {MainColour} from '../../helpers/colors';
import {matrix} from '../../helpers';
import ImageSliderComponent from '../../components/ImageSlider';
function HomeView({navigation}: any) {
  return (
    <View
      style={{
        flex: 1,
        // alignItems: 'center',
        backgroundColor: '#D3F3E6',
        justifyContent: 'space-evenly',
        paddingHorizontal: matrix.horizontalScale(0),
      }}>
      <StatusBar animated={true} backgroundColor="#61dafb" hidden={true} />
      <View style={{height: '30%', marginTop: 10}}>
        <ImageSliderComponent />
      </View>

      <Text
        style={{
          fontWeight: 'bold',
          fontSize: matrix.moderateScale(18),
          alignSelf: 'flex-start',
          color: 'grey',
        }}>
        We will ask couple of quetions to better userstand your vitamin need.
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
