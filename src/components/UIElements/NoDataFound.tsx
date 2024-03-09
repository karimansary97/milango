import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import Text from './Text';

type NoDataFoundProps = {
  des?: string;
};

const NoDataFound: FC<NoDataFoundProps> = ({des}) => {
  return (
    <View style={styles.container}>
      <Text bold size="xlarge">
        Not Data Found ...
      </Text>
      <Text bold size="xlarge">
        {des}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NoDataFound;
