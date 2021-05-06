import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import Item from "./src/components/Item";
import ItemInterface from "./src/models/ItemInterface";

export default function App() {
  const [itens, onChangeItens] = React.useState<ItemInterface[]>([
    { id: 1, nome: "Iphone 5", quantidade: 1 },
  ]);
  const realizarPedidoButton = useRef<TouchableHighlight>(null);

  function updateItem(itemChanged: ItemInterface) {
    var itemStateId = itens.findIndex(
      (itemState) => itemState.id === itemChanged.id
    );
    let itensArr = [...itens];
    itensArr[itemStateId] = itemChanged;
    onChangeItens(itensArr);
  }

  useEffect(() => {
    async function getStorage() {
      const itensStorage = await AsyncStorage.getItem("itens");
      if (itensStorage !== null) {
        onChangeItens(JSON.parse(itensStorage));
      }
    }

    getStorage();
  }, []);

  useEffect(() => {
    async function saveStorage() {
      await AsyncStorage.setItem("itens", JSON.stringify(itens));
    }
    saveStorage();
  }, [itens]);

  return (
    <View style={styles.container}>
      <View style={styles.itens}>
        <FlatList
          data={itens}
          renderItem={({ item }) => (
            <Item item={item} updateItem={(item) => updateItem(item)}></Item>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        <TouchableHighlight onPress={() => realizarPedidoButton.current?.focus()}>
          <View style={styles.buttonFinalizar}>
            <Text>Finalizar</Text>
          </View>
        </TouchableHighlight>
      </View>
      <TouchableHighlight ref={realizarPedidoButton} onPress={() => console.log("Realizar Pedido")}>
        <View style={styles.buttonRealizarPedido}>
            <AntDesign style={{paddingRight: 4}} name="shoppingcart" size={24} color="#fff" />
            <Text style={styles.textRealizarPedido}>Realizar Pedido</Text>
        </View>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    // flexDirection: "column",
    margin: 30,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  itens: {},
  buttonFinalizar: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  buttonRealizarPedido: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#91D372",
    padding: 10,
    marginVertical: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  textRealizarPedido: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
});
