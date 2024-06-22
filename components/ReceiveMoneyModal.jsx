import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ReceiveMoneyModal = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Request Money</Text>
          <View style={styles.optionContainer}>
            <TouchableOpacity style={styles.option}>
              <FontAwesome5 name="user-friends" size={24} color="maroon" />
              <Text style={styles.optionText}>From Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <MaterialIcons name="account-balance" size={24} color="maroon" />
              <Text style={styles.optionText}>From Bank</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Ionicons name="card" size={24} color="maroon" />
              <Text style={styles.optionText}>From Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <MaterialCommunityIcons name="account-cash-outline" size={24} color="maroon" />
              <Text style={styles.optionText}>Cash Deposit</Text>
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

export default ReceiveMoneyModal;
