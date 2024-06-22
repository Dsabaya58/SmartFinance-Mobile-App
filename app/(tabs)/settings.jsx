import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome6 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Tab() {
  const [biometricAuth, setBiometricAuth] = React.useState(true);
  const [fastLogin, setFastLogin] = React.useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>SECURITY</Text>
          
          <View style={styles.option}>
            <Icon name="fingerprint" size={24} color="maroon" />
            <Text style={styles.optionText}>BIOMETRIC AUTHENTICATION</Text>
            <Switch value={biometricAuth} onValueChange={setBiometricAuth} />
          </View>
          
          <View style={styles.option}>
            <Icon name="login" size={24} color="maroon" />
            <Text style={styles.optionText}>FAST LOG IN</Text>
            <Switch value={fastLogin} onValueChange={setFastLogin} />
          </View>
          
          <TouchableOpacity style={styles.option}>
            <Icon name="lock-reset" size={24} color="maroon" />
            <Text style={styles.optionText}>CHANGE PIN</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>SUPPORT</Text>
          
          <TouchableOpacity style={styles.option}>
            <Icon name="phone" size={24} color="maroon" />
            <Text style={styles.optionText}>CALL SUPPORT</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.option}>
            <Icon name="book-open" size={24} color="maroon" />
            <Text style={styles.optionText}>FAQS</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.option}>
            <Icon name="web" size={24} color="maroon" />
            <Text style={styles.optionText}>OUR WEBSITE</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>SOCIAL</Text>
          
          <TouchableOpacity style={styles.option}>
            <Icon name="facebook" size={24} color="#3b5998" />
            <Text style={styles.optionText}>FACEBOOK</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.option}>
            <FontAwesome6 name="x-twitter" size={24} color="black" />
            <Text style={styles.optionText}>X</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.option}>
          <MaterialCommunityIcons name="linkedin" size={24} color="blue" />
            <Text style={styles.optionText}>LINKEDIN</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
});
