import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {DefaultContainer} from '@/components';
import {Button, Text} from 'react-native-paper';
import {MainStackScreenProps} from '@/types/screenTypes';
import {Calendar} from 'react-native-calendars';
import {addMonths, format} from 'date-fns';

const timeOptions = [
  '9:00 - 13:00',
  '10:00 - 14:00',
  '13:00 - 17:00',
  '14:00 - 18:00',
];

const SelectSchedule = ({
  navigation,
}: MainStackScreenProps<'SelectSchedule'>) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  return (
    <DefaultContainer>
      <Calendar
        style={{marginBottom: 16}}
        onDayPress={day => {
          setSelectedDate(day.dateString);
        }}
        markedDates={{
          [selectedDate]: {
            selected: true,
            disableTouchEvent: true,
          },
        }}
        minDate={format(new Date(), 'yyyy-MM-dd')}
        maxDate={format(addMonths(new Date(), 1), 'yyyy-MM-dd')}
      />

      <Text variant="titleMedium" style={{marginBottom: 12}}>
        Select time:
      </Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 12}}>
        {timeOptions.map(item => {
          return (
            <Button
              key={item}
              style={{width: '48%'}}
              mode={item === selectedTime ? 'contained' : 'outlined'}
              onPress={() => setSelectedTime(item)}>
              {item}
            </Button>
          );
        })}
      </View>

      <Button
        disabled={!selectedDate || !selectedTime}
        style={{marginTop: 24, borderRadius: 8}}
        buttonColor="#000"
        textColor="#fff"
        contentStyle={{paddingVertical: 4}}
        labelStyle={{fontSize: 18}}
        mode="contained"
        onPress={() => navigation.navigate('SelectAddress')}>
        Continue
      </Button>
    </DefaultContainer>
  );
};

export default SelectSchedule;

const styles = StyleSheet.create({});
