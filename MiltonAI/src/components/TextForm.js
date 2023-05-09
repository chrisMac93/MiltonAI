import React, { useState, useEffect, useRef, useContext } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

import ConversationContext from "./ConversationContext";
import InputContainer from "./InputContainer";
import TypingIndicator from "./TypingIndicator";

import styles from "../../styles/TextFormStyles";

const Message = ({ isUser, text, name }) => (
  <View>
    <Text style={isUser ? styles.userName : styles.botName}>{name}</Text>
    <View
      style={[
        styles.messageContainer,
        isUser ? styles.userMessage : styles.botMessage,
      ]}
    >
      <Text style={styles.messageText}>{text}</Text>
    </View>
  </View>
);

const TextForm = ({ route }) => {
  const suggestion = route.params?.suggestion;
  const { conversation } = route.params || {};

  const typingTimeoutRef = useRef(null);

  const {
    history,
    startConversation,
    setSelectedConversationIndex,
    updateConversationMessages,
  } = useContext(ConversationContext);

  const [messages, setMessages] = useState([]);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  const [inputText, setInputText] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [showTypingIndicator, setShowTypingIndicator] = useState(false);
  const [conversationStarted, setConversationStarted] = useState(false);
  const scrollViewRef = useRef();

  const inputRef = useRef();

  const navigation = useNavigation();

  useEffect(() => {
    if (inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 1); // Add a slight delay before focusing the input
    }
  }, [inputRef]);

  useEffect(() => {
    if (suggestion) {
      setInputText(suggestion);
      handleSend(suggestion);
    }
  }, [suggestion]);

  useEffect(() => {
    if (conversation) {
      setMessages(conversation.messages);
      setSelectedConversationIndex(route.params.index); // Update the selected conversation index
    }
  }, [conversation]);

  useEffect(() => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  }, [messages]);

  const handleSend = async (text) => {
    if (!text.trim()) return;
    setShowWelcomeMessage(false);
    setInputText("");

    // Add user message
    setMessages((prevMessages) => {
      const newMessages = [
        ...prevMessages,
        { isUser: true, text: text.trim(), name: "YOU" },
      ];

      if (route.params?.index !== undefined) {
        updateConversationMessages(route.params.index, newMessages);
      }

      return newMessages;
    });

    if (!conversationStarted) {
      startConversation(text.trim(), []);
      setConversationStarted(true);
    }

    try {
      setShowTypingIndicator(true);
      const response = await fetch("http://192.168.1.12:3001/process-text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userText: text }),
      });

      if (response.ok) {
        setIsBotTyping(true);
        setShowTypingIndicator(false);
        const responseData = await response.json();

        // Split the bot response into words
        const words = responseData.responseText.split(" ");

        // Display words one at a time with a delay
        const typeWord = (index) => {
          if (index < words.length) {
            setMessages((prevMessages) => {
              const newMessages = [...prevMessages];
              if (index === 0) {
                newMessages.push({
                  isUser: false,
                  text: words[index],
                  name: "MILTON",
                });
              } else {
                newMessages[newMessages.length - 1].text += " " + words[index];
              }
              return newMessages;
            });

            typingTimeoutRef.current = setTimeout(
              () => typeWord(index + 1),
              75
            ); // 75ms delay between words
          } else {
            setIsBotTyping(false);

            // Update the messages in the conversation history after typing animation
            if (route.params?.index !== undefined) {
              updateConversationMessages(route.params.index, messages);
            }
            setMessages((prevMessages) => {
              console.log("All conversations", history);
              return prevMessages;
            });
          }
        };

        typeWord(0);
      } else {
        console.error("Error sending text to the server:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending text to the server:", error);
    }
  };

  const handleCloseTyping = () => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
      setIsBotTyping(false);
    }
  };

  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
        <Icon name="home" size={24} color="#fff" />
      </TouchableOpacity>
      {showWelcomeMessage && (
        <View style={styles.welcomeMessageContainer}>
          <Text style={styles.welcomeMessageTextMILTONAI}>MILTON</Text>
          <Text style={styles.welcomeMessageText}>
            Your personal AI Assistant
          </Text>
          <Text style={styles.welcomeMessageTextLast}>
            Say "MILTON", or type a message to begin.
          </Text>
        </View>
      )}
      <ScrollView style={styles.messageList} ref={scrollViewRef}>
        {messages.map((message, index) => (
          <Message
            key={index}
            isUser={message.isUser}
            text={message.text}
            name={message.isUser ? "YOU" : "MILTON"}
          />
        ))}
        {showTypingIndicator && <TypingIndicator />}
      </ScrollView>
      <InputContainer
        ref={inputRef}
        onSend={(text) => handleSend(text)}
        isBotTyping={isBotTyping}
        handleCloseTyping={handleCloseTyping}
      />
    </View>
  );
};

export default TextForm;
