import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Svg, { Line } from 'react-native-svg';
import YouTube from '../assets/yt.jpg';
import GMeet from '../assets/gmeet.jpg';
import Teams from '../assets/teams.jpg';
import Zoom from '../assets/zoom.jpg';
import IPod from '../assets/ipod.jpg';
import BlueCall from '../assets/phone.jpg';
import BlueSpeak from '../assets/speak.jpg';
import WaveIcon from '../assets/waveicon.svg';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function Onboarding4Slide1() {
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
          
          <Text style={styles.timerText}>00:01:24</Text>
        </View>

        {/* Yellow connectors (star-like) */}
        <Svg style={styles.connector}>
          <Line x1="152" y1="180" x2="70" y2="100" stroke="#FFF039" strokeWidth="3" />
          <Line x1="190" y1="180" x2="190" y2="80" stroke="#FFF039" strokeWidth="3" />
          <Line x1="235" y1="180" x2="310" y2="107" stroke="#FFF039" strokeWidth="3" />
          <Line x1="252" y1="300" x2="310" y2="330" stroke="#FFF039" strokeWidth="3" />
          <Line x1="215" y1="300" x2="244" y2="392" stroke="#FFF039" strokeWidth="3" />
          <Line x1="132" y1="300" x2="70" y2="332" stroke="#FFF039" strokeWidth="3" />
          <Line x1="170" y1="300" x2="140" y2="382" stroke="#FFF039" strokeWidth="3" />

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
    marginTop: 8,
    fontFamily: 'Archivo_600SemiBold',
    fontSize: 12,
    color: '#000',
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
