import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ColorScreen from './src/screens/ColorScreen';
import ComponentsScreen from './src/screens/ComponentScreen';
import CounterScreen from './src/screens/CounterScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import SquareScreen from './src/screens/SquareScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Color: ColorScreen,
    Components: ComponentsScreen,
    Counter: CounterScreen,
    List: ListScreen,
    Images: ImageScreen,
    Square: SquareScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
