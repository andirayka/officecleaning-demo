import React from 'react';
import {RoundedBox} from '@/components';
import {Logo} from '@/assets/images';
import {ScrollView} from 'react-native-gesture-handler';
import {Image, StyleSheet} from 'react-native';

const Splash = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <RoundedBox style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={Logo}
          style={{width: 50, height: 50, resizeMode: 'contain'}}
        />
      </RoundedBox>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F3F3F3',
    flexGrow: 1,
  },
});

export default Splash;
