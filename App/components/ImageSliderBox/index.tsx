import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

// Reusable ImageSlider component using FlatList
const ImageSlider = ({images, onImagePress}: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle the scroll event to update the current image index
  const onViewableItemsChanged = ({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  };

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 50,
  };

  // Render each image item
  const renderItem = ({item, index}: any) => (
    <TouchableOpacity onPress={() => onImagePress(index)}>
      <Image source={item} style={styles.image} />
    </TouchableOpacity>
  );

  // Render the page indicator dots
  const renderIndicator = () => {
    return (
      <View style={styles.indicatorContainer}>
        {images.map((_: any, index: number) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index && styles.activeDot, // Active dot style
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.sliderContainer}>
      <FlatList
        data={images}
        key={images.length}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      {renderIndicator()}
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300, // Adjust width as per your requirement
    height: 200, // Adjust height as per your requirement
    marginHorizontal: 5, // Space between images
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 10, // Place indicator below the image
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,0.3)',
    margin: 5,
  },
  activeDot: {
    backgroundColor: 'white', // Active dot color
  },
});

export default ImageSlider;
