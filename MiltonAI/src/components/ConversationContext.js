import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ConversationContext = createContext();

export const ConversationProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  const storeHistory = async (updatedHistory) => {
    try {
      await AsyncStorage.setItem("history", JSON.stringify(updatedHistory));
    } catch (error) {
      console.error("Error saving history to AsyncStorage:", error);
    }
  };

  const updateConversationMessages = (index, newMessages) => {
    setHistory((prevHistory) => {
      const updatedHistory = prevHistory.map((conversation, idx) =>
        idx === index ? { ...conversation, messages: newMessages } : conversation
      );
      storeHistory(updatedHistory);
      console.log("All conversations:", updatedHistory); // Log the updated conversation history here
      return updatedHistory;
    });
  };
  

  const startConversation = (title, messages) => {
    setHistory((prevHistory) => {
      const updatedHistory = [...prevHistory, { title, messages }];
      storeHistory(updatedHistory);
      return updatedHistory;
    });
  };

  const deleteConversation = (index) => {
    setHistory((prevHistory) => {
      const updatedHistory = prevHistory.filter(
        (conversation, idx) => idx !== index
      );
      storeHistory(updatedHistory);
      return updatedHistory;
    });
  };

  const clearAllConversations = () => {
    setHistory([]);
    storeHistory([]);
  };

  const renameConversation = (index, newTitle) => {
    setHistory((prevHistory) => {
      const updatedHistory = prevHistory.map((conversation, idx) =>
        idx === index ? { ...conversation, title: newTitle } : conversation
      );
      storeHistory(updatedHistory);
      return updatedHistory;
    });
  };

  return (
    <ConversationContext.Provider
      value={{
        history: history || [], // Add a default empty array if history is undefined
        setHistory,
        startConversation,
        deleteConversation,
        renameConversation,
        clearAllConversations,
        updateConversationMessages,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
};

export default ConversationContext;
