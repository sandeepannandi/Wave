import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import RadialBtn from '../components/RadialBtn';
import Onboarding4Slide1 from '../components/Onboarding4Slide1';
import Onboarding4Slide2 from '../components/Onboarding4Slide2';
import Onboarding4Slide3 from '../components/Onboarding4Slide3';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface Onboarding4Props {
  onContinue?: () => void;
}

export default function Onboarding4({ onContinue }: Onboarding4Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / SCREEN_WIDTH);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % 3;
        scrollViewRef.current?.scrollTo({
          x: nextIndex * SCREEN_WIDTH,
          animated: true,
        });
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleScroll}
          style={styles.scrollView}
        >
          <Onboarding4Slide1 />
          <Onboarding4Slide2 />
          <Onboarding4Slide3 />
        </ScrollView>

        {/* Pagination Dots */}
        <View style={styles.paginationContainer}>
          <View style={[styles.dot, currentIndex === 0 ? styles.dotActive : styles.dotInactive]} />
          <View style={[styles.dot, styles.dotMargin, currentIndex === 1 ? styles.dotActive : styles.dotInactive]} />
          <View style={[styles.dot, styles.dotMargin, currentIndex === 2 ? styles.dotActive : styles.dotInactive]} />
        </View>

        {/* Continue Button */}
        <View style={styles.bottomSection}>
          <RadialBtn text="Continue" onPress={onContinue} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  scrollView: {
    flex: 1,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
  },
  dotMargin: {
    marginLeft: 5,
  },
  dotActive: {
    backgroundColor: '#000',
  },
  dotInactive: {
    backgroundColor: '#d4d4d4',
  },
  bottomSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});

