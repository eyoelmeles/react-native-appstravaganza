import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useEffect } from "react";

import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { WALLET_COLORS, WALLET_FONTS, WALLET_SIZES } from "../(constant)/theme";
import { Transaction } from "../(model)/transaction";
import TransactionList from "../(components)/transaction_list";
import { Link } from "expo-router";

const Transactions: Transaction[] = [
  {
    sender: {
      name: "joel",
      email: "joelmeles@email.com",
    },
    receiver: {
      name: "joel",
      email: "joelmeles@email.com",
    },
    amount: 200,
    date: new Date(),
    transactionId: "1234123",
    referenceId: "1234123",
  },
  {
    sender: {
      name: "Alemu",
      email: "joelmeles@email.com",
    },
    receiver: {
      name: "Behailu",
      email: "joelmeles@email.com",
    },
    amount: -200,
    date: new Date(),
    transactionId: "123412352343",
    referenceId: "1234152342323",
  },
  {
    sender: {
      name: "Abreham",
      email: "joelmeles@email.com",
    },
    receiver: {
      name: "Teddy",
      email: "joelmeles@email.com",
    },
    amount: -40,
    date: new Date(),
    transactionId: "225134",
    referenceId: "123415213513342323",
  },
];

const SabiPayHome = () => {
  useEffect(() => {
    Alert.alert(
      "What is SabiPay",
      "SabiPay is a unique code of success for a transaction and cashback"
    );
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.topView}>
          <View style={styles.header}>
            <Ionicons name="menu" size={22} />
            <Text style={[WALLET_FONTS.h2]}>SabiPay</Text>
            <Ionicons name="notifications-outline" size={22} />
          </View>
          <View style={styles.balanceCard}>
            <Text style={[WALLET_FONTS.h1]}>200,000</Text>
            <Text style={[WALLET_FONTS.body5]}>Available Balance</Text>
          </View>
          <View style={styles.headerActions}>
            <View style={{ gap: 8, alignItems: "center" }}>
              <Ionicons name="send-outline" size={22} />
              <Text>Send</Text>
            </View>
            <View style={{ gap: 8, alignItems: "center" }}>
              <Ionicons name="add-outline" size={22} />
              <Text>Recieve</Text>
            </View>
            <View style={{ gap: 8, alignItems: "center" }}>
              <Ionicons name="send-outline" size={22} />
              <Text>TopUp</Text>
            </View>
            <View style={{ gap: 8, alignItems: "center" }}>
              <Ionicons name="send-outline" size={22} />
              <Text>Withdraw</Text>
            </View>
          </View>
        </View>
        <View style={{ padding: 16, flex: 1.5 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={[WALLET_FONTS.body3]}>Transaction History</Text>
            <Link href="sabi-pay/transactions" style={[WALLET_FONTS.body4]}>
              View more
            </Link>
          </View>
          {Transactions.map((transaction) => (
            <TransactionList
              key={transaction.transactionId}
              transaction={transaction}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default SabiPayHome;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  topView: {
    paddingHorizontal: 16,
    display: "flex",
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: WALLET_COLORS.primary,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingTop: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerActions: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 16,
  },
  balanceCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 100,
  },
});
