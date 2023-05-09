import React from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "../../styles/MenuStyles";
import { useNavigation } from "@react-navigation/native";


const Menu = ({ menuModalVisible, closeMenuModal, signUp }) => {

  const navigation = useNavigation();

  const handleAbout = () => {
    navigation.navigate("AboutMILTON");
  };

    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={menuModalVisible}
      >
        <View style={styles.menuModal}>
          <View style={styles.menuContainer}>
            <View style={styles.menuHeader}>
              <TouchableOpacity
                style={styles.menuCloseIcon}
                onPress={closeMenuModal}
              >
                <Icon name="arrow-downward" size={24} color="#FFF" />
              </TouchableOpacity>
              <Text style={styles.menuTitle}>Menu</Text>
            </View>
            <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
              <Icon
                name="login"
                size={24}
                color="#9C25F5"
                style={styles.menuIcon}
              />
              <Text style={styles.menuText}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.signUpSection}>
              <Text style={styles.signUpTitle}>Not a user? Sign Up Today!</Text>
              <Text style={styles.signUpDescription}>
                Sign up to enjoy exclusive features and save your chat history.
              </Text>
              <TouchableOpacity style={styles.signUpButton} onPress={signUp}>
                <Icon
                  name="person-add"
                  size={24}
                  color="#9C25F5"
                  style={styles.signUpIcon}
                />
                <Text style={styles.menuText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menuOptions}>
              <TouchableOpacity style={styles.menuItem} onPress={handleAbout}>
                <Icon
                  name="info-outline"
                  size={24}
                  color="#9C25F5"
                  style={styles.menuIcon}
                />
                <Text style={styles.menuText}>About   </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
                <Icon
                  name="support-agent"
                  size={24}
                  color="#9C25F5"
                  style={styles.menuIcon}
                />
                <Text style={styles.menuText}>Support</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
                <Icon
                  name="privacy-tip"
                  size={24}
                  color="#9C25F5"
                  style={styles.menuIcon}
                />
                <Text style={styles.menuText}>Privacy </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
                <Icon
                  name="gavel"
                  size={24}
                  color="#9C25F5"
                  style={styles.menuIcon}
                />
                <Text style={styles.menuText}>Terms  </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  
  export default Menu;