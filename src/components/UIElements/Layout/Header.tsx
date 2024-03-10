import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import useRoute from '../../../hooks/useRoute';
import unit from '../../../styles/unit';
import Text from '../Text';
import {BackButtonIcon} from '../../../styles/icons';
import Button from '../Button';
import useNavigation from '../../../hooks/useNavigation';

type HeaderProps = {};

const Header: FC<HeaderProps> = () => {
  const {name, params} = useRoute();
  const {name: customeName} = params;
  const {goBack} = useNavigation();

  return (
    <View style={styles.container}>
      <Button Icon={BackButtonIcon} onPress={goBack} />
      <Text size="xxlarge" color="white">
        {customeName || name}
      </Text>
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
