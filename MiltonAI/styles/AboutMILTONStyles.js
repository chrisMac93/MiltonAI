import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 40,
      backgroundColor: '#000',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#FFF',
      textAlign: 'center',
    },
    description: {
      fontSize: 18,
      marginBottom: 10,
      color: '#FFF',
      textAlign: 'center',
    },
    acronym: {
      fontSize: 18,
      lineHeight: 30,
      marginLeft: 20,
      marginBottom: 20,
      color: '#FFF',

    },
    bold: {
      fontWeight: 'bold',
      color: '#9C25F5',
    },
    placeholder: {
      fontSize: 16,
      lineHeight: 24,
      color: '#FFF',
      textAlign: 'center',

    },
  });

export default styles;