import React, { useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/FontAwesome5";

import ConversationContext from "./components/ConversationContext";
import InputContainer from "./components/InputContainer";
import Menu from "./components/Menu";
import History from "./components/History";
import Suggestions from "./components/Suggestions";
import styles from "../styles/IndexPageStyles";

const IndexPage = ({ navigation }) => {
  const {
    history,
    setHistory,
    deleteConversation,
    renameConversation,
    clearAllConversations,
  } = useContext(ConversationContext);
  const { startConversation } = useContext(ConversationContext);

  const [menuModalVisible, setMenuModalVisible] = useState(false);
  const [selectedConversationIndex, setSelectedConversationIndex] =
    useState(null);

  // Add this useEffect in your IndexPage component
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const storedHistory = await AsyncStorage.getItem("history");
        if (storedHistory !== null) {
          setHistory(JSON.parse(storedHistory));
        }
      } catch (error) {
        console.error("Error fetching history from AsyncStorage:", error);
      }
    };

    fetchHistory();
  }, []);

  const handleInputFocus = () => {
    navigation.navigate("TextForm");
  };

  const openMenuModal = () => {
    setMenuModalVisible(true);
  };

  const closeMenuModal = () => {
    setMenuModalVisible(false);
  };

  const signUp = () => {
    Alert.alert("Sign Up", "Sign Up functionality is not yet implemented.");
  };

  return (
    <View style={styles.container}>
      <Menu
        menuModalVisible={menuModalVisible}
        closeMenuModal={closeMenuModal}
        signUp={signUp}
      />
      <View style={styles.header}>
        <Icon2 name="cat" size={24} color="#9C25F5" />
        <Text style={styles.headerTitle}>MILTON AI</Text>
        <TouchableOpacity style={styles.menuButton} onPress={openMenuModal}>
          <Icon name="menu" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.titleSeeAllContainer}>
        <Text style={styles.historyTitle}>Conversations</Text>
          <TouchableOpacity onPress={clearAllConversations}>
            <View style={styles.alignClearAllIcon}>
              <Icon name="delete-outline" size={24} color="#9C25F5" />
              <Text style={styles.clearAll}>Clear All</Text>
            </View>
          </TouchableOpacity>
      </View>
      <History
        history={history}
        deleteConversation={deleteConversation}
        renameConversation={renameConversation}
      />
      <Suggestions startConversation={startConversation} />
      <InputContainer
        onInputFocus={handleInputFocus}
        onSuggestionPress={(suggestion) =>
          navigation.navigate("TextForm", {
            suggestion,
          })
        }
      />
    </View>
  );
};

export default IndexPage;
