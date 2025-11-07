import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Animated, Easing } from 'react-native';
import Svg, { Path, Circle, Polyline } from 'react-native-svg';
import SummaryStar from '../assets/summarystart.svg';
import PhoneIcon from '../assets/phone.jpg';
import TeamsIcon from '../assets/teams.jpg';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const PillLoader = () => {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timing = Animated.timing(rotation, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    const animation = Animated.loop(timing, { resetBeforeIteration: true });

    rotation.setValue(0);

    animation.start();

    return () => {
      animation.stop();
    };
  }, [rotation]);

  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const segments = [
    { color: '#4D5EF6', opacity: 1 },
    { color: '#4D5EF6', opacity: 0.9 },
    { color: '#4D5EF6', opacity: 0.8 },
    { color: '#4D5EF6', opacity: 0.7 },
    { color: '#4D5EF6', opacity: 0.6 },
    { color: '#BAC0F5', opacity: 0.45 },
    { color: '#BAC0F5', opacity: 0.3 },
    { color: '#BAC0F5', opacity: 0.2 },
  ];

  return (
    <Animated.View style={[styles.loaderContainer, { transform: [{ rotate: spin }] }]}
    >
      {segments.map((segment, idx) => (
        <View
          key={idx}
          style={[
            styles.loaderBar,
            {
              backgroundColor: segment.color,
              opacity: segment.opacity,
              transform: [
                { rotate: `${idx * 45}deg` },
                { translateY: -7 },
              ],
            },
          ]}
        />
      ))}
    </Animated.View>
  );
};

export default function Onboarding4Slide2() {
  const starTilt = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const sequence = Animated.sequence([
      Animated.delay(800),
      Animated.timing(starTilt, {
        toValue: 1,
        duration: 260,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(starTilt, {
        toValue: -1.5,
        duration: 450,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(starTilt, {
        toValue: 0,
        duration: 260,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      }),
    ]);

    const loop = Animated.loop(sequence, { resetBeforeIteration: true });
    loop.start();

    return () => {
      loop.stop();
    };
  }, [starTilt]);

  const starRotation = starTilt.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ['-10deg', '0deg', '10deg'],
  });
  return (
    <View style={styles.container}>
      <View style={styles.heroWrap}>
        <Image
          source={require('../assets/onboardingcar2assets.jpg')}
          style={styles.heroImage}
          resizeMode="cover"
        />

        {/* Top three icon boxes */}
        <View style={styles.iconBoxesRow}>
          <View style={[styles.iconBox, styles.shadowSoft]}>
            <Svg width={24} height={24} viewBox="0 0 24 24">
              <Circle cx="12" cy="12" r="10" fill="#FF4D6D" />
              <Circle cx="12" cy="12" r="6" fill="#fff" />
            </Svg>
          </View>
          <View style={[styles.iconBox, styles.iconBoxMiddle, styles.shadowSoft]}>
            <Image source={PhoneIcon} style={styles.iconImage} resizeMode="contain" />
          </View>
          <View style={[styles.iconBox, styles.iconBoxRight, styles.shadowSoft]}>
            <Image source={TeamsIcon} style={styles.iconImage} resizeMode="contain" />
          </View>
        </View>

        {/* Pills and summary card */}
        <View style={[styles.pillBox, styles.shadowSoft]}>
          <Text style={styles.pillText}>Multiple speakers detected</Text>
        </View>

        <View style={[styles.pillLeft, styles.shadowSoft]}>
          <View style={styles.pillRow}>
            <Text style={styles.pillText}>Transcribing Audio</Text>
            <PillLoader />
          </View>
        </View>

        <View style={[styles.summaryCard, styles.shadowSoft]}>
          <View style={styles.summaryHeader}>
            <Animated.View style={{ transform: [{ rotate: starRotation }] }}>
              <SummaryStar width={20} height={20} />
            </Animated.View>
            <Text style={styles.summaryTitle}>Summary</Text>
          </View>
          <Text style={styles.summaryBody}>
            The team planned key strategies for the next quarter, focusing on competitor analysis, a dynamic content calendar, and themes to boost audience engagement.
          </Text>
        </View>


          
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
  connector: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  shadowSoft: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  iconBoxesRow: {
    position: 'absolute',
    top: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBox: {
    width: 56,
    height: 56,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(223,223,223,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  iconBoxMiddle: {
    marginLeft: 16,
  },
  iconBoxRight: {
    marginLeft: 16,
  },
  iconImage: {
    width: 32,
    height: 32,
  },
  pillBox: {
    position: 'absolute',
    top: 110,
    paddingHorizontal: 18,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(223,223,223,0.4)',
  },
  pillLeft: {
    position: 'absolute',
    top: 195,
    left: 32,
    paddingHorizontal: 18,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(223,223,223,0.4)',
  },
  pillRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pillText: {
    fontFamily: 'Archivo_600SemiBold',
    fontSize: 15,
    color: '#000',
  },
  loaderContainer: {
    width: 14,
    height: 12,
    marginLeft: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderBar: {
    position: 'absolute',
    width: 3,
    height: 8,
    borderRadius: 5,
  },
  summaryCard: {
    position: 'absolute',
    top: 270,
    right: 20,
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(223,223,223,0.4)',
    padding: 14,
  },
  summaryHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
  },
  summaryTitle: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#000',
    marginBottom: 4,
  },
  summaryBody: {
    fontFamily: 'Archivo_500Medium',
    fontSize: 12,
    lineHeight: 16,
    color: '#000',
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
