import { useState, useRef, useEffect } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Onboarding1 from './app/onboarding1';
import Onboarding2 from './app/onboarding2';
import Onboarding3 from './app/onboarding3';
import Onboarding4 from './app/onboarding4';
import Signup from './app/signup';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [showTransitionVeil, setShowTransitionVeil] = useState(false);
  const [onboarding4ResetTrigger, setOnboarding4ResetTrigger] = useState(0);
  const onboarding4Opacity = useRef(new Animated.Value(0)).current;
  const slideAnim1 = useRef(new Animated.Value(0)).current;
  const slideAnim2 = useRef(new Animated.Value(SCREEN_WIDTH)).current;
  const slideAnim3 = useRef(new Animated.Value(SCREEN_WIDTH)).current;
  const slideAnim4 = useRef(new Animated.Value(SCREEN_WIDTH)).current;
  const slideAnim5 = useRef(new Animated.Value(SCREEN_WIDTH)).current;

  const handleNext = () => {
    Animated.parallel([
      Animated.timing(slideAnim1, {
        toValue: -SCREEN_WIDTH,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim2, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setCurrentScreen(2);
    });
  };

  const handleContinue = () => {
    // Hide carousel content during transition
    onboarding4Opacity.setValue(0);
    setShowTransitionVeil(true);
    
    // Trigger reset before transition starts
    setOnboarding4ResetTrigger(prev => prev + 1);
    
    Animated.parallel([
      Animated.timing(slideAnim2, {
        toValue: -SCREEN_WIDTH,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim3, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setCurrentScreen(3);
      // Instantly reveal carousel content
      onboarding4Opacity.setValue(1);
      setShowTransitionVeil(false);
    });
  };

  const handleContinueToOnboarding3 = () => {
    Animated.parallel([
      Animated.timing(slideAnim3, {
        toValue: -SCREEN_WIDTH,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim5, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setCurrentScreen(5);
    });
  };

  const handleOnboarding3ToSignup = () => {
    Animated.parallel([
      Animated.timing(slideAnim5, {
        toValue: -SCREEN_WIDTH,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim4, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setCurrentScreen(4);
    });
  };

  useEffect(() => {
    if (currentScreen === 1) {
      slideAnim1.setValue(0);
      slideAnim2.setValue(SCREEN_WIDTH);
      slideAnim3.setValue(SCREEN_WIDTH);
      slideAnim4.setValue(SCREEN_WIDTH);
      slideAnim5.setValue(SCREEN_WIDTH);
    } else if (currentScreen === 2) {
      slideAnim2.setValue(0);
      slideAnim3.setValue(SCREEN_WIDTH);
      slideAnim4.setValue(SCREEN_WIDTH);
      slideAnim5.setValue(SCREEN_WIDTH);
      // Preload: Reset carousel when on Onboarding2 screen
      setOnboarding4ResetTrigger(prev => prev + 1);
      onboarding4Opacity.setValue(0);
    } else if (currentScreen === 3) {
      slideAnim3.setValue(0);
      slideAnim4.setValue(SCREEN_WIDTH);
      slideAnim5.setValue(SCREEN_WIDTH);
    } else if (currentScreen === 4) {
      slideAnim4.setValue(0);
      slideAnim5.setValue(SCREEN_WIDTH);
    } else if (currentScreen === 5) {
      slideAnim5.setValue(0);
    }
  }, [currentScreen]);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.screen,
            {
              transform: [{ translateX: slideAnim1 }],
            },
          ]}
        >
          <Onboarding1 onNext={handleNext} />
        </Animated.View>
        <Animated.View
          style={[
            styles.screen,
            {
              transform: [{ translateX: slideAnim2 }],
            },
          ]}
        >
          <Onboarding2 onContinue={handleContinue} />
        </Animated.View>
        <Animated.View
          style={[
            styles.screen,
            {
              transform: [{ translateX: slideAnim3 }],
            },
          ]}
        >
          {/* Screen 3 is the carousel */}
          <Animated.View style={{ flex: 1, opacity: onboarding4Opacity }}>
            <Onboarding4 onContinue={handleContinueToOnboarding3} resetTrigger={onboarding4ResetTrigger} />
          </Animated.View>
        </Animated.View>
        <Animated.View
          style={[
            styles.screen,
            {
              transform: [{ translateX: slideAnim5 }],
            },
          ]}
        >
          <Onboarding3 onContinue={handleOnboarding3ToSignup} />
        </Animated.View>
        <Animated.View
          style={[
            styles.screen,
            {
              transform: [{ translateX: slideAnim4 }],
            },
          ]}
        >
          <Signup onProviderPress={() => {}} />
        </Animated.View>
      </View>
      {/* Left-edge seam guard to mask any subpixel gaps */}
      <View pointerEvents="none" style={styles.leftSeamGuard} />
      {/* Fullscreen veil to prevent any flash during critical transitions */}
      {showTransitionVeil ? <View pointerEvents="none" style={styles.veil} /> : null}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
  },
  screen: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: '#FFFFFF',
  },
  veil: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
  },
  leftSeamGuard: {
    position: 'absolute',
    top: 0,
    left: -4,
    width: 4,
    bottom: 0,
    backgroundColor: '#FFFFFF',
  },
});


