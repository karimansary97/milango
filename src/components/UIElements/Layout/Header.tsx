import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import useRoute from '../../../hooks/useRoute';
import unit from '../../../styles/unit';

type HeaderProps = {};

const Header: FC<HeaderProps> = () => {
  const {name} = useRoute();

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 22 * unit,
    alignSelf: 'flex-start',
  },
});

export default Header;
