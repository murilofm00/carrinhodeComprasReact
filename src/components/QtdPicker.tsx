import { AntDesign } from "@expo/vector-icons";
import React, { Component } from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface IProps {
  quantidade: number;
  setQuantidade: (quantidade: number) => void;
}
export default class QtdPicker extends Component<IProps> {
  render() {
    const { quantidade, setQuantidade } = this.props;
    return (
      <View style={styles.picker}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={quantidade.toString()}
          onChangeText={(textInput) =>
            setQuantidade(textInput !== "" ? parseInt(textInput) : 0)
          }
        />
        <AntDesign
          style={styles.button}
          name="pluscircle"
          size={24}
          color="green"
          onPress={() => setQuantidade(quantidade + 1)}
        />
        <AntDesign
          style={styles.button}
          name="minuscircle"
          size={24}
          color="red"
          onPress={() => setQuantidade(quantidade - 1)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  picker: {
    paddingVertical: 10,
    paddingHorizontal: 2,
    marginHorizontal: 5,
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 0.5,
    width: "100%",
    paddingHorizontal: 4,
    // fontSize: 20,
  },
  button: {
    // backgroundColor: "green",
    // // borderColor: "black",
    // // borderWidth: 0.5,
    // borderRadius: 30,
    // marginRight: 5,
    // height: 30,
    // width: 30,
    // fontSize: 28,
    // textAlign: "center",
    marginVertical: "auto",
    margin: 5,
  },
});
