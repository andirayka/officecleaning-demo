import {StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
};
const RoundedBox = ({children, style}: Props) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default RoundedBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 22,
    flexGrow: 1,
  },
});
