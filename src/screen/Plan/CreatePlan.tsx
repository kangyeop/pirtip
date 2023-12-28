import { Text } from '@rneui/base';
import { Input } from '@rneui/themed';
import { View } from 'react-native';

export const CreatePlan: React.FC = () => {
  return (
    <View>
      <View className="flex-row justify-between items-center p-10">
        <Text>일정 이름</Text>
        <Input />
      </View>
    </View>
  );
};
