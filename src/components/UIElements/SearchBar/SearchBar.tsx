import React, {FC, useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  ViewStyle,
  TextInputProps,
} from 'react-native';
import unit from '../../../styles/unit';
import {CloseIcon, SearchIcon} from '../../../styles/icons';
import Button from '../Button';

type SearchBarProps = {
  value?: string;
  keyboardOpen?: boolean;
  style?: ViewStyle;
  onClear?: () => void;
} & TextInputProps;

const SearchBar: FC<SearchBarProps> = ({
  keyboardOpen = true,
  style,
  onClear,
  ...props
}) => {
  const [searchQueryText, setSearchQueryText] = useState<string>('');
  const onReset = () => {
    setSearchQueryText('');
    onClear?.();
  };
  const onChangeSearch = (query: string) => setSearchQueryText(query);
  return (
    <View style={[styles.container, style]}>
      <SearchIcon style={styles.SearchBarIcon} />
      <TextInput
        placeholder={'Search'}
        value={searchQueryText}
        onChangeText={onChangeSearch}
        placeholderTextColor={'#BDBDBD'}
        style={[styles.searchInput]}
        autoFocus={keyboardOpen}
        {...props}
      />
      {searchQueryText !== '' && <Button onPress={onReset} Icon={CloseIcon} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    height: 44 * unit,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12 * unit,
    borderRadius: 16 * unit,
  },
  SearchBarIcon: {marginEnd: 12 * unit},
  searchInput: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    fontSize: 12 * unit,
    color: 'black',
  },
});

export default SearchBar;
