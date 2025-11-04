import { useState, useRef, useEffect } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Onboarding1 from './app/onboarding1';
import Onboarding2 from './app/onboarding2';
import Onboarding3 from './app/onboarding3';
import Onboarding4 from './app/onboarding4';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const slideAnim1 = useRef(new Animated.Value(0)).current;
  const slideAnim2 = useRef(new Animated.Value(SCREEN_WIDTH)).current;
  const slideAnim3 = useRef(new Animated.Value(SCREEN_WIDTH)).current;

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
    Animated.parallel([
      Animated.timing(slideAnim2, {
        toValue: -SCREEN_WIDTH,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim3, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setCurrentScreen(3);
    });
  };

  // No fourth screen in the flow; screen 3 is the carousel (Onboarding4)

  useEffect(() => {
    if (currentScreen === 1) {
      slideAnim1.setValue(0);
      slideAnim2.setValue(SCREEN_WIDTH);
      slideAnim3.setValue(SCREEN_WIDTH);
    } else if (currentScreen === 2) {
      slideAnim2.setValue(0);
      slideAnim3.setValue(SCREEN_WIDTH);
    } else if (currentScreen === 3) {
      slideAnim3.setValue(0);
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
          <Onboarding4 onContinue={() => {}} />
        </Animated.View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  screen: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    height: '100%',
    top: 0,
    left: 0,
  },
});


