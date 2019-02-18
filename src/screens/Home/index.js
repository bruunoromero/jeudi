import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { View, SafeAreaView, FlatList } from "react-native";
import { Text, Appbar, FAB, List } from "react-native-paper";

import Header from "../../components/Header";

const enhance = compose(
  firestoreConnect(["lists"]),
  connect(state => ({ lists: state.firestore.ordered.lists || [] }))
);

export default enhance(({ lists }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Appbar.Content title="Home" />
      </Header>
      <FlatList
        data={lists}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <List.Item
            onPress={() => {}}
            title={<Text style={{ fontWeight: "500" }}>{item.name}</Text>}
            left={props => <List.Icon {...props} icon="list" />}
          />
        )}
      />
      <SafeAreaView style={{ position: "absolute", right: 16, bottom: 16 }}>
        <FAB icon="add" onPress={() => {}} />
      </SafeAreaView>
    </View>
  );
});
