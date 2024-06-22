import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

const foodImage = require('../../assets/images/food.jpg');
const ndegeImage = require('../../assets/images/ndege.jpg');
const hotelImage = require('../../assets/images/hotel.jpg');

export default function Tab() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Discoveries</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.subHeaderText}>Latest Deals & Offers</Text>

        <ImageBackground source={foodImage} style={styles.cardImageBackground}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Order your SmartFinance card!</Text>
            <Text style={styles.cardText}>Get your SmartFinance Visa card today and enjoy great offers at select merchants!</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Order Now</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.manageButton}>
            <Text style={styles.manageButtonText}>Manage Your Points</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.manageButton}>
            <Text style={styles.manageButtonText}>Manage Your Coupons</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionHeaderText}>Travel & Transportation</Text>
        <ImageBackground source={ndegeImage} style={styles.cardImageBackground}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Get 1,000 Bob Back</Text>
            <Text style={styles.cardText}>Pay KES 10,000 or more with your Card on Travelduqa to unlock great deals and discounts.</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <Text style={styles.sectionHeaderText}>Restaurants</Text>
        <ImageBackground source={hotelImage} style={styles.cardImageBackground}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Dig into this deal</Text>
            <Text style={styles.cardText}>Enjoy great discounts at select restaurants with your SmartFinance card.</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  scrollViewContent: {
    paddingTop: 100, 
  },
  subHeaderText: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
    marginBottom: 10,
    color: '#000000',
    marginTop: 10
  },
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for better text readability
    borderRadius: 10,
    padding: 10,
    margin: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  cardImageBackground: {
    width: 347,
    height: 200,
    marginHorizontal: '5%',
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center', 
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  manageButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 4,
  },
  manageButtonText: {
    fontWeight: 'bold',
    color: '#424242',
    textAlign: 'center',
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
  },
});
