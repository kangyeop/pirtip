import { Text } from '@rneui/base';
import { Input } from '@rneui/themed';
import { View } from 'react-native';

export const CreatePlan: React.FC = () => {
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <Text>일정 이름</Text>
        <Input />
      </View>
    </View>
  );
};
