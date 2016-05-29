import React from 'react';
import Routes from '../';
import {battles} from '../../modules';

const onDetailsPress = (navigator) => {
  return navigator.push(Routes.getDetailsRoute());
};

const HomeContainer = (props) => {
  return (

    <battles.BattlesMod
      onDetailsPress={() => onDetailsPress(props.navigator)}
    />
  );
};

HomeContainer.propTypes = {
  navigator: React.PropTypes.object,
};

export default HomeContainer;
