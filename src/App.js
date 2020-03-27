import React, { Component } from 'react';
import { View, ActivityIndicator, } from 'react-native'
import { Slider, Input, Image, ListItem, Overlay, Tile, Rating, Tooltip, Text, SearchBar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {
  render() {
    return (
      <View>
        <Tooltip popover={<Text>Info here</Text>}
        backgroundColor='yellow'
        highlightColor='red'
        >
          <Text>Press me</Text>
        </Tooltip>
      </View >
    );
  }
}

