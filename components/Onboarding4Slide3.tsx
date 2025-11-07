import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import MicIcon from '../assets/speak.jpg';
import BoxA from '../assets/yt.jpg';
import BoxB from '../assets/teams.jpg';
import BoxC from '../assets/gmeet.jpg';
import BoxD from '../assets/zoom.jpg';
import DotArrow1 from '../assets/dotarrow1.svg';
import DotArrow2 from '../assets/dotarrow2.svg';
import DotArrow3 from '../assets/dotarrow3.svg';
import DotArrow4 from '../assets/dotarrow4.svg';
import DotArrow5 from '../assets/dotarrow5.svg';
import DotArrow6 from '../assets/dotarrow6.svg';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function Onboarding4Slide3() {
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

        {/* Center node */}
        <View style={[styles.appBox, styles.centerBox, styles.shadowSoft]}>
          <Image source={MicIcon} style={styles.appIcon} resizeMode="contain" />
        </View>

        {/* Satellite nodes */}
        <View style={[styles.appBox, styles.boxTopLeft, styles.shadowSoft]}>
          <Image source={BoxA} style={styles.appIcon} resizeMode="contain" />
        </View>
        <View style={[styles.appBox, styles.boxTopRight, styles.shadowSoft]}>
          <Image source={BoxB} style={styles.appIcon} resizeMode="contain" />
        </View>
        <View style={[styles.appBox, styles.boxMidRight, styles.shadowSoft]}>
          <Image source={BoxC} style={styles.appIcon} resizeMode="contain" />
        </View>
        <View style={[styles.appBox, styles.boxBottomLeft, styles.shadowSoft]}>
          <Image source={BoxD} style={styles.appIcon} resizeMode="contain" />
        </View>
        <View style={[styles.appBox, styles.boxBottomCenter, styles.shadowSoft]}>
          <Image source={MicIcon} style={styles.appIcon} resizeMode="contain" />
        </View>
        <View style={[styles.appBox, styles.boxBottomRight, styles.shadowSoft]}>
          <Image source={MicIcon} style={styles.appIcon} resizeMode="contain" />
        </View>
                
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
