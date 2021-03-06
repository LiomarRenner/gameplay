import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Image } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type ImageProps = {
  urlImage: string;
}

export function Avatar({ urlImage } : ImageProps) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <Image 
        source= {{ uri: urlImage }}
        style={styles.avatar}
      />
    </LinearGradient>
  );
}
