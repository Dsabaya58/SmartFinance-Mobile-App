import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons, FontAwesome5, Ionicons, Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import CardComponent from '../../components/card';
import SendMoneyModal from '../../components/SendMoneyModal'; // Import the modal components
import ReceiveMoneyModal from '../../components/ReceiveMoneyModal';
import BuyGoodsModal from '../../components/BuyGoodsModal';
import BuyAirtimeModal from '../../components/BuyAirtimeModal';
import AccountCard from '../../components/AccountCard';


export default function HomeScreen() {
  const [showBalance, setShowBalance] = useState(true); // State to track balance visibility
  const [greeting, setGreeting] = useState(''); // State to hold the greeting
  const [sendMoneyModalVisible, setSendMoneyModalVisible] = useState(false); // State to track Send Money modal visibility
  const [receiveMoneyModalVisible, setReceiveMoneyModalVisible] = useState(false); // State to track Receive Money modal visibility
  const [buyGoodsModalVisible, setBuyGoodsModalVisible] = useState(false); // State to track Buy Goods modal visibility
  const [buyAirtimeModalVisible, setBuyAirtimeModalVisible] = useState(false); // State to track Buy Airtime modal visibility

  // Function to toggle balance visibility
  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };

  // Function to set greeting based on current time
  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      setGreeting('Good morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>SmartFinance</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <MaterialCommunityIcons name="qrcode-scan" size={22} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Feather name="pie-chart" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Greeting Section */}
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>{greeting}, Damian</Text>
      </View>

      {/* Financial Features */}
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
        <View style={styles.balanceContainer}>
          <View style={styles.balanceHeader}>
            <Text style={styles.balanceTitle}>My Accounts</Text>
            <Text>show balance</Text>
            <TouchableOpacity onPress={toggleBalanceVisibility}>
              <FontAwesome5 name={showBalance ? "eye" : "eye-slash"} size={22} color="maroon" />
            </TouchableOpacity>
          </View>
          {showBalance && (
            <Text style={styles.balanceAmount}>$5,000.00</Text>
          )}
        </View>

        {/* My Accounts Section */}
      <View style={styles.myAccountsContainer}>
          <View style={styles.sectionHeader}>
            <FontAwesome5 name="wallet" size={24} color="maroon" /> 
            <Text style={styles.sectionTitle}>My Accounts</Text>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>Add Account</Text>
            </TouchableOpacity>
          </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <AccountCard type="savings" balance={2000.00} />
          <AccountCard type="checking" balance={3000.00} />
        </ScrollView>
      </View>

        {/* Quick Actions */}
        <View style={styles.quickActionsContainer}>
          <Text style={styles.quickActionsTitle}>Quick Actions</Text>
          <View style={styles.quickActionsRow}>
            <TouchableOpacity style={styles.quickActionButton} onPress={() => setSendMoneyModalVisible(true)}>
              <FontAwesome5 name="paper-plane" size={24} color="#fff" />
              <Text style={styles.quickActionText}>Send Money</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickActionButton} onPress={() => setReceiveMoneyModalVisible(true)}>
              <Ionicons name="download-outline" size={24} color="#fff" />
              <Text style={styles.quickActionText}>Request Money</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickActionButton} onPress={() => setBuyGoodsModalVisible(true)}>
              <Entypo name="shop" size={24} color="#fff" />
              <Text style={styles.quickActionText}>Buy Goods</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickActionButton} onPress={() => setBuyAirtimeModalVisible(true)}>
              <MaterialIcons name="phone-iphone" size={24} color="#fff" />
              <Text style={styles.quickActionText}>Buy Airtime</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Cards Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <FontAwesome5 name="credit-card" size={24} color="maroon" />
            <Text style={styles.sectionTitle}>Your Cards</Text>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>Add Card</Text>
            </TouchableOpacity>
          </View>
          <CardComponent type="credit" number="**** **** **** 1234" expiry="12/25" cardHolder="Damian David" />
          <CardComponent type="debit" number="**** **** **** 5678" expiry="11/23" cardHolder="Damian David" />
        </View>

        {/* Recent Transactions */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Ionicons name="receipt-outline" size={24} color="maroon" />
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.transactionContainer}>
            <Text style={styles.transactionText}>Amazon Purchase</Text>
            <Text style={styles.transactionAmount}>-$50.00</Text>
          </View>
          <View style={styles.transactionContainer}>
            <Text style={styles.transactionText}>Salary</Text>
            <Text style={styles.transactionAmount}>+$2,500.00</Text>
          </View>
          <View style={styles.transactionContainer}>
            <Text style={styles.transactionText}>Starbucks</Text>
            <Text style={styles.transactionAmount}>-$5.50</Text>
          </View>
        </View>

        {/* Financial Goals */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <FontAwesome5 name="bullseye" size={24} color="maroon" />
            <Text style={styles.sectionTitle}>Financial Goals</Text>
            <TouchableOpacity style={styles.viewAllButton2}>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.goalContainer}>
            <Text style={styles.goalText}>Save for Vacation</Text>
            <Text style={styles.goalAmount}>$1,200 of $2,000</Text>
          </View>
          <View style={styles.goalContainer}>
            <Text style={styles.goalText}>Emergency Fund</Text>
            <Text style={styles.goalAmount}>$3,000 of $5,000</Text>
          </View>
        </View>
      </ScrollView>

      {/* Modals */}
      <SendMoneyModal visible={sendMoneyModalVisible} onClose={() => setSendMoneyModalVisible(false)} />
      <ReceiveMoneyModal visible={receiveMoneyModalVisible} onClose={() => setReceiveMoneyModalVisible(false)} />
      <BuyGoodsModal visible={buyGoodsModalVisible} onClose={() => setBuyGoodsModalVisible(false)} />
      <BuyAirtimeModal visible={buyAirtimeModalVisible} onClose={() => setBuyAirtimeModalVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 40
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
  },
  greetingContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  greetingText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  scrollContainer: {
    flex: 1,
  },
  contentContainer: {
    padding: 10
  },
  balanceContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    marginBottom: 10,
  },
  balanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginRight: 115
  },
  balanceAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  myAccountsContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    marginBottom: 10,
  },
  myAccountsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'maroon',
    marginBottom: 10,
  },
  quickActionsContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    marginBottom: 10,
  },
  quickActionsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  quickActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickActionButton: {
    backgroundColor: 'maroon',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  quickActionText: {
    color: '#fff',
    marginTop: 5,
    textAlign: 'center',
  },
  sectionContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    marginBottom: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  viewAllButton: {
    marginLeft: 'auto',
  },
  viewAllButton2: {
    marginLeft: 'auto',
  },
  viewAllText: {
    fontSize: 16,
    color: 'maroon',
  },
  transactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  transactionText: {
    fontSize: 16,
    color: '#333',
  },
  transactionAmount: {
    fontSize: 16,
    color: '#333',
  },
  goalContainer: {
    paddingVertical: 10,
  },
  goalText: {
    fontSize: 16,
    color: '#333',
  },
  goalAmount: {
    fontSize: 16,
    color: '#333',
  },
});

