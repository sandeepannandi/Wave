import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Line } from 'react-native-svg';
import BlueTick from '../assets/bluetick.svg';
import GreenTick from '../assets/greentick.svg';
import GrayTick from '../assets/graytick.svg';
import { useFonts, Archivo_700Bold, Archivo_500Medium, Archivo_600SemiBold, Archivo_400Regular } from '@expo-google-fonts/archivo';
import RadialBtn from '../components/RadialBtn';


interface Onboarding2Props {
  onContinue?: () => void;
}

export default function Onboarding2({ onContinue }: Onboarding2Props) {
  const [fontsLoaded] = useFonts({
    Archivo_700Bold,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Archivo_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View style={styles.topSection}>
          <View style={styles.iconPlaceholder}>
            <BlueTick width={130} height={130} />
          </View>
          
          <Text style={styles.title}>Unlock Wave In</Text>
          <Text style={styles.title}>10 Seconds</Text>
          <Text style={styles.subtitle}>
            Grant mic access, get notified, and go!
          </Text>
        </View>

        <View style={styles.middleSection}>
          <View style={styles.waveGraphic}>
            <View style={styles.checklistItem}>
              <View style={styles.checkboxWrapper}>
                <View style={styles.checkboxGreen}>
                  <GreenTick width={24} height={24} />
                </View>
                <Svg style={styles.dashedLineGreen}>
                  <Line x1="0" y1="0" x2="0" y2="48" stroke="#00F124" strokeWidth="3" strokeDasharray="4 4" />
                </Svg>
              </View>
              <View style={styles.checklistText}>
                <Text style={styles.checklistTitle}>Microphone Access</Text>
                <Text style={styles.checklistSubtitle}>To record audio</Text>
              </View>
            </View>

            <View style={styles.checklistItem}>
              <View style={styles.checkboxWrapper}>
                <View style={styles.checkbox}>
                  <GrayTick width={24} height={24} />
                </View>
                <Svg style={styles.dashedLine}>
                  <Line x1="0" y1="0" x2="0" y2="48" stroke="#696969" strokeWidth="3" strokeDasharray="4 4" />
                </Svg>
              </View>
              <View style={styles.checklistText}>
                <Text style={styles.checklistTitle}>Enable Notifications</Text>
                <Text style={styles.checklistSubtitle}>To stay updated</Text>
              </View>
            </View>

            <View style={styles.checklistItem}>
              <View style={styles.checkboxWrapper}>
                <View style={styles.checkbox}>
                  <GrayTick width={24} height={24} />
                </View>
              </View>
              <View style={styles.checklistText}>
                <Text style={styles.checklistTitle}>Analytics (Optional)</Text>
                <Text style={styles.checklistSubtitle}>To make Wave better</Text>
              </View>
            </View>
          </View>
        </View>

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
    paddingHorizontal: 20,
  },
  topSection: {
    alignItems: 'center',
    marginTop: 24,
  },
  iconPlaceholder: {
    marginBottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
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
    marginTop: 12,
  },
  middleSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    position: 'relative',
  },
  waveGraphic: {
    alignItems: 'center',
    zIndex: 1,
    width: '100%',
  },
  checklistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 34,
    width: '100%',
    justifyContent: 'center',
  },
  checkboxWrapper: {
    alignItems: 'center',
    marginRight: 12,
    position: 'relative',
  },
  checkboxGreen: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#00F124',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checklistText: {
    maxWidth: 250,
  },
  checklistTitle: {
    fontFamily: 'Archivo_500Medium',
    fontSize: 18,
    color: '#000',
    marginBottom: 0,
  },
  checklistSubtitle: {
    fontFamily: 'Archivo_400Regular',
    fontSize: 14,
    color: '#696969',
  },
  dashedLineGreen: {
    position: 'absolute',
    top: 30,
    width: 3,
    height: 50,
  },
  dashedLine: {
    position: 'absolute',
    top: 30,
    width: 3,
    height: 50,
  },
  bottomSection: {
    marginBottom: 20,
  },
});

