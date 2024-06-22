import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const CardComponent = ({ type, number, expiry, cardHolder }) => {
  const cardStyles = [styles.card, type === 'credit' ? styles.creditCard : styles.debitCard];

  return (
    <View style={cardStyles}>
      <View style={styles.cardHeader}>
        <FontAwesome name={type === 'credit' ? 'cc-visa' : 'cc-mastercard'} size={32} color="#fff" />
        <Text style={styles.cardType}>{type === 'credit' ? 'Credit Card' : 'Debit Card'}</Text>
      </View>
      <Text style={styles.cardNumber}>{number}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.cardExpiry}>Exp: {expiry}</Text>
        <Text style={styles.cardHolder}>{cardHolder}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  creditCard: {
    backgroundColor: '#0074D9',
  },
  debitCard: {
    backgroundColor: 'maroon',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardType: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardNumber: {
    color: '#fff',
    fontSize: 20,
    letterSpacing: 2,
    marginBottom: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardExpiry: {
    color: '#fff',
    fontSize: 16,
  },
  cardHolder: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CardComponent;
