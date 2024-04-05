import React from 'react';
import {DefaultContainer} from '@/components';
import {Card, Text} from 'react-native-paper';
import {Aircond, Commercial, OneTime, Stewardship} from '@/assets/images';
import {MainTabScreenProps} from '@/types/screenTypes';

const SelectService = ({navigation}: MainTabScreenProps<'SelectService'>) => {
  return (
    <DefaultContainer>
      <Text variant="displaySmall" style={{marginBottom: 16}}>
        What you need today?
      </Text>

      <Card
        style={{marginBottom: 16}}
        onPress={() => {
          navigation.navigate('SelectSchedule');
        }}>
        <Card.Cover source={Aircond} />
        <Card.Title title="Aircon Maintenance" />
      </Card>
      <Card
        style={{marginBottom: 16}}
        onPress={() => {
          navigation.navigate('SelectSchedule');
        }}>
        <Card.Cover source={Commercial} />
        <Card.Title title="Commercial Cleaning" />
      </Card>
      <Card
        style={{marginBottom: 16}}
        onPress={() => {
          navigation.navigate('SelectSchedule');
        }}>
        <Card.Cover source={OneTime} />
        <Card.Title title="One Time Cleaning" />
      </Card>
      <Card
        style={{marginBottom: 16}}
        onPress={() => {
          navigation.navigate('SelectSchedule');
        }}>
        <Card.Cover source={Stewardship} />
        <Card.Title title="Stewardship" />
      </Card>
    </DefaultContainer>
  );
};

export default SelectService;
