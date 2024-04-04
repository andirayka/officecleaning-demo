import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {DefaultContainer} from '@/components';
import {Button, Text} from 'react-native-paper';
import {MainStackScreenProps} from '@/types/screenTypes';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {getDistance} from 'geolib';

const myLatitude = 1.2761661110894618;
const myLongitude = 103.84588127971563;

const Alatitude = 1.2761930176747436;
const Alongitude = 103.84497519993911;
const Blatitude = 1.2762895301567667;
const Blongitude = 103.84618090595366;

const deltaCoordinate = {latitudeDelta: 0.0015, longitudeDelta: 0.0015};

const SelectAddress = ({navigation}: MainStackScreenProps<'SelectAddress'>) => {
  const [coordinate, setCoordinate] = useState({
    latitude: myLatitude,
    longitude: myLongitude,
  });
  const [distanceToA, setDistanceToA] = useState(0);
  const [distanceToB, setDistanceToB] = useState(0);

  // Measure distance between myplace to A and B
  useEffect(() => {
    setDistanceToA(
      getDistance(
        {latitude: coordinate.latitude, longitude: coordinate.longitude},
        {latitude: Alatitude, longitude: Alongitude},
      ),
    );
    setDistanceToB(
      getDistance(
        {latitude: coordinate.latitude, longitude: coordinate.longitude},
        {latitude: Blatitude, longitude: Blongitude},
      ),
    );
  }, [coordinate]);

  return (
    <DefaultContainer style={{paddingTop: 0}}>
      <Text variant="titleMedium">
        Location A = Green, Location B = Orange.
      </Text>
      <Text variant="titleMedium">
        Me to A = {distanceToA} meter, Me to B = {distanceToB} meter.
      </Text>
      <Text variant="titleMedium">
        Nearest to: {distanceToA < distanceToB ? 'A' : 'B'}
      </Text>

      <MapView
        provider={PROVIDER_GOOGLE}
        style={{flex: 1, marginTop: 4}}
        region={{
          ...coordinate,
          ...deltaCoordinate,
        }}
        initialRegion={{
          ...coordinate,
          ...deltaCoordinate,
        }}
        onPress={({nativeEvent}) => {
          setCoordinate({
            latitude: nativeEvent.coordinate.latitude,
            longitude: nativeEvent.coordinate.longitude,
          });
        }}>
        <Marker
          coordinate={{latitude: Alatitude, longitude: Alongitude}}
          title={'Place A'}
          pinColor="green"
        />
        <Marker
          coordinate={{latitude: Blatitude, longitude: Blongitude}}
          title={'Place B'}
          pinColor="orange"
        />
        <Marker coordinate={coordinate} title={'Your place'} />
      </MapView>

      <Button
        style={{marginTop: 16, borderRadius: 8}}
        buttonColor="#000"
        textColor="#fff"
        contentStyle={{paddingVertical: 4}}
        labelStyle={{fontSize: 18}}
        mode="contained"
        onPress={() => navigation.navigate('Payment')}>
        Save
      </Button>
    </DefaultContainer>
  );
};

export default SelectAddress;

const styles = StyleSheet.create({});
