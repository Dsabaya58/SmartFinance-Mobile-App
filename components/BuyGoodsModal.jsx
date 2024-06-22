import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { FontAwesome5, Ionicons, Entypo } from '@expo/vector-icons';

const BuyGoodsModal = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Buy Goods</Text>
          <View style={styles.optionContainer}>
            <TouchableOpacity style={styles.option}>
              <Entypo name="shop" size={24} color="maroon" />
              <Text style={styles.optionText}>Shop Online</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Ionicons name="card" size={24} color="maroon" />
              <Text style={styles.optionText}>Using Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <FontAwesome5 name="store" size={24} color="maroon" />
              <Text style={styles.optionText}>Local Store</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Ionicons name="barcode-outline" size={24} color="maroon" />
              <Text style={styles.optionText}>Scan Barcode</Text>
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
    color: 'maroon',
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

export default BuyGoodsModal;
