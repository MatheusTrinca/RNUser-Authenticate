import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthContext } from '../contexts/AuthContext';

function WelcomeScreen() {
  const [message, setMessage] = useState();
  const { token } = useAuthContext();

  useEffect(() => {
    async function fetchMessage() {
      const response = await axios.get(
        'https://react-native-course-f6dbc-default-rtdb.firebaseio.com/message.json?auth=' +
          token
      );
      setMessage(response.data);
    }
    fetchMessage();
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{message}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
