import { connect } from 'react-redux';
import { castSpell } from '../actions';
import { Wand} from './../../../components'


const mapStateToProps = (state, ownProps) => {
  return {
    //active: (ownProps.filter === state.visibilityFilter)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSpellSelected: () => {
      //dispatch(setVisibilityFilter(ownProps.filter));
      ownProps.onSpellSelected(); // TBD: is this the way to get top level compoenent actions triggered or should we pass and dispatch a top level action ?
      //console.log('container: spell selected!');
    },
    onCastEnd: (spellId) => {
      //dispatch(setVisibilityFilter(ownProps.filter));
      //dispatch(newEffect(1,{name:'FireDamage',duration:1})), // TBD: should iterate on all ownProps.targetIds and dispatch them
      dispatch(castSpell(spellId,100));
      ownProps.onSpellSelected(); // TBD: is this the way to get top level compoenent actions triggered or should we pass and dispatch a top level action ?
      //console.log('container: spell selected!');
    }
  };
};

const WandContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Wand);

export default WandContainer;

// TBD: refactor wand to be a separate module, which recieves (onSpellSelected) props into its wandContainer and then connects to wand compoenent
// so we can separate actions from the module so for example in the dojo we do nothing, but in game we process spell on players.
// TBD: check if game/battles modules also need props send into them ...
