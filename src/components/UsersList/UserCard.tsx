import React, {FC} from 'react';
import {StyleSheet, Pressable, Image} from 'react-native';
import Text from '../UIElements/Text';
import unit from '../../styles/unit';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import ListRenderRightIcons from './ListRenderRightIcons';
import colors from '../../styles/colors';
import useNavigation from '../../hooks/useNavigation';
import routes from '../../navigation/routes';

type UserCardProps = {
  name: string;
  image: string;
  sharedUrl: string;
};

const UserCard: FC<UserCardProps> = ({name, image, sharedUrl}) => {
  const {navigate} = useNavigation();

  const handleOnCardPress = () => {
    navigate(routes.UserRepos);
  };
  return (
    <Swipeable
      renderRightActions={(_, dragX) => (
        <ListRenderRightIcons dragX={dragX} sharedUrl={sharedUrl} />
      )}
      containerStyle={styles.container}>
      <Pressable style={styles.content} onPress={handleOnCardPress}>
        <Image
          source={{uri: image}}
          resizeMode="contain"
          style={styles.image}
        />
        <Text bold size="large" color="white">
          {name}
        </Text>
      </Pressable>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20 * unit,
    borderRadius: 8 * unit,
  },
  content: {
    flex: 1,
    padding: 20 * unit,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20 * unit,
  },
  image: {
    width: 30 * unit,
    height: 30 * unit,
    borderRadius: 30 * unit,
  },
});

export default UserCard;
