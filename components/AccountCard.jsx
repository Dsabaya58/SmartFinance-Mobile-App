// AccountCard.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const AccountCard = ({ type, balance }) => {
  const [showBalance, setShowBalance] = useState(true);

  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={toggleBalanceVisibility}>
      <View style={styles.iconContainer}>
        <FontAwesome5 name={type === 'savings' ? 'piggy-bank' : 'credit-card'} size={24} color="maroon" />
      </View>
      <View style={styles.cardDetails}>
        <Text style={styles.cardTitle}>{type === 'savings' ? 'Savings Account' : 'Checking Account'}</Text>
        <Text style={styles.cardBalance}>
          {showBalance ? `Balance: $${balance.toFixed(2)}` : 'Balance Hidden'}
        </Text>
      </View>
      <TouchableOpacity style={styles.eyeIconContainer} onPress={toggleBalanceVisibility}>
        <FontAwesome5 name={showBalance ? 'eye' : 'eye-slash'} size={20} color="maroon" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 5,
    marginRight: 10, // Add margin between cards
  },
  iconContainer: {
    marginRight: 15,
  },
  cardDetails: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardBalance: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  eyeIconContainer: {
    marginLeft: 15,
  },
});

export default AccountCard;
