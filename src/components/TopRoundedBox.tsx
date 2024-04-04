import {ViewStyle} from 'react-native';
import React from 'react';
import RoundedBox from '@/components/RoundedBox';

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
};
const TopRoundedBox = ({children, style = {}}: Props) => {
  return (
    <RoundedBox
      style={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0, ...style}}>
      {children}
    </RoundedBox>
  );
};

export default TopRoundedBox;
