import React, {useRef} from 'react';
import ImageSlider from '@coder-shubh/react-native-image-slider';

const images = new Array(3).fill(
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
);

function ImageSliderComponent() {
  return (
    <ImageSlider
      testID="imageSlider_testID"
      images={images}
      imageHeight={200}
      dotSize={10}
      dotColor="silver"
      activeDotColor="blue"
      showNavigationButtons={false}
      showIndicatorDots={true}
      imageLabel={false}
      //   label="Example Label"
      extrapolate="clamp"
      autoSlideInterval={5000}
      containerStyle={{position: 'absolute'}}
      radius={5}
    />
  );
}

export default ImageSliderComponent;
