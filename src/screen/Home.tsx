import { Button } from '@rneui/base';
import { useLinkTo } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Home = () => {
  const linkTo = useLinkTo();
  return (
    <SafeAreaView>
      <Button onPress={() => linkTo('/SelectCity')} size="lg">
        Create Plan
      </Button>
    </SafeAreaView>
  );
};
