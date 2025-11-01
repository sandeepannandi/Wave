import { StyleSheet, Text, Pressable, Animated } from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Rect } from 'react-native-svg';
import { useState, useRef } from 'react';

interface RadialBtnProps {
  text: string;
  onPress?: () => void;
  textStyle?: object;
}

export default function RadialBtn({ text, onPress, textStyle }: RadialBtnProps) {
  const [buttonSize, setButtonSize] = useState({ width: 0, height: 0 });
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
      onLayout={(e) => setButtonSize({ width: e.nativeEvent.layout.width, height: e.nativeEvent.layout.height })}
    >
      <Animated.View style={[StyleSheet.absoluteFill, { opacity: opacityAnim }]}>
        {buttonSize.width > 0 && buttonSize.height > 0 && (
          <Svg 
            width={buttonSize.width} 
            height={buttonSize.height} 
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <Defs>
              <RadialGradient id={`buttonGradient-${buttonSize.width}`} cx="50%" cy="50%">
                <Stop offset="2%" stopColor="rgba(255, 142, 169, 0.1)" />
                <Stop offset="100%" stopColor="rgba(255, 240, 50, 0)" />
              </RadialGradient>
            </Defs>
            <Rect width={buttonSize.width} height={buttonSize.height} fill={`url(#buttonGradient-${buttonSize.width})`} rx={28} />
          </Svg>
        )}
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
  ctaText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#000000',
    zIndex: 1,
  },
});

