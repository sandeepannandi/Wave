import { StyleSheet, Text, View, Dimensions, Image, Animated, Easing } from 'react-native';
import { useEffect, useRef } from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import EmailIcon from '../assets/email.svg';
import INotesIcon from '../assets/inotes.svg';
import EvernoteIcon from '../assets/evernote.svg';
import IMsgIcon from '../assets/imsg.svg';
import MicNotesIcon from '../assets/micnotes.svg';
import NotionIcon from '../assets/notion.svg';
import WaveIcon from '../assets/waveicon.svg';
import DotArrow1 from '../assets/dotarrow1.svg';
import DotArrow2 from '../assets/dotarrow2.svg';
import DotArrow3 from '../assets/dotarrow3.svg';
import DotArrow4 from '../assets/dotarrow4.svg';
import DotArrow5 from '../assets/dotarrow5.svg';
import DotArrow6 from '../assets/dotarrow6.svg';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function Onboarding4Slide3() {
  const yellowStarRotation = useRef(new Animated.Value(0)).current;
  const redStarRotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const tiltAnimation = (animValue: Animated.Value, delay: number = 0) => {
      return Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(animValue, {
            toValue: 1.5,
            duration: 1000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(animValue, {
            toValue: -1.5,
            duration: 1000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(animValue, {
            toValue: 0,
            duration: 1000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ])
      );
    };

    const yellowAnim = tiltAnimation(yellowStarRotation, 0);
    const redAnim = tiltAnimation(redStarRotation, 200);

    yellowAnim.start();
    redAnim.start();

    return () => {
      yellowAnim.stop();
      redAnim.stop();
    };
  }, [yellowStarRotation, redStarRotation]);

  const yellowRotate = yellowStarRotation.interpolate({
    inputRange: [-1.5, 0, 1.5],
    outputRange: ['-8deg', '0deg', '8deg'],
  });

  const redRotate = redStarRotation.interpolate({
    inputRange: [-1.5, 0, 1.5],
    outputRange: ['-8deg', '0deg', '8deg'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.heroWrap}>
        <Image
          source={require('../assets/onboardingcar3asset.jpg')}
          style={styles.heroImage}
          resizeMode="cover"
        />

        <View style={styles.arrowLayer} pointerEvents="none">
          <DotArrow1 width={60} height={96} style={styles.arrowTopRight} />
          <DotArrow6 width={11} height={88} style={styles.arrowTopLeftVertical} />
          <DotArrow3 width={44} height={70} style={styles.arrowRightCurve} />
          <DotArrow2 width={11} height={94} style={styles.arrowCenterBottom} />
          <DotArrow4 width={84} height={40} style={styles.arrowBottomRight} />
          <DotArrow5 width={101} height={78} style={styles.arrowBottomLeftCurve} />
        </View>

        {/* Center node - Apple Notes */}
        <View style={[styles.appBox, styles.centerBox, styles.shadowSoft]}>
          <INotesIcon width={46} height={46} />
        </View>

        {/* Satellite nodes */}
        {/* Top Left - Gmail */}
        <View style={[styles.appBox, styles.boxTopLeft, styles.shadowSoft]}>
          <EmailIcon width={40} height={40} />
        </View>
        {/* Top Right - OneNote */}
        <View style={[styles.appBox, styles.boxTopRight, styles.shadowSoft]}>
          <MicNotesIcon width={64} height={64} />
        </View>
        {/* Middle Right - Evernote */}
        <View style={[styles.appBox, styles.boxMidRight, styles.shadowSoft]}>
          <EvernoteIcon width={54} height={54} />
        </View>
        {/* Bottom Left - Messages */}
        <View style={[styles.appBox, styles.boxBottomLeft, styles.shadowSoft]}>
          <IMsgIcon width={44} height={44} />
        </View>
        {/* Bottom Center - Microphone */}
        <View style={[styles.appBox, styles.boxBottomCenter, styles.shadowSoft]}>
          <WaveIcon width={36} height={36} />
        </View>
        {/* Bottom Right - Notion */}
        <View style={[styles.appBox, styles.boxBottomRight, styles.shadowSoft]}>
          <NotionIcon width={40} height={40} />
        </View>

        {/* Yellow star to the right of center Apple Notes icon */}
        <Animated.View
          style={[
            styles.yellowStar,
            {
              transform: [{ rotate: yellowRotate }],
            },
          ]}
        >
          <Svg width={45} height={46} viewBox="0 0 45 46">
            <Path
              d="M30.7256 24.3189L28.683 25.7884C25.5104 28.0639 24.2543 32.2878 25.5936 36.1776L26.4534 38.6857C26.783 39.6367 25.5651 40.254 24.993 39.4258L23.4788 37.2494C21.1336 33.8693 16.9846 32.3847 13.2736 33.5979L10.8806 34.3762C9.9735 34.6751 9.32159 33.3888 10.099 32.8339L12.1417 31.3644C15.3143 29.0889 16.5703 24.865 15.2311 20.9752L14.3713 18.4671C14.0416 17.5161 15.2596 16.8989 15.8316 17.727L17.3459 19.9034C19.691 23.2835 23.8401 24.7681 27.5511 23.555L29.944 22.7766C30.8512 22.4777 31.5031 23.764 30.7256 24.3189Z"
              fill="#FFD700"
            />
            <Path
              d="M30.9969 5.51932L30.0757 6.18206C28.6449 7.20825 28.0784 9.11313 28.6824 10.8674L29.0702 11.9985C29.2188 12.4274 28.6696 12.7057 28.4116 12.3323L27.7287 11.3507C26.6711 9.82638 24.7999 9.15686 23.1263 9.70396L22.0472 10.055C21.6381 10.1898 21.3441 9.60967 21.6947 9.35944L22.6159 8.6967C24.0467 7.67051 24.6131 5.76563 24.0091 4.01137L23.6214 2.88027C23.4727 2.4514 24.022 2.17303 24.28 2.5465L24.9629 3.52803C26.0205 5.05239 27.8916 5.72191 29.5652 5.17481L30.6444 4.82377C31.0535 4.68899 31.3475 5.26909 30.9969 5.51932Z"
              fill="#FFD700"
            />
          </Svg>
        </Animated.View>

        {/* Red stars below and to the left of Messages icon */}
        <Animated.View
          style={[
            styles.redStar1,
            {
              transform: [{ rotate: redRotate }],
            },
          ]}
        >
          <Svg width={45} height={46} viewBox="0 0 45 46">
            <Path
              d="M30.7256 24.3189L28.683 25.7884C25.5104 28.0639 24.2543 32.2878 25.5936 36.1776L26.4534 38.6857C26.783 39.6367 25.5651 40.254 24.993 39.4258L23.4788 37.2494C21.1336 33.8693 16.9846 32.3847 13.2736 33.5979L10.8806 34.3762C9.9735 34.6751 9.32159 33.3888 10.099 32.8339L12.1417 31.3644C15.3143 29.0889 16.5703 24.865 15.2311 20.9752L14.3713 18.4671C14.0416 17.5161 15.2596 16.8989 15.8316 17.727L17.3459 19.9034C19.691 23.2835 23.8401 24.7681 27.5511 23.555L29.944 22.7766C30.8512 22.4777 31.5031 23.764 30.7256 24.3189Z"
              fill="#FF0000"
            />
            <Path
              d="M30.9969 5.51932L30.0757 6.18206C28.6449 7.20825 28.0784 9.11313 28.6824 10.8674L29.0702 11.9985C29.2188 12.4274 28.6696 12.7057 28.4116 12.3323L27.7287 11.3507C26.6711 9.82638 24.7999 9.15686 23.1263 9.70396L22.0472 10.055C21.6381 10.1898 21.3441 9.60967 21.6947 9.35944L22.6159 8.6967C24.0467 7.67051 24.6131 5.76563 24.0091 4.01137L23.6214 2.88027C23.4727 2.4514 24.022 2.17303 24.28 2.5465L24.9629 3.52803C26.0205 5.05239 27.8916 5.72191 29.5652 5.17481L30.6444 4.82377C31.0535 4.68899 31.3475 5.26909 30.9969 5.51932Z"
              fill="#FF0000"
            />
          </Svg>
        </Animated.View>
       
                
      </View>
      <Text style={styles.title}>Send Waves {'\n'} Anywhere</Text>
      <Text style={styles.description}>
        Export to email, OneNote, Notion, Evernote, {'\n'}and more wherever you need it.
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
  arrowLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  connector: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  arrowTopRight: {
    position: 'absolute',
    top: 88,
    right: 135,
  },
  arrowTopLeftVertical: {
    position: 'absolute',
    top: 158,
    left: 68,
  },
 
  arrowCenterBottom: {
    position: 'absolute',
    bottom: 140,
    left: 188,
  },
  arrowRightCurve: {
    position: 'absolute',
    top: 210,
    right: 55,
  },
  arrowBottomRight: {
    position: 'absolute',
    bottom: 105,
    right: 85,
  },
  arrowBottomLeftCurve: {
    position: 'absolute',
    bottom: 102,
    left: 68,
  },
  shadowSoft: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  appBox: {
    position: 'absolute',
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(223,223,223,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  appIcon: {
    width: 34,
    height: 34,
  },
  centerBox: { top: 180, left: 160, height: 70, width: 70 },
  boxTopLeft: { top: 100, left: 40 },
  boxTopRight: { top: 45, right: 78 },
  boxMidRight: { top: 150, right: 40 },
  boxBottomLeft: { bottom: 175, left: 40 },
  boxBottomCenter: { bottom: 80, left: 160 },
  boxBottomRight: { bottom: 140, right: 50 },
  yellowStar: {
    position: 'absolute',
    top: 154,
    left: 208,
    zIndex: 3,
  },
  redStar1: {
    position: 'absolute',
    bottom: 90,
    left: 70,
    zIndex: 3,
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
