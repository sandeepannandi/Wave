import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function Onboarding4Slide2() {
  return (
    <View style={styles.container}>
      <View style={styles.heroWrap}>
        <Image
          source={require('../assets/onboardingcar2assets.jpg')}
          style={styles.heroImage}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.title}>Instant AI {'\n'}Summaries</Text>
      <Text style={styles.description}>
        Wave transcribes, detects speakers, and {'\n'}creates accurate summaries automatically.
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
    paddingHorizontal: 0,
  },
  heroWrap: {
    width: '100%',
    height: 480,
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
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
    paddingHorizontal: 20,
    textAlign: 'center',
    color: '#000',
  },
});
