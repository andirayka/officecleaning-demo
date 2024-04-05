import {View} from 'react-native';
import React from 'react';
import {DefaultContainer, InputText} from '@/components';
import {Button, Text} from 'react-native-paper';
import {MainStackScreenProps} from '@/types/screenTypes';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {SubmitHandler, useForm} from 'react-hook-form';
import {formatCurrency} from '@/utils';

const formSchema = Yup.object({
  totalArea: Yup.number().required(),
  meetingRooms: Yup.number().required(),
  bathrooms: Yup.number().required(),
  desks: Yup.number().required(),
});
type FormValues = Yup.InferType<typeof formSchema>;

const CalculatePrice = ({
  navigation,
}: MainStackScreenProps<'CalculatePrice'>) => {
  const {control, handleSubmit, formState, watch} = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(formSchema),
  });
  const totalArea = watch('totalArea');
  const meetingRooms = watch('meetingRooms');
  const bathrooms = watch('bathrooms');
  const desks = watch('desks');
  const totalPrice =
    (totalArea || 0) * 50 +
    (meetingRooms || 0) * 20 +
    (bathrooms || 0) * 15 +
    (desks || 0) * 5;

  const onSubmit: SubmitHandler<FormValues> = async payload => {
    console.log(payload);
    navigation.navigate('Payment');
  };

  return (
    <DefaultContainer>
      <View style={{flex: 1}}>
        <InputText
          hookForm={{control, name: 'totalArea'}}
          label={'Total Area in Feet'}
        />
        <InputText
          hookForm={{control, name: 'meetingRooms'}}
          label={'Number of Meeting Rooms'}
        />
        <InputText
          hookForm={{control, name: 'bathrooms'}}
          label={'Number of Bathrooms'}
        />
        <InputText
          hookForm={{control, name: 'desks'}}
          label={'Number of Desks'}
          containerStyle={{marginBottom: 20}}
        />

        <Text variant="titleLarge" style={{marginBottom: 8}}>
          Final Price: {formatCurrency(totalPrice)}
        </Text>
        <Text variant="bodyLarge" style={{marginBottom: 4}}>
          Calcaulation Detail:
        </Text>
        <Text
          variant="bodyLarge"
          style={{
            marginBottom: 16,
            backgroundColor: 'lightblue',
            borderRadius: 4,
            padding: 8,
          }}>
          {
            'Total Area * 50 SGD +\nNumber of Meeting Rooms & 20 SGD +\nNumber of Bathrooms * 15 +\nNumber of Desks * 5 SGD'
          }
        </Text>
      </View>

      <Button
        disabled={!formState.isValid}
        style={{marginTop: 24, borderRadius: 8}}
        buttonColor="#000"
        textColor="#fff"
        contentStyle={{paddingVertical: 4}}
        labelStyle={{fontSize: 18}}
        mode="contained"
        onPress={handleSubmit(onSubmit)}>
        Save
      </Button>
    </DefaultContainer>
  );
};

export default CalculatePrice;
