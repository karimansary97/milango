import React, {FC} from 'react';
import {StyleSheet, Pressable, Animated, Share} from 'react-native';
import {ShareIcon} from '../../styles/icons';
import colors from '../../styles/colors';
import unit from '../../styles/unit';

type ListRenderRightIconsProps = {
  dragX: Animated.AnimatedInterpolation<string | number>;
  sharedUrl: string;
};

const ListRenderRightIcons: FC<ListRenderRightIconsProps> = ({
  dragX,
  sharedUrl,
}) => {
  const trans = dragX.interpolate({
    inputRange: [10, 30, 50, 70],
    outputRange: [-0.8, -1.2, 5, 20],
  });

  const handleOnSharePress = async () => {
    await Share.share({message: sharedUrl});
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{translateX: trans}],
        },
      ]}>
      <Pressable
        style={[styles.icon, {backgroundColor: colors.sky}]}
        onPress={handleOnSharePress}>
        <ShareIcon />
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    justifyContent: 'center',
    padding: 20 * unit,
  },
});

export default ListRenderRightIcons;
