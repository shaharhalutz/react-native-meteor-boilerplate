import React, { View, Text, Component, StyleSheet, TouchableOpacity } from 'react-native';
import DropDown, { Select, Option, OptionList } from 'react-native-selectme';
import CastButton from './CastButton';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CCCCCC'
  },
  row: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CCCCCC',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowText: {
    fontSize: 16
  }
});

class Wand extends Component {
  //const { spells,onSpellCastEndFn,onSpellCastStartFn,onSpellSelectedFn} = this.props;

  _getOptionList() {
    return this.refs['OPTIONLIST'];
  }

  // state = {selectedSpellId,potency}
  _onSpellSelected(spellId){
    console.log('onSpellSelected, spellId:'+spellId);
    this.props.onSpellSelected();
  }

  _onCastEnd(spellId){
    console.log('_onCastEnd, spellId:'+spellId);
    this.props.onCastEnd(spellId);
  }

  renderSpellOptions() {

  // TBD: here temporarily, need to pass spells as props and initialy save spell to consitent storage on App Data refresh.
  const  spells = [
  {
    name: 'Fireball',
    description: 'A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. A target takes 8d6 fire damage.',
    command: 'enflame',
    durationMod: 0,
    learningDifficultyMod: 2,
    castingTimeMod: 2,
    resourcesMod: 2,
    casterEffects: [
                      {
                        mp:-10,
                        name: 'mana'
                      }
    ],
    targetEffects: [
                      {
                        hp:-20,
                        name: 'health'
                      }
    ]
  },
  {
    name: 'Magic Arrow',
    description: 'A magical arrow  springs from your hand and speeds to its target.',
    command: 'loose',
    durationMod: 0,
    learningDifficultyMod: 1,
    castingTimeMod: 1,
    resourcesMod: 1,
    casterEffects: [
                      {
                        mp:-5,
                        name: 'mana'
                      }
    ],
    targetEffects: [
                      {
                        hp:-10,
                        name: 'health'
                      }
    ]
  }];

    return(
      spells.map(function(spell) {
        return <Option value={spell._id} key={spell._id} >{spell.name}</Option>;
      })
    );
  }

  render(){
    return (
      <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
          <Select
            width={250}
            ref="SELECT1"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue="Select a Spell"
            onSelect={this._onSpellSelected.bind(this)}>

              {this.renderSpellOptions()}

          </Select>

          <View style={styles.buttonContainer}>
            <CastButton text="Cast" onPress={this._onCastEnd.bind(this)}
                                onPressIn={() => console.log('cast start')} />
          </View>
          <OptionList ref="OPTIONLIST"/>
      </View>
    );
  }
}
/*
Wand.propTypes = {

  spells:  React.PropTypes.object.isRequired,
  onSpellCastEndFn: React.PropTypes.func.isRequired,
  onSpellCastStartFn: React.PropTypes.func.isRequired,
  onSpellSelectedFn: React.PropTypes.func.isRequired
}
*/
export default Wand
