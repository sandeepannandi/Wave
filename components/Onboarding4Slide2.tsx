import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Svg, { Path, Circle, Polyline } from 'react-native-svg';
import SummaryStar from '../assets/summarystart.svg';

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

        {/* Top small bubble with app icons */}
        <View style={[styles.bubbleIcons, styles.shadowSoft]}>
          <View style={[styles.tinyIcon, { backgroundColor: '#FF4D6D' }]} />
          <View style={[styles.tinyIcon, { backgroundColor: '#4D5EF6' }]} />
          <View style={[styles.tinyIcon, { backgroundColor: '#7C3AED' }]} />
        </View>

        {/* Pills and summary card */}
        <View style={[styles.pillBox, styles.shadowSoft]}>
          <Text style={styles.pillText}>Multiple speakers detected</Text>
        </View>

        <View style={[styles.pillLeft, styles.shadowSoft]}>
          <Text style={styles.pillText}>Transcribing Audio</Text>
        </View>

        <View style={[styles.summaryCard, styles.shadowSoft]}>
          <View style={styles.summaryHeader}>
            <SummaryStar width={20} height={20} />
            <Text style={styles.summaryTitle}>Summary</Text>
          </View>
          <Text style={styles.summaryBody}>
            The team planned key strategies for the next quarter, focusing on competitor analysis, a dynamic content calendar, and themes to boost audience engagement.
          </Text>
        </View>

        {/* Connectors */}
        <Svg pointerEvents="none" style={styles.connector}>
          {/* Icons bubble -> Multiple speakers pill */}
          <Path d="M180 84 C 200 98, 230 106, 250 120" stroke="#FFF039" strokeWidth="3" fill="none" />
          <Polyline points="246,116 252,120 246,124" fill="none" stroke="#FFF039" strokeWidth="3" />

          {/* Left pill -> Summary card */}
          <Path d="M120 200 C 150 210, 220 220, 260 230 L 300 252" stroke="#FFF039" strokeWidth="3" fill="none" />
          <Polyline points="294,248 300,252 294,256" fill="none" stroke="#FFF039" strokeWidth="3" />

          {/* Speakers pill -> Summary card */}
          <Path d="M210 150 L 260 150 C 290 150, 310 190, 310 210" stroke="#FFF039" strokeWidth="3" fill="none" />
          <Polyline points="306,204 310,210 304,214" fill="none" stroke="#FFF039" strokeWidth="3" />

          {/* Small nodes */}
          <Circle cx="210" cy="150" r="4" fill="#FFF039" />
          <Circle cx="120" cy="200" r="4" fill="#FFF039" />
        </Svg>
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
  bubbleIcons: {
    position: 'absolute',
    top: 60,
    right: 78,
    height: 48,
    paddingHorizontal: 14,
    backgroundColor: '#fff',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(223,223,223,0.4)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  tinyIcon: {
    width: 18,
    height: 18,
    borderRadius: 9,
  },
  pillBox: {
    position: 'absolute',
    top: 80,
    paddingHorizontal: 18,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(223,223,223,0.4)',
  },
  pillLeft: {
    position: 'absolute',
    top: 190,
    left: 32,
    paddingHorizontal: 18,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(223,223,223,0.4)',
  },
  pillText: {
    fontFamily: 'Archivo_600SemiBold',
    fontSize: 15,
    color: '#000',
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
