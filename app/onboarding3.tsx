import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics';
import BlueBag from '../assets/bluebag.svg';
import WorkIcon from '../assets/work.svg';
import SchoolIcon from '../assets/school.svg';
import SmallBussIcon from '../assets/smallbuss.svg';
import NonprofitIcon from '../assets/nonprofit.svg';
import ContentIcon from '../assets/content.svg';
import PersonalIcon from '../assets/personal.svg';
import { useFonts, Archivo_700Bold, Archivo_500Medium, Archivo_600SemiBold, Archivo_400Regular } from '@expo-google-fonts/archivo';
import RadialBtn from '../components/RadialBtn';
import { useState } from 'react';

interface Onboarding3Props {
  onContinue?: () => void;
}

export default function Onboarding3({ onContinue }: Onboarding3Props) {
  const [fontsLoaded] = useFonts({
    Archivo_700Bold,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Archivo_400Regular,
  });
  const [selectedOption, setSelectedOption] = useState('Student');

  if (!fontsLoaded) {
    return null;
  }

  const options = [
    { id: 'Work', label: 'Work/Business', Icon: WorkIcon },
    { id: 'Student', label: 'Student', Icon: SchoolIcon },
    { id: 'SmallBusiness', label: 'Small Business', Icon: SmallBussIcon },
    { id: 'NonProfit', label: 'Non-Profit', Icon: NonprofitIcon },
    { id: 'Content', label: 'Content Creation', Icon: ContentIcon },
    { id: 'Personal', label: 'Personal', Icon: PersonalIcon },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View style={styles.topSection}>
          <View style={styles.iconPlaceholder}>
            <BlueBag width={130} height={130} />
          </View>
          
          <Text style={styles.title}>What Brings You To Wave</Text>
          <Text style={styles.subtitle}>
            We customize your experience!
          </Text>
        </View>

        <View style={styles.optionsSection}>
          <View style={styles.optionsGrid}>
            {options.map((option) => {
              const isSelected = selectedOption === option.id;
              const IconComponent = option.Icon;
              return (
                <Pressable
                  key={option.id}
                  style={[styles.optionButton, isSelected && styles.optionButtonSelected]}
                  onPress={() => {
                    impactAsync(ImpactFeedbackStyle.Light);
                    setSelectedOption(option.id);
                  }}
                >
                  <IconComponent width={18} height={18} />
                  <Text style={[styles.optionText, isSelected && styles.optionTextSelected]}>
                    {option.label}
                  </Text>
                </Pressable>
              );
            })}
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
    fontFamily: 'Archivo_400Regular',
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'center',
    color: '#000',
    marginTop: 12,
  },
  optionsSection: {
    flex: 1,
    justifyContent: 'center',
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -6,
  },
  optionButton: {
    width: (Dimensions.get('window').width - 40 - 12) / 2,
    minHeight: 96,
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: 'rgba(223, 223, 223, 0.7)',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 12,
    marginBottom: 12,
    marginHorizontal: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 0,
  },
  optionButtonSelected: {
    backgroundColor: 'rgba(255, 240, 57, 0.4)',
    borderColor: 'rgba(255, 240, 57, 0.7)',
  },
  optionText: {
    fontFamily: 'Archivo_600SemiBold',
    fontSize: 14,
    color: '#000',
    marginTop: 8,
    textAlign: 'center',
  },
  optionTextSelected: {
    fontFamily: 'Archivo_600SemiBold',
  },
  bottomSection: {
    marginBottom: 20,
  },
});

