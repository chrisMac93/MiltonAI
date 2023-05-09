import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

import styles from "../../styles/AboutMILTONStyles";

const AboutMILTON = () => {
  const navigation = useNavigation();

  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
        <Icon name="home" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.title}>About MILTON</Text>
      <Text style={styles.description}>MILTON stands for:</Text>
      <Text style={styles.acronym}>
        <Text style={styles.bold}>M</Text>ultimedia{"\n"}
        <Text style={styles.bold}>I</Text>nteractive{"\n"}
        <Text style={styles.bold}>L</Text>earning & {"\n"}
        <Text style={styles.bold}>T</Text>ask{"\n"}
        <Text style={styles.bold}>O</Text>riented{"\n"}
        <Text style={styles.bold}>N</Text>avigator
      </Text>
      <Text style={styles.placeholder}>
        Placeholder for more information about MILTON's features, capabilities,
        and how it aims to provide a helpful and engaging experience for users.
        You can describe the technology behind MILTON, its development process,
        and the team that built it.
      </Text>
    </View>
  );
};

export default AboutMILTON;
