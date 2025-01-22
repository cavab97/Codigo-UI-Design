import {Image} from 'react-native';
import React from 'react';
import {matrix} from '../../helpers';
export default function ImageComponent(shortForm: any) {
  switch (shortForm) {
    case 'home':
      return (
        <Image
          style={{
            height: matrix.verticalScale(30),
            width: matrix.horizontalScale(30),
          }}
          source={require('../../assets/images/On.png')}></Image>
      );
    case 'wallet':
      return (
        <Image
          style={{
            height: matrix.verticalScale(30),
            width: matrix.horizontalScale(30),
          }}
          source={require('../../assets/images/Icons-V2.png')}></Image>
      );
    case 'more':
      return (
        <Image
          style={{
            height: matrix.verticalScale(30),
            width: matrix.horizontalScale(30),
          }}
          source={require('../../assets/images/On-2.png')}></Image>
      );
    case 'appIcon':
      return (
        <Image
          resizeMode="contain"
          style={{
            height: matrix.verticalScale(80),
            width: matrix.horizontalScale(120),
            padding: 5,
          }}
          source={require('../../assets/images/image-3.png')}></Image>
      );
    case 'Map':
      return (
        <Image
          resizeMode="contain"
          style={{
            height: matrix.verticalScale(35),
            width: matrix.horizontalScale(35),
            padding: 5,
          }}
          source={require('../../assets/images/Group-342.png')}></Image>
      );
    case 'Inhabitants':
      return (
        <Image
          resizeMode="contain"
          style={{
            height: matrix.verticalScale(35),
            width: matrix.horizontalScale(35),
            padding: 5,
          }}
          source={require('../../assets/images/Group-342-2.png')}></Image>
      );
    case 'Shows':
      return (
        <Image
          resizeMode="contain"
          style={{
            height: matrix.verticalScale(35),
            width: matrix.horizontalScale(35),
            padding: 5,
          }}
          source={require('../../assets/images/Group-341.png')}></Image>
      );
    case 'Shopping':
      return (
        <Image
          resizeMode="contain"
          style={{
            height: matrix.verticalScale(35),
            width: matrix.horizontalScale(35),
            padding: 5,
          }}
          source={require('../../assets/images/Group-275.png')}></Image>
      );
    case 'Dine':
      return (
        <Image
          resizeMode="contain"
          style={{
            height: matrix.verticalScale(35),
            width: matrix.horizontalScale(35),
            padding: 5,
          }}
          source={require('../../assets/images/Group-310.png')}></Image>
      );
    case 'Meet & Greets':
      return (
        <Image
          resizeMode="contain"
          style={{
            height: matrix.verticalScale(50),
            width: matrix.horizontalScale(50),
            padding: 5,
          }}
          source={require('../../assets/images/Layer-1.png')}></Image>
      );
    case '1':
      return (
        <Image
          resizeMode="contain"
          style={{
            height: matrix.verticalScale(25),
            padding: 5,
          }}
          source={require('../../assets/images/Icons-V2-2.png')}></Image>
      );
    case '2':
      return (
        <Image
          resizeMode="contain"
          style={{
            height: matrix.verticalScale(25),
            width: matrix.horizontalScale(25),
            padding: 5,
          }}
          source={require('../../assets/images/Icons-V2.png')}></Image>
      );
    case 'time':
      return (
        <Image
          resizeMode="contain"
          style={{
            height: matrix.verticalScale(25),
            width: matrix.horizontalScale(25),
            padding: 5,
          }}
          source={require('../../assets/images/Icons-V2-2.png')}></Image>
      );
    default:
      return '';
  }
}
