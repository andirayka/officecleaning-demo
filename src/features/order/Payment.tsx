import {Image, View} from 'react-native';
import React from 'react';
import {DefaultContainer} from '@/components';
import {Button} from 'react-native-paper';
import {MainStackScreenProps} from '@/types/screenTypes';
import {Logo} from '@/assets/images';

const Payment = ({navigation}: MainStackScreenProps<'Payment'>) => {
  return (
    <DefaultContainer>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={Logo}
          style={{width: 300, height: 300, resizeMode: 'contain'}}
        />
      </View>

      <Button
        style={{marginTop: 24, borderRadius: 8}}
        buttonColor="#000"
        textColor="#fff"
        contentStyle={{paddingVertical: 4}}
        labelStyle={{fontSize: 18}}
        mode="contained"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [
              {
                name: 'MainTab',
                state: {
                  routes: [{name: 'Home'}],
                },
              },
            ],
          })
        }>
        Back to Home
      </Button>
    </DefaultContainer>
  );
};

export default Payment;
