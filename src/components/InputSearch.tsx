import { useNavigation } from '@react-navigation/native';
import { forwardRef, useRef } from 'react';
import { TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {
  value?: string;
  onChangeText?: (text: string) => void;
} & TextInputProps;

export const InputSearch = forwardRef<TextInput, Props>((props, ref) => {
  const navigation = useNavigation();
  const inputRef = useRef<TextInput>(null);
  const onPressView = () => {
    if (ref && typeof ref !== 'function') {
      ref.current?.focus();
    } else {
      inputRef.current?.focus();
    }
  };

  const onClickBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={onPressView} className="w-full relative">
      <TextInput ref={ref || inputRef} className="px-8 h-12 border border-gray-300" {...props} />
      <TouchableOpacity onPress={onClickBack} className="h-full flex justify-center left-1 absolute">
        <Icon name="keyboard-arrow-left" size={30} />
      </TouchableOpacity>
      <View className="h-full flex justify-center right-2 absolute">
        <Icon name="search" size={25} />
      </View>
    </TouchableOpacity>
  );
});
