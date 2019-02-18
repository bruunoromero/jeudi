import React from "react";
import { Appbar } from "react-native-paper";
import { withNavigation } from "react-navigation";

const enhance = withNavigation;

export default enhance(({ navigation, back, children }) => (
  <Appbar.Header>
    {back && <Appbar.BackAction onPress={() => navigation.goBack()} />}
    {children}
  </Appbar.Header>
));
