import React from 'react';
import {DefaultContainer} from '@/components';
import {Card, Text} from 'react-native-paper';
import {Aircond, Commercial, OneTime, Stewardship} from '@/assets/images';
import {MainTabScreenProps} from '@/types/screenTypes';
import {Image, TouchableOpacity, useWindowDimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {formatReadebleDate, formatReadebleTime} from '@/utils';
import {addHours} from 'date-fns';

const images = [Aircond, Commercial, OneTime, Stewardship];
const Home = ({navigation}: MainTabScreenProps<'Home'>) => {
  const {width} = useWindowDimensions();

  return (
    <DefaultContainer>
      <Text variant="headlineMedium" style={{marginBottom: 16}}>
        Hello, Andi
      </Text>

      <Text variant="titleLarge" style={{marginBottom: 16}}>
        Your Upcoming Visit
      </Text>
      <Card style={{marginBottom: 24}}>
        <Card.Content>
          <Text variant="titleLarge">
            {formatReadebleDate(new Date())}, {formatReadebleTime(new Date())} -{' '}
            {formatReadebleTime(addHours(new Date(), 2))}
          </Text>
          <Text variant="bodyMedium">Lay Hong Lim</Text>
        </Card.Content>
      </Card>

      <Text variant="titleLarge" style={{marginBottom: 16}}>
        Want to make a new plan?
      </Text>
      <Carousel
        style={{marginBottom: 24}}
        loop={false}
        width={width}
        height={200}
        data={images}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SelectService');
            }}>
            <Image
              source={item}
              style={{
                width: width - 32,
                height: 200,
                borderRadius: 8,
              }}
            />
          </TouchableOpacity>
        )}
      />

      <Text variant="titleLarge" style={{marginBottom: 16}}>
        Promotions
      </Text>
      <Carousel
        style={{marginBottom: 24}}
        loop={false}
        width={width}
        height={200}
        data={images}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SelectService');
            }}>
            <Image
              source={item}
              style={{
                width: width - 32,
                height: 200,
                borderRadius: 8,
              }}
            />
          </TouchableOpacity>
        )}
      />
    </DefaultContainer>
  );
};

export default Home;
