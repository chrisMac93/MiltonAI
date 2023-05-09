import React, { useState, forwardRef } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "../../styles/InputContainerStyles";

const InputContainer = forwardRef(
  ({ onInputFocus, onSend, isBotTyping, handleCloseTyping }, ref) => {
    const [inputText, setInputText] = useState("");

    const handleSend = () => {
      if (inputText.trim().length === 0) {
        return;
      }

      onSend(inputText.trim());
      setInputText("");
    };

    return (
      <View style={styles.inputContainer}>
        <TouchableOpacity>
          <Icon name="mic-none" size={32} color="#9C25F5" />
        </TouchableOpacity>
        <TextInput
          ref={ref}
          style={styles.input}
          placeholder="Start a conversation..."
          placeholderTextColor="#ccc"
          onChangeText={setInputText}
          value={inputText}
          multiline
          maxHeight={80}
          onFocus={onInputFocus}
          editable={!isBotTyping}
        />
        <TouchableOpacity
          onPress={isBotTyping ? handleCloseTyping : handleSend}
          style={styles.sendButton}
        >
          <Icon2 name={isBotTyping ? "square-rounded-outline" : "send-outline"} size={20} color="#000" />
        </TouchableOpacity>
      </View>
    );
  }
);

export default InputContainer;
