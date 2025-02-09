import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import orders from "@assets/data/orders";
import OrdersListItem from "@/components/OrdersListItem";

const OrdersList = () => {
  return (
    <View>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrdersListItem order={item} />}
        contentContainerStyle={{ gap: 10, padding: 10}}
      />
    </View>
  );
};

export default OrdersList;

const styles = StyleSheet.create({});
