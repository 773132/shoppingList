import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { CheckBox } from 'react-native-elements';

const initialList = [
  {
    id: 1,
    description: "bread",
    gotten: true,
  },


];

class SimpleList extends Component {
  constructor(props) {
    super(props);
    /*  Type your code here*/
    this.state = { data: this._addKeysToList(initialList) };
    this.checkfunction = this.checkFunction.bind(this);
    this._addKeysToList = this._addKeysToList.bind(this);
  }


checkFunction (item) {
  let tempData = this.state.data.map(i => {
    if (item.description === i.description) {
      i.gotten = !i.gotten;
    }
    return i;
  });
  this.setState({ data: tempData });
}



  _renderItem = ({item}) => {

    return(
/*  Type your code here*/
  <CheckBox
    title={item.description}
    onPress={() => {this.checkFunction(item);}}
    checked={item.gotten}
    />

  );
  };

  _addKeysToList = shopList => {
    return shopList.map(shopList => {
    return Object.assign(shopList, { key: shopList.description });
    /*  Type your code here*/
  };

  render() {
    return (
      <View style={styles.container}>
      <FlatList data={this.state.data} renderItem={this._renderItem} />
    /*  Type your code here*/
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  row: { fontSize: 36, padding: 42, borderWidth: 1, borderColor: "#DDDDDD" }
});

export default SimpleList;
