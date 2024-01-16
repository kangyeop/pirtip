import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screen/Home';
import { SelectCity } from '../screen/Plan/SelectCity';
import { SelectDate } from '../screen/Plan/SelectDate';

const { Navigator, Screen } = createNativeStackNavigator();

export const AppStack: React.FC = () => {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="SelectCity" component={SelectCity} />
      <Screen name="SelectDate" component={SelectDate} />
    </Navigator>
  );
};
