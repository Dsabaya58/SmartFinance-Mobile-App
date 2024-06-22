import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Importing icons from @expo/vector-icons

const Account = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Account</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        
        <View style={styles.card}>
          <View style={styles.profileInfo}>
            <View style={styles.profileImagePlaceholder}>
              <Text style={styles.profileImageText}>DD</Text>
            </View>
            <View style={styles.profileDetails}>
              <Text style={styles.name}>David Damian</Text>
              <Text style={styles.email}>Dsabaya58@gmail.com</Text>
              <Text style={styles.phone}>254758205218</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Profile</Text>
        <View style={styles.section}>
          <TouchableOpacity style={styles.option}>
            <View style={styles.optionContent}>
              <MaterialIcons name="notifications" size={24} color="maroon" />
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionTitle}>Notifications</Text>
                <Text style={styles.optionText}>View and manage your notifications</Text>
              </View>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="maroon" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <View style={styles.optionContent}>
              <MaterialIcons name="language" size={24} color="maroon" />
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionTitle}>Change language</Text>
              </View>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="maroon" />
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionTitle}>Support</Text>
        <View style={styles.section}>
          <TouchableOpacity style={styles.option}>
            <View style={styles.optionContent}>
              <MaterialIcons name="chat" size={24} color="maroon" />
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionTitle}>Activate Chat Banking</Text>
                <Text style={styles.optionText}>Find more with our virtual assistant</Text>
              </View>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="maroon" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <View style={styles.optionContent}>
              <MaterialIcons name="contact-support" size={24} color="maroon" />
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionTitle}>Get in touch</Text>
                <Text style={styles.optionText}>Email, call or find us on social media</Text>
              </View>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="maroon" />
          </TouchableOpacity>
        </View>
        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <View style={styles.optionContent}>
            <MaterialIcons name="logout" size={24} color="maroon" />
            <Text style={styles.optionTitle}>Logout</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default Account;

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
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollViewContent: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#c4c4c4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImageText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileDetails: {
    marginLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#555',
  },
  phone: {
    fontSize: 14,
    color: '#555',
  },
  section: {
    marginTop: 20,
  },
  option: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionTextContainer: {
    marginLeft: 15,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionText: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  logoutButton: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 30,
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
