import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Phone, Video, ShieldCheck, FileText, ScrollText } from 'lucide-react-native';
import WaveIcon from '../assets/waveicon.svg';
import { useFonts, Archivo_700Bold, Archivo_500Medium, Archivo_600SemiBold, Archivo_400Regular } from '@expo-google-fonts/archivo';
import RadialBtn from '../components/RadialBtn';
import { useEffect, useRef } from 'react';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

interface Onboarding1Props {
  onNext?: () => void;
}

export default function Onboarding1({ onNext }: Onboarding1Props) {
  const [fontsLoaded] = useFonts({
    Archivo_700Bold,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Archivo_400Regular,
  });

  const anim1 = useRef(new Animated.Value(0)).current;
  const anim2 = useRef(new Animated.Value(0)).current;
  const anim3 = useRef(new Animated.Value(0)).current;
  const anim4 = useRef(new Animated.Value(0)).current;
  const anim5 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const createAnimation = (animValue: Animated.Value, delay: number) => {
      return Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(animValue, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(animValue, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
          }),
        ])
      );
    };

    Animated.parallel([
      createAnimation(anim1, 0),
      createAnimation(anim2, 400),
      createAnimation(anim3, 200),
      createAnimation(anim4, 600),
      createAnimation(anim5, 300),
    ]).start();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  const translateY1 = anim1.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -9],
  });

  const translateY2 = anim2.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -9],
  });

  const translateY3 = anim3.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -9],
  });

  const translateY4 = anim4.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -9],
  });

  const translateY5 = anim5.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -9],
  });

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <View style={styles.topIcon}>
        <WaveIcon width={36} height={50} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Record Anything,
          {'\n'}Securely
        </Text>
        <Text style={styles.subtitle}>
          Never miss a moment. Capture meetings, lectures, and ideas all private and SOC 2 certified!
        </Text>
      </View>

      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/onboarding1f.jpg')} 
          style={styles.image}
          resizeMode="cover"
        />
        
        {/* Chip 1: Top-Left - Join Calls */}
        <Animated.View style={[styles.chip, styles.chipTopLeft, { transform: [{ rotate: '-20deg' }, { translateY: translateY1 }] }]}>
          <View style={styles.chipIcon}>
            <Phone size={20} color="#000" fill="#000" />
          </View>
          <Text style={styles.chipText}>Join Calls</Text>
        </Animated.View>

        {/* Chip 2: Mid-Left - Video Ready */}
        <Animated.View style={[styles.chip, styles.chipMidLeft, { transform: [{ rotate: '-10deg' }, { translateY: translateY2 }] }]}>
          <View style={styles.chipIcon}>
            <Video size={20} color="#000" fill="#000" />
          </View>
          <Text style={styles.chipText}>Video Ready</Text>
        </Animated.View>

        {/* Chip 3: Top-Right - SOC2 Certified */}
        <Animated.View style={[styles.chip, styles.chipTopRight, { transform: [{ rotate: '-4deg' }, { translateY: translateY3 }] }]}>
          <View style={styles.chipIcon}>
            <ShieldCheck size={20} color="#000" fill="#000" />
          </View>
          <Text style={styles.chipText}>SOC2 Certified</Text>
        </Animated.View>

        {/* Chip 4: Mid-Right - Auto Notes */}
        <Animated.View style={[styles.chip, styles.chipMidRight, { transform: [{ rotate: '-20deg' }, { translateY: translateY4 }] }]}>
          <View style={styles.chipIcon}>
            <FileText size={20} color="#000" fill="#000" />
          </View>
          <Text style={styles.chipText}>Auto Notes</Text>
        </Animated.View>

        {/* Chip 5: Bottom-Center - Summarize */}
        <Animated.View style={[styles.chip, styles.chipBottomCenter, { transform: [{ rotate: '15deg' }, { translateY: translateY5 }] }]}>
          <View style={styles.chipIcon}>
            <ScrollText size={20} color="#000" fill="#000" />
          </View>
          <Text style={styles.chipText}>Summarize</Text>
        </Animated.View>
      </View>

      <View style={styles.ctaWrap}>
        <RadialBtn text="Get Started for Free" onPress={onNext} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topIcon: {
    alignItems: 'center',
    marginTop: 24,
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 24,
    flexShrink: 0,
  },
  title: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 30,
    lineHeight: 36,
    textAlign: 'center',
    color: '#000',
  },
  subtitle: {
    fontFamily: 'Archivo_500Medium',
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'center',
    color: '#000',
    marginTop: 14,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
    flex: 1,
    width: '105%',
    position: 'relative',
  },
  image: {
    width: '105%',
    height: '105%',
    maxHeight: 500,
  },
  chip: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 28,
    paddingHorizontal: 22,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(223, 223, 223, 0.9)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  chipTopLeft: {
    top: '16%',
    left: '2%',
  },
  chipMidLeft: {
    top: '40%',
    left: '3%',
  },
  chipTopRight: {
    top: '20%',
    right: '1%',
  },
  chipMidRight: {
    top: '45%',
    right: '8%',
  },
  chipBottomCenter: {
    top: '65%',
    left: '50%',
    marginLeft: -100,
  },
  chipIcon: {
    marginRight: 8,
  },
  chipText: {
    fontFamily: 'Archivo_600SemiBold',
    fontSize: 18,
    color: '#000',
  },
  ctaWrap: {
    marginTop: 'auto',
    padding: 20,
  },
});

