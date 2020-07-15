import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Dimensions,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';

const curveHeight = Dimensions.get('window').height * 0.5;
const curveWidth = Dimensions.get('window').width;

const resultHeight = Dimensions.get('window').height * 0.35;
const resultWidth = Dimensions.get('window').width * 0.8;

const buttonWidth = Dimensions.get('window').width * 0.6;

function Home() {
  const [joke, setJoke] = useState(
    'Lets put a smile on that face \n Generate a Joke and:)'
  );
  const [twoWay, setTwoWay] = useState({ joke: 'Hi', answer: 'HEllo' });

  const handleGenerate = () => {
    setTwoWay({
      joke: '',
      answer: '',
    });

    setJoke('');

    fetch('https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,racist')
      .then((response) => response.json())
      .then((data) => {
        if (data.type === 'single') {
          setJoke(data.joke);
        } else {
          setTwoWay({
            joke: data.setup,
            answer: data.delivery,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.curveView}></View>
      <View style={styles.logo}>
        <Text style={styles.logoText}>Jokes Generator</Text>
        <Image
          style={styles.logoImg}
          source={require('./../assets/laugh.png')}
        />
      </View>

      <View style={styles.result}>
        {!twoWay.joke && !joke ? (
          <ActivityIndicator color='#6DC5C5' size='large' />
        ) : (
          <View>
            {!joke ? (
              <View>
                <Text style={styles.resultText}>{twoWay.joke}</Text>
                <Text style={styles.jokeAnswer}>Answer</Text>
                <Text style={styles.resultText}>{twoWay.answer}</Text>
              </View>
            ) : (
              <Text style={styles.resultText}>{joke}</Text>
            )}
          </View>
        )}
      </View>

      <View>
        <TouchableOpacity onPress={handleGenerate} style={styles.buttom}>
          <Text style={styles.buttonText}>Generate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttom: {
    borderRadius: 4,
    margin: 20,
    backgroundColor: '#f05e23',
    padding: 12,
    marginTop: 50,
    minWidth: buttonWidth,
  },
  buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
  },
  curveView: {
    backgroundColor: '#6DC5C5',
    width: curveWidth,
    height: curveHeight,
    position: 'absolute',
    top: 0,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },

  logo: {
    position: 'absolute',
    top: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '900',
  },

  logoImg: {
    width: 35,
    height: 35,
    marginLeft: 10,
  },

  result: {
    marginTop: 50,
    width: resultWidth,
    minHeight: resultHeight,
    backgroundColor: '#fff',
    borderRadius: 4,
    shadowColor: '#666',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  resultText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  jokeAnswer: {
    color: '#0da3a3',
    fontSize: 18,
    marginVertical: 10,
    marginTop: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default Home;
