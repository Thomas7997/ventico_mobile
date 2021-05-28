import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import Home from './Home';
import History from './History';
import Activation from './Activation';

const Navigate = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'activation', title: 'Activation', icon: 'album' },
    { key: 'history', title: 'History', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    activation: Activation,
    history: History,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Navigate;