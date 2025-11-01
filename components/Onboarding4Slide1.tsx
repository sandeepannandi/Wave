import { StyleSheet, Text, View, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function Onboarding4Slide1() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Audio Capture {'\n'} Made Simple</Text>
      <Text style={styles.description}>
        Capture hours of audio with one tap. No note-taking required.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 30,
    lineHeight: 36,
    textAlign: 'center',
    color: '#000',
    marginBottom: 12,
  },
  description: {
    fontFamily: 'Archivo_500Medium',
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'center',
    color: '#000',
  },
});
