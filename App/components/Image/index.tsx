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
    // case "linkd":
    //   return (
    //     <Image
    //       source={require("../../../assets/ImageComponentImage/Facebook.png")}
    //     ></Image>
    //   );
    // case "whatsapp":
    //   return (
    //     <Image
    //       source={require("../../../assets/ImageComponentImage/Facebook.png")}
    //     ></Image>
    //   );
    default:
      return '';
  }
}
