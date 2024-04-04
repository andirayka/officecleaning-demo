import {ScrollView, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
};
const DefaultContainer = ({children, style}: Props) => {
  return (
    <ScrollView contentContainerStyle={[styles.container, style]}>
      {children}
    </ScrollView>
  );
};

export default DefaultContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 22,
    flexGrow: 1,
  },
});
