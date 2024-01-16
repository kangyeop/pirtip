import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DatePicker } from '../../components/DatePicker';

export const SelectDate: React.FC = () => {
  return (
    <SafeAreaView>
      <View className="h-12 px-4 border-b border-gray-300">
        <Text className="text-2xl font-bold">언제 떠나시나요?</Text>
      </View>
      <View className="h-full bg-gray-100 pt-4">
        <DatePicker />
      </View>
    </SafeAreaView>
  );
};
