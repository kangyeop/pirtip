import { TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { InputSearch } from '../../components/InputSearch';
import { useRef } from 'react';
import { CityItem } from '../../components/CityItem';
import { useLinkTo } from '@react-navigation/native';

export const SelectCity: React.FC = () => {
  const inputRef = useRef<TextInput>(null);
  const linkTo = useLinkTo();

  const onClickCity = () => {
    linkTo('/SelectDate');
  };

  return (
    <SafeAreaView className="px-4">
      <InputSearch placeholder="어디로 떠나시나요?" ref={inputRef} />
      <View>
        {new Array(10).fill(0).map((_, index) => (
          <CityItem onClickSelect={onClickCity} key={index} name={`${index}`} />
        ))}
      </View>
    </SafeAreaView>
  );
};
