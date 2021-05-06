import React, { Component } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import QtdPicker from "./QtdPicker";
import InterfaceItem from "../models/ItemInterface";

interface IProps {
  item: InterfaceItem;
  updateItem: (item: InterfaceItem) => void;
}
export default class Item extends Component<IProps> {
  render() {
    return (
      <View>
        <View style={styles.item}>
          <Image
            style={{
              height: 150,
              width: 150,
            }}
            source={{
              uri:
                "data:image/jpeg;base64,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",
            }}
          />
          <View style={styles.info}>
            <Text>{this.props.item.nome}</Text>
            <Text>Quantidade: {this.props.item.quantidade}</Text>
            <QtdPicker
              quantidade={this.props.item.quantidade}
              setQuantidade={(quantidade) =>
                this.props.updateItem({
                  ...this.props.item,
                  quantidade: quantidade,
                })
              }
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
    flex: 1,
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "#20232a",
    borderRadius: 6,
  },
  info: {
    flex: 1,
    flexDirection: "column",
  },
});
