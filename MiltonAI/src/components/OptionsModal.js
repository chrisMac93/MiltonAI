import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "../../styles/OptionsModalStyles";

const OptionsModal = ({
  modalVisible,
  changeTitleModalVisible,
  closeOptionsModal,
  openChangeTitleModal,
  closeChangeTitleModal,
  setNewTitle,
  newTitle,
  handleDeleteConversation,
  handleChangeTitle,
}) => {

  return (
    <>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Options</Text>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={closeOptionsModal}
              >
                <Icon name="close" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={[styles.modalButton, styles.neutralButton]}
              onPress={openChangeTitleModal}
            >
              <Icon
                name="edit"
                size={20}
                color="#fff"
                style={styles.buttonIcon}
              />
              <Text style={styles.modalButtonText}>Rename</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, styles.neutralButton]}
              onPress={handleDeleteConversation}
            >
              <Icon
                name="delete"
                size={20}
                color="#E74C3C"
                style={styles.buttonIcon}
              />
              <Text style={[styles.modalButtonText, styles.deleteButtonText]}>
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={changeTitleModalVisible}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Rename</Text>
            <TouchableOpacity
              style={styles.modalCloseIcon}
              onPress={closeChangeTitleModal}
            >
              <Icon name="close" size={24} color="#fff" />
            </TouchableOpacity>
            <TextInput
              style={styles.modalInput}
              placeholder="New title"
              placeholderTextColor="#ccc"
              onChangeText={(text) => setNewTitle(text)}
              value={newTitle}
            />
            <TouchableOpacity
              style={[styles.modalButton, styles.neutralButton]}
              onPress={handleChangeTitle}
            >
              <Icon name="save" size={24} color="#9C25F5" />
              <Text style={styles.changeTitleText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default OptionsModal;
