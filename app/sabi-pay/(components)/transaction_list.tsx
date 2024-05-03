import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Transaction } from "../(model)/transaction";
import { WALLET_FONTS } from "../(constant)/theme";

interface TransactionListProps {
  transaction: Transaction;
}

const TransactionList = (props: TransactionListProps) => {
  return (
    <View style={styles.container}>
      <View style={{ gap: 2 }}>
        <Text style={[WALLET_FONTS.h4]}>{props.transaction.sender.name}</Text>
        <Text style={[WALLET_FONTS.body4]}>
          {props.transaction.sender.email}
        </Text>
      </View>
      <View style={{ alignSelf: "flex-end" }}>
        <Text style={WALLET_FONTS.h4}>{props.transaction.amount}</Text>
        <Text style={WALLET_FONTS.body5}>
          {props.transaction.amount < 0 ? "Send" : "Receive"}
        </Text>
      </View>
    </View>
  );
};

export default TransactionList;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingTop: 12,
  },
});
