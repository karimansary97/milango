import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';

type LayoutProps = {
  HeaderVisablity?: boolean;
  children?: ReactNode;
  style?: ViewStyle;
};

export default LayoutProps;
