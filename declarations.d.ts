declare module '*.jpg' {
  const content: number; // React Native packs images as numbers
  export default content;
}

declare module '*.jpeg' {
  const content: number;
  export default content;
}

declare module '*.png' {
  const content: number;
  export default content;
}

declare module '*.webp' {
  const content: number;
  export default content;
}

declare module '*.gif' {
  const content: number;
  export default content;
}

declare module 'lottie-react-native' {
  import { Component } from 'react';
  import { ViewStyle } from 'react-native';
  type LottieSource = number | { uri: string };
  interface LottieViewProps {
    source: LottieSource;
    autoPlay?: boolean;
    loop?: boolean;
    style?: ViewStyle | ViewStyle[];
    speed?: number;
    progress?: number;
    hardwareAccelerationAndroid?: boolean;
    enableMergePathsAndroidForKitKatAndAbove?: boolean;
  }
  export default class LottieView extends Component<LottieViewProps> {}
}

