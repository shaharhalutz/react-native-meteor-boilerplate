import React from 'react';
import Home from './Home';
import Details from './Details';
import Profile from './Profile';
import {game} from '../modules';


const Routes = {
  getHomeRoute() {
    return {
      renderScene(navigator) {
        return <Home navigator={navigator} />;
      },

      getTitle() {
        return 'Home';
      },
    };
  },
  getDetailsRoute() {
    return {
      renderScene(navigator) {
        return <game.Game navigator={navigator} />;
      },

      getTitle() {
        return 'Game';
      },
    };
  },
  getProfileRoute() {
    return {
      renderScene(navigator) {
        return <Profile navigator={navigator} />;
      },

      showNavigationBar: false,
    };
  },
};

export default Routes;
