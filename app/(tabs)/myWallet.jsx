import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appName}>Electronic Wallets</Text>
      </View>
      
      {/* Balance Section */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balance}>$3457.22</Text>
        <Text style={styles.walletText}>Main wallet</Text>
      </View>
      
      {/* Quick Actions */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="send" size={30} color="maroon" />
          <Text style={styles.actionText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="download" size={30} color="maroon" />
          <Text style={styles.actionText}>Receive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome name="credit-card" size={30} color="maroon" />
          <Text style={styles.actionText}>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialCommunityIcons name="swap-horizontal" size={30} color="maroon" />
          <Text style={styles.actionText}>Swap</Text>
        </TouchableOpacity>
      </View>

      {/* Portfolio Section */}
      <View style={styles.portfolioContainer}>
        <Text style={styles.portfolioText}>Portfolio</Text>
        <Text style={styles.portfolioAmount}>$3,853.22</Text>
      </View>

      {/* Token List */}
      <ScrollView style={styles.tokenList}>
        <Text style={styles.appName}>Recent Activities</Text>
        <View style={styles.tokenItem}>
          <FontAwesome5 name="bitcoin" size={30} color="orange" />
          <View style={styles.tokenDetails}>
            <Text style={styles.tokenName}>Bitcoin</Text>
            <Text style={styles.tokenQuantity}>0.9031</Text>
          </View>
          <View style={styles.tokenValueChange}>
            <Text style={styles.tokenValue}>$22,630.74</Text>
            <Text style={styles.tokenChangePositive}>+19.31%</Text>
          </View>
        </View>
        <View style={styles.tokenItem}>
          <FontAwesome5 name="ethereum" size={30} color="gray" />
          <View style={styles.tokenDetails}>
            <Text style={styles.tokenName}>Ethereum</Text>
            <Text style={styles.tokenQuantity}>1.6701</Text>
          </View>
          <View style={styles.tokenValueChange}>
            <Text style={styles.tokenValue}>$2,132.10</Text>
            <Text style={styles.tokenChangeNegative}>-0.82%</Text>
          </View>
        </View>
        <View style={styles.tokenItem}>
          <MaterialCommunityIcons name="litecoin" size={30} color="silver" />
          <View style={styles.tokenDetails}>
            <Text style={styles.tokenName}>Litecoin</Text>
            <Text style={styles.tokenQuantity}>52.492</Text>
          </View>
          <View style={styles.tokenValueChange}>
            <Text style={styles.tokenValue}>$676.25</Text>
            <Text style={styles.tokenChangeNegative}>-0.64%</Text>
          </View>
        </View>
        <View style={styles.tokenItem}>
          <FontAwesome name="circle" size={30} color="blue" />
          <View style={styles.tokenDetails}>
            <Text style={styles.tokenName}>XRP</Text>
            <Text style={styles.tokenQuantity}>0.42</Text>
          </View>
          <View style={styles.tokenValueChange}>
            <Text style={styles.tokenValue}>$0.746147</Text>
            <Text style={styles.tokenChangeNegative}>-2.76%</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 30
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  balanceContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  balance: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  walletText: {
    fontSize: 18,
    color: '#888',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  actionButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    marginTop: 5,
    fontSize: 14,
    color: 'black',
  },
  portfolioContainer: {
    width: '90%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  portfolioText: {
    fontSize: 18,
    color: '#888',
  },
  portfolioAmount: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tokenList: {
    width: '90%',
    alignSelf: 'center',
  },
  tokenItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  tokenDetails: {
    flex: 1,
    marginLeft: 10,
  },
  tokenName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tokenQuantity: {
    fontSize: 14,
    color: '#888',
  },
  tokenValueChange: {
    alignItems: 'flex-end',
  },
  tokenValue: {
    fontSize: 16,
    color: '#888',
  },
  tokenChangePositive: {
    fontSize: 16,
    color: 'green',
  },
  tokenChangeNegative: {
    fontSize: 16,
    color: 'red',
  },
});
