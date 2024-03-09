import React, {FC} from 'react';
import {KeyboardAvoidingView, Platform, StatusBar, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import styles from './Layout.style';
import LayoutProps from './Layout.type';
import Header from './Header';
import colors from '../../../styles/colors';

const behavior = Platform.OS === 'ios' ? 'padding' : 'height';

const Layout: FC<LayoutProps> = ({
  HeaderVisablity = false,
  style,
  children,
}) => {
  const {top} = useSafeAreaInsets();
  return (
    <KeyboardAvoidingView
      behavior={behavior}
      style={[styles.wrapper, {paddingTop: top}]}>
      <StatusBar
        backgroundColor={colors.defaultBackGround}
        barStyle={'light-content'}
      />
      <View style={[styles.content, style]}>
        {HeaderVisablity && <Header />}
        {children}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Layout;
