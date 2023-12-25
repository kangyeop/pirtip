import { Button } from '@rneui/base';
import { View } from 'react-native';
import { useLinkTo } from '@react-navigation/native';

export const Home = () => {
  const linkTo = useLinkTo();
  return (
    <View>
      <Button onPress={() => linkTo('/CreatePlan')} size="lg">
        Create Plan
      </Button>
    </View>
  );
};
