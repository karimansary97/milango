import React, {FC} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import unit from '../../styles/unit';
import colors from '../../styles/colors';

type ListFooterLoadingProps = {
  hasLoading: boolean;
};

const ListFooterLoading: FC<ListFooterLoadingProps> = ({hasLoading}) => {
  return (
    <View style={styles.container}>
      {hasLoading && <ActivityIndicator color={colors.white} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20 * unit,
  },
});

export default ListFooterLoading;
