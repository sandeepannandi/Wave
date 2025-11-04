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

