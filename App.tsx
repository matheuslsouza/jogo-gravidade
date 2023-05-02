import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Colors } from "react-native/Libraries/NewAppScreen";

const App = () => {
  const handleForceButton = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.area}></View>
      <View style={styles.control}>
        <View>
          <Text style={styles.controlText}>UpForcer:</Text>
          <Text style={styles.controlText}>Velocity:</Text>
          <Text style={styles.controlText}>PosY:</Text>
        </View>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={handleForceButton}
        >
          <Text style={{ color: "#fff" }}>Fazer Força</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
