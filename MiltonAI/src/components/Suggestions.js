import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../../styles/SuggestionsStyles";

const categories = [
  { id: 1, name: "General", icon: "chatbubble-ellipses-outline" },
  { id: 2, name: "Creative", icon: "build-outline" },
  { id: 3, name: "Act", icon: "people-outline" },
  { id: 4, name: "Finance", icon: "cash-outline" },
  { id: 5, name: "Science", icon: "flask-outline" },
  { id: 6, name: "Nutrition", icon: "nutrition-outline" },
  { id: 7, name: "Fitness", icon: "fitness-outline" },
  { id: 8, name: "Business", icon: "business-outline" },
  { id: 9, name: "Weather", icon: "cloud-outline" },
  { id: 10, name: "News", icon: "newspaper-outline" },
  { id: 11, name: "Travel", icon: "airplane-outline" },
  { id: 12, name: "Entertainment", icon: "play-circle-outline" },
  { id: 13, name: "Sports", icon: "american-football-outline" },
];

const suggestions = {
  1: [
    "What is Schroedinger's cat?",
    "What is the meaning of life?",
    "Tell me a joke.",
    "What are some good conversation starters?",
    "Tell me some random facts?",
  ],
  2: [
    "Help me write a poem.",
    "Help me write a song.",
    "Help me write a story.",
    "Help me draw a picture.",
    "Help me build a robot.",
  ],
  3: [
    "Act as my translator.",
    "Act as my personal assistant.",
    "Act as a psychologist.",
    "Act as my personal trainer.",
    "Act as my teacher.",
  ],
  4: [
    "What is the latest news in finance?",
    "What is cryptocurrency?",
    "How can I save money?",
    "How can I start investing?",
    "How can I improve my financial situation?",
  ],
  5: [
    "What is the speed of light?",
    "What is the Theory of Relativity?",
    "How does quantum mechanics work?",
    "What is dark matter?",
    "What is a black hole?",
  ],
  6: [
    "What are some healthy meal plans?",
    "What is the keto diet?",
    "How can I improve my diet?",
    "What are some good sources of protein?",
    "How does diet affect my mental health?",
  ],
  7: [
    "What's a good way to lose weight?",
    "How can I increase my stamina?",
    "What's the best way to gain muscle?",
    "Can you recommend me a workout routine?",
    "How can I stay motivated to exercise?",
  ],
  8: [
    "How do I start a business?",
    "Help me think of a business idea.",
    "What is the latest news in business?",
    "Who are some influential business leaders?",
    "What are the keys to success in business?",
  ],
  9: [
    "What is the weather like today?",
    "What's the forecast for tomorrow?",
    "What's the weather like in New York?",
    "What's the weather like in London?",
    "What's the weather like in Paris?",
  ],
  10: [
    "What is the latest news in the world?",
    "What is the latest news in the US?",
    "What is the stock market doing today?",
    "What is the latest news in technology?",
    "What is the latest news in politics?",
  ],
  11: [
    "What are the top travel destinations?",
    "How do I get a visa?",
    "What are some hidden travel gems?",
    "What's the best way to travel on a budget?",
    "How do I plan a trip?",
  ],
  12: [
    "What are the top movies right now?",
    "Who won the Oscars this year?",
    "What are some popular TV shows?",
    "Can you recommend a good book?",
    "What's the latest in music?",
  ],
  13: [
    "Who won the last Super Bowl?",
    "What is the NBA score?",
    "What are some popular sports?",
    "Tell me about soccer.",
    "What's the latest in tennis?",
  ],
};

const Suggestions = ({ onSuggestionPress }) => {
  const navigation = useNavigation();

  const [selectedCategory, setSelectedCategory] = useState(1);

  const handleSuggestionPress = (suggestion) => {
    onSuggestionPress && onSuggestionPress(suggestion);
    navigation.navigate("TextForm", { suggestion });
  };

  const renderCategoryIcons = () => {
    return categories.map((category) => (
      <TouchableOpacity
        key={category.id}
        style={styles.categoryIconContainer}
        onPress={() => setSelectedCategory(category.id)}
      >
        <Icon
          name={category.icon}
          size={24}
          color={selectedCategory === category.id ? "#9C25F5" : "#9C9C9C"}
        />
        <Text
          style={[
            styles.categoryText,
            selectedCategory === category.id && { color: "#9C25F5" },
          ]}
        >
          {category.name}
        </Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suggestions</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
      >
        {renderCategoryIcons()}
      </ScrollView>
      <View style={styles.suggestionsList}>
        {suggestions[selectedCategory].map((suggestion, index) => (
          <TouchableOpacity
            key={index}
            style={styles.suggestionItem}
            onPress={() => handleSuggestionPress(suggestion)}
          >
            <Text style={styles.suggestionText}>{suggestion}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Suggestions;
