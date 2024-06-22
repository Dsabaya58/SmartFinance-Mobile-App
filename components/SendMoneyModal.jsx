import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { FontAwesome5, Ionicons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

const SendMoneyModal = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Send Money</Text>
          <View style={styles.optionContainer}>
            <TouchableOpacity style={styles.option}>
              <FontAwesome5 name="user-friends" size={24} color="maroon" />
              <Text style={styles.optionText}>Send to Mobile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Ionicons name="card" size={24} color="maroon" />
              <Text style={styles.optionText}>Send to Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <MaterialIcons name="account-balance" size={24} color="maroon" />
              <Text style={styles.optionText}>Send to Bank</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <MaterialCommunityIcons name="qrcode-scan" size={24} color="maroon" />
              <Text style={styles.optionText}>Scan QR Code</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Entypo name="shop" size={24} color="maroon" />
              <Text style={styles.optionText}>Pay Merchant</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <MaterialCommunityIcons name="account-cash" size={24} color="maroon" />
              <Text style={styles.optionText}>Cash Out</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionContainer: {
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 18,
    color: '#333',
    marginLeft: 10,
  },
  closeButton: {
    backgroundColor: 'maroon',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default SendMoneyModal;
