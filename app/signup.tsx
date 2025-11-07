import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Defs, RadialGradient, Stop, Rect } from 'react-native-svg';
import SignupAsset from '../assets/signupasset.svg';
import GoogleLogo from '../assets/Google.svg';
import AppleLogo from '../assets/apple.svg';
import FacebookLogo from '../assets/facebook.svg';
import MicrosoftLogo from '../assets/microsoft.svg';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface ProviderButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
}

const ProviderButton = ({ children, onPress }: ProviderButtonProps) => {
  const [buttonSize, setButtonSize] = useState({ width: 0, height: 0 });

  return (
    <Pressable
      style={({ pressed }) => [
        styles.providerBox,
        pressed && styles.providerBoxPressed,
      ]}
      onPress={onPress}
      onLayout={(e) =>
        setButtonSize({
          width: e.nativeEvent.layout.width,
          height: e.nativeEvent.layout.height,
        })
      }
    >
      {buttonSize.width > 0 && buttonSize.height > 0 && (
        <Svg
          width={buttonSize.width}
          height={buttonSize.height}
          style={StyleSheet.absoluteFill}
        >
          <Defs>
            <RadialGradient
              id={`providerGradient-${buttonSize.width}`}
              cx="50%"
              cy="50%"
            >
              <Stop offset="2%" stopColor="rgba(255, 142, 169, 0)" />
              <Stop offset="100%" stopColor="rgba(255, 240, 50, 0)" />
            </RadialGradient>
          </Defs>
          <Rect
            width={buttonSize.width}
            height={buttonSize.height}
            fill={`url(#providerGradient-${buttonSize.width})`}
            rx={12}
          />
        </Svg>
      )}
      <View style={styles.boxContent}>{children}</View>
    </Pressable>
  );
};

interface SignupProps {
  onProviderPress?: () => void;
}

export default function Signup({ onProviderPress }: SignupProps) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View style={styles.topSection}>
          <View style={styles.iconPlaceholder}>
            <SignupAsset width={130} height={130} />
          </View>
        </View>
        <Text style={styles.title}>Start Taking Notes{"\n"}With Ease!</Text>
        <Text style={styles.subtitle}>Create an account to keep your data secure</Text>

        <Text style={styles.signInLabel}>Sign in with</Text>

        <View style={styles.grid}>
          <ProviderButton onPress={onProviderPress}>
            <GoogleLogo width={30} height={30} />
          </ProviderButton>
          <ProviderButton onPress={onProviderPress}>
            <AppleLogo width={30} height={30} />
          </ProviderButton>
          <ProviderButton onPress={onProviderPress}>
            <FacebookLogo width={30} height={30} />
          </ProviderButton>
          <ProviderButton onPress={onProviderPress}>
            <MicrosoftLogo width={30} height={30} />
          </ProviderButton>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>By signing up to this app you agree with our <Text style={styles.link}>Terms of Use</Text> and <Text style={styles.link}>Privacy Policy</Text></Text>
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
    alignItems: 'center',
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
    lineHeight: 34,
    textAlign: 'center',
    color: '#000',
    marginTop: 8,
  },
  subtitle: {
    fontFamily: 'Archivo_500Medium',
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',
    color: '#000',
    marginTop: 12,
  },
  signInLabel: {
    fontFamily: 'Archivo_600SemiBold',
    fontSize: 16,
    color: '#000',
    marginTop: 82,
    marginBottom: 24,
  },
  grid: {
    width: SCREEN_WIDTH - 49,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  providerBox: {
    width: (SCREEN_WIDTH - 40 - 16) / 2,
    height: 90,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(227, 7, 60, 0.1)',
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  providerBoxPressed: {
    opacity: 0.8,
  },
  boxContent: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  footer: {
    marginTop: 'auto',
    marginBottom: 20,
    paddingHorizontal: 12,
  },
  footerText: {
    fontFamily: 'Archivo_500Medium',
    fontSize: 12,
    lineHeight: 18,
    color: '#000',
    textAlign: 'center',
  },
  link: {
    color: '#4D5EF6',
    fontFamily: 'Archivo_500Medium',
    textDecorationLine: 'underline',
  },
});


