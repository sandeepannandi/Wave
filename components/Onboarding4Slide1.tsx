import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Animated as RNAnimated, Easing } from 'react-native';
import Svg, { Line, Circle } from 'react-native-svg';
import LottieView from 'lottie-react-native';
import YouTube from '../assets/yt.jpg';
import GMeet from '../assets/gmeet.jpg';
import Teams from '../assets/teams.jpg';
import Zoom from '../assets/zoom.jpg';
import IPod from '../assets/ipod.jpg';
import BlueCall from '../assets/phone.jpg';
import BlueSpeak from '../assets/speak.jpg';
import WaveIcon from '../assets/waveicon.svg';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const AnimatedCircle = RNAnimated.createAnimatedComponent(Circle);

export default function Onboarding4Slide1() {
  const connectors = [
    { x1: 152, y1: 180, x2: 70,  y2: 100 },
    { x1: 190, y1: 180, x2: 190, y2: 80  },
    { x1: 235, y1: 180, x2: 310, y2: 107 },
    { x1: 252, y1: 300, x2: 310, y2: 330 },
    { x1: 215, y1: 300, x2: 244, y2: 392 },
    { x1: 132, y1: 300, x2: 70,  y2: 332 },
    { x1: 170, y1: 300, x2: 140, y2: 390 },
  ];

  const anims = useRef<RNAnimated.Value[]>(connectors.map(() => new RNAnimated.Value(0))).current;

  useEffect(() => {
    const baseTravelDurationMs = 1000; // default travel
    const startIntervalMs = 5000;      // next glow appears every 5s
    const staggerMs = 240;             // stagger start times so circles don't move together

    anims.forEach((anim: RNAnimated.Value, idx: number) => {
      const startDelay = idx * staggerMs;
      const travelDurationForIdx = idx === 1 ? 1800 : baseTravelDurationMs; // slow down 2nd connector
      const idleDelayMs = Math.max(0, startIntervalMs - travelDurationForIdx - startDelay);

      RNAnimated.loop(
        RNAnimated.sequence([
          RNAnimated.delay(startDelay),
          RNAnimated.timing(anim, {
            toValue: 1,
            duration: travelDurationForIdx,
            easing: Easing.linear,
            useNativeDriver: false,
          }),
          // reset immediately to start position
          RNAnimated.timing(anim, {
            toValue: 0,
            duration: 0,
            useNativeDriver: false,
          }),
          RNAnimated.delay(idleDelayMs),
        ])
      ).start();
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.heroWrap}>
        <Image
          source={require('../assets/onboardingcar1assest.jpg')}
          style={styles.heroImage}
          resizeMode="cover"
        />

        {/* Center recording card */}
        <View style={styles.centerCard}>
          <WaveIcon width={28} height={28} />
          <LottieView
            style={styles.centerLottie}
            source={{ uri: 'https://lottie.host/0a945edb-45a6-4428-a4c2-7bedbe7286d5/HwhE7cZW7V.lottie' }}
            autoPlay
            loop
          />
          <Text style={styles.timerText}>00:01:24</Text>
        </View>

        {/* Yellow connector animated glow */}
        <Svg style={styles.connector}>
          {connectors.map((c, idx) => {
            const cx = anims[idx].interpolate({ inputRange: [0, 1], outputRange: [c.x2, c.x1] });
            const cy = anims[idx].interpolate({ inputRange: [0, 1], outputRange: [c.y2, c.y1] });
            return (
              <React.Fragment key={`conn-${idx}`}>
                <Line x1={String(c.x1)} y1={String(c.y1)} x2={String(c.x2)} y2={String(c.y2)} stroke="#FFF039" strokeWidth="3" />
                <AnimatedCircle cx={cx} cy={cy} r={4} fill="rgb(255, 174, 1)" />
              </React.Fragment>
            );
          })}
        </Svg>

        {/* Outer icon boxes */}
        <View style={[styles.iconBox, styles.boxYouTube]}>
          <Image source={YouTube} style={styles.appIcon} />
        </View>
        <View style={[styles.iconBox, styles.boxIPod]}>
          <Image source={IPod} style={[styles.appIcon, { height: 36, width: 364}]}  />
        </View>
        <View style={[styles.iconBox, styles.boxTeams]}>
          <Image source={Teams} style={styles.appIcon} />
        </View>
        <View style={[styles.iconBox, styles.boxGMeet]}>
          <Image source={GMeet} style={styles.appIcon} />
        </View>
        <View style={[styles.iconBox, styles.boxZoom]}>
          <Image source={Zoom} style={styles.appIcon} />
        </View>
        <View style={[styles.iconBox, styles.boxSpeak]}>
          <Image source={BlueSpeak} style={styles.appIcon} />
        </View>
        <View style={[styles.iconBox, styles.boxCall]}>
          <Image source={BlueCall} style={[styles.appIcon, { height: 34, width: 364}]} />
        </View>
      </View>
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
  centerCard: {
    position: 'absolute',
    zIndex:999,
    width: 134,
    height: 126,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(223,223,223,0.4)',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  centerIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  waveBarRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 4,
    marginTop: 8,
  },
  waveBar: {
    width: 6,
    backgroundColor: '#1A73E8',
    borderRadius: 2,
    marginHorizontal: 2,
  },
  timerText: {
    marginTop: 2,
    fontFamily: 'Archivo_700Bold',
    fontSize: 15,
    color: '#000',
  },
  centerLottie: {
    width: 130,
    height: 40,
    marginTop: 4,
  },
  connector: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  iconBox: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(223,223,223,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  appIcon: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
    borderRadius: 6,
  },
  boxYouTube: { top: 48, left: 20 },
  boxIPod: { top: 24, left: 160 },
  boxTeams: { top: 52, right: 22 },
  boxGMeet: { top: 320, left: 24 },
  boxZoom: { top: 320, right: 24 },
  boxSpeak: { top: 380, left: 110},
  boxCall: { top: 380, right: 110},
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
    paddingHorizontal: 20,
    lineHeight: 20,
    textAlign: 'center',
    color: '#000',
  },
});
