import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {
  name?: string;
  onClickSelect?: () => void;
};

export const CityItem: React.FC<Props> = (props) => {
  const { name, onClickSelect } = props;
  return (
    <View className="w-full h-16 relative flex flex-row items-center justify-between border-b border-gray-300">
      <Icon name="room" size={25} />
      <Text className="text-md flex-grow font-semibold ml-2">{name}</Text>
      <TouchableOpacity onPress={onClickSelect} className="border border-gray-300 rounded-full p-2">
        <Text>선택</Text>
      </TouchableOpacity>
    </View>
  );
};
