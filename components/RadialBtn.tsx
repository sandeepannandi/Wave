import { StyleSheet, Text, Pressable, Animated } from 'react-native';
import { useRef } from 'react';

interface RadialBtnProps {
  text: string;
  onPress?: () => void;
  textStyle?: object;
}

export default function RadialBtn({ text, onPress, textStyle }: RadialBtnProps) {
  const opacityAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.timing(opacityAnim, {
      toValue: 0.8,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable 
      style={styles.cta}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View style={[StyleSheet.absoluteFill, { opacity: opacityAnim }]}>
        <Animated.View style={[StyleSheet.absoluteFill, styles.ctaBackground]} />
      </Animated.View>
      <Text style={[styles.ctaText, textStyle]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cta: {
    paddingVertical: 14,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: 'rgba(227, 7, 60, 0.2)',
    alignItems: 'center',
    height: 52,
    overflow: 'hidden',
    position: 'relative',
  },
  ctaBackground: {
    backgroundColor: 'rgba(240, 200, 0, 0.57)',
    borderRadius: 28,
  },
  ctaText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#000000',
    zIndex: 1,
  },
});

