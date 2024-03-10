import React, {FC, memo, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../UIElements/Text';
import unit from '../../styles/unit';
import colors from '../../styles/colors';
import {CircleIcon, StarIcon} from '../../styles/icons';

type RepoCardProps = {
  name: string;
  language: string;
  stars: number;
};

const RepoCard: FC<RepoCardProps> = ({name, language, stars}) => {
  const langColor = useMemo(() => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }, []);
  return (
    <View style={styles.container}>
      <Text color="white" size="large" bold>
        {name}
      </Text>
      <View style={styles.subContainer}>
        <View style={styles.details}>
          <Text color="white" semiBold>
            {stars}
          </Text>
          <StarIcon />
        </View>
        {!!language && (
          <View style={styles.details}>
            <CircleIcon color={langColor} />
            <Text color="white" semiBold>
              {language}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20 * unit,
    backgroundColor: colors.primary,
    columnGap: 20 * unit,
    marginTop: 20 * unit,
    borderRadius: 8 * unit,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4 * unit,
  },
  subContainer: {
    marginTop: 10 * unit,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12 * unit,
  },
});

export default memo(RepoCard);
