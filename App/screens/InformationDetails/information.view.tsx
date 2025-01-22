import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ImageSliderComponent from '../../components/ImageSlider';
import normalize from '../../helpers/normalizeText';
import ImageComponent from '../../components/Image';
import {ScrollView} from 'react-native-gesture-handler';
import NavigationService from '../../navigation/NavigationService';

function InformationView() {
  return (
    <ScrollView>
      <View
        style={{
          height: '35%',
          marginTop: 0,
        }}>
        <ImageSliderComponent />
        <TouchableOpacity
          onPress={() => {
            NavigationService.goBack();
          }}
          style={{position: 'absolute', marginTop: 15, marginLeft: 25}}>
          {ImageComponent('close')}
        </TouchableOpacity>
      </View>

      <View>
        <View>
          <Text>Zone 1</Text>
        </View>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: normalize(30)}}>
            Alligator Gar
          </Text>
        </View>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: 'grey',
            alignContent: 'center',
            width: 150,
            paddingVertical: 5,
          }}>
          <Text style={{padding: 2}}>
            {ImageComponent('walk')}
            410 m away <Text style={{color: 'red'}}>Map</Text>
          </Text>
        </View>
        <View>
          <Text style={styles.paragraph}>
            With its wide, alligator-like snout and razor-sharp teeth, it's easy
            to see how this fish acquired its name. Despite its ferocious
            appearance, the alligator gar poses little threat to human beings.
            They prefer to lie and wait for unsuspecting prey within reach,
            before lunging forward to grab their prey. As the largest species in
            the gar family, the alligator gar can reach up to 3 metres in
            length. Scientists have traced this species in fossil records dating
            back to 100 million years ago, hence they are also known as living
            fossils!
          </Text>
          <Text style={styles.paragraph}>
            As the largest species in the gar family, the alligator gar can
            reach up to 3 metres in length. Scientists have traced this species
            in fossil records dating back to 100 million years ago, hence they
            are also known as living fossils!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  paragraph: {
    marginBottom: 12, // Adds spacing between paragraphs
    lineHeight: 20, // Adjusts the line height for readability
  },
});
export default InformationView;
