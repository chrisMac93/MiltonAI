import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/Ionicons";
// import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "../../styles/HistoryStyles";

import OptionsModal from "./OptionsModal";

const History = ({
  history,
  deleteConversation,
  renameConversation,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [changeTitleModalVisible, setChangeTitleModalVisible] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    renderHistoryItems();
  }, [history]);

  const openOptionsModal = (index) => {
    setSelectedIndex(index);
    setModalVisible(true);
  };

  const closeOptionsModal = () => {
    setModalVisible(false);
  };

  const openChangeTitleModal = () => {
    setChangeTitleModalVisible(true);
  };

  const closeChangeTitleModal = () => {
    setChangeTitleModalVisible(false);
  };

  const handleDeleteConversation = () => {
    deleteConversation(selectedIndex);
    closeOptionsModal();
  };

  const handleChangeTitle = () => {
    renameConversation(selectedIndex, newTitle);
    setNewTitle("");
    closeChangeTitleModal();
    closeOptionsModal();
  };

  const renderHistoryItems = () => {
    return history.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <View style={styles.conversationPreview}>
            <TouchableOpacity
              style={styles.conversationInfo}
            >
              <View style={styles.goToConversation}>
                <Text style={styles.conversationPreviewText}>
                  {" "}
                  Go to conversation
                </Text>
                <Icon
                  name="arrow-forward"
                  size={20}
                  color="#9C25F5"
                  style={styles.arrowIcon}
                />
              </View>
              <Text style={styles.conversationTitle} numberOfLines={2}>
                {item.title}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionsButton}
              onPress={() => openOptionsModal(index)}
            >
              <Icon name="more-vert" size={28} color="#9C9C9C" />
            </TouchableOpacity>
          </View>
          {selectedIndex === index && (
            <OptionsModal
              modalVisible={modalVisible}
              changeTitleModalVisible={changeTitleModalVisible}
              closeOptionsModal={closeOptionsModal}
              openChangeTitleModal={openChangeTitleModal}
              closeChangeTitleModal={closeChangeTitleModal}
              setNewTitle={setNewTitle}
              newTitle={newTitle}
              handleDeleteConversation={handleDeleteConversation}
              handleChangeTitle={handleChangeTitle}
            />
          )}
        </React.Fragment>
      );
    });
  };

  return history.length > 0 ? (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.conversationList}
    >
      {renderHistoryItems()}
    </ScrollView>
  ) : (
    <View style={styles.noConversationsContainer}>
      <Icon2 name="logo-octocat" size={75} color="#9C25F5" />
      <Text style={styles.noConversationsText}>
        No conversation history. Start a conversation by selecting a suggestion,
        typing in the input below, or saying MILTON.
      </Text>
    </View>
  );
};

export default History;
