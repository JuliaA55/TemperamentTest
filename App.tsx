import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import StartScreen from './components/StartScreen';
import TestScreen from './components/TestScreen';
import ResultScreen from './components/ResultScreen';

export default function App() {
  const [screen, setScreen] = useState<'start' | 'quiz' | 'result'>('start');
  const [score, setScore] = useState(0);
  return (
    <View style={styles.container}>
      {screen === 'start' && <StartScreen onStart={() => setScreen('quiz')} />}
      {screen === 'quiz' && <TestScreen onFinish={(finalScore) => { setScore(finalScore); setScreen('result'); }} />}
      {screen === 'result' && <ResultScreen score={score} onRestart={() => setScreen('start')} />}
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
});
