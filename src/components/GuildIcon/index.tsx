import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
  const uri = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipartcraft.com%2Fimages%2Fdiscord-logo-transparent-cool-5.png&f=1&nofb=1'

  return(
    <Image 
      source={{ uri }}
      style={styles.image}
      resizeMode="cover" 
    /> 
  );
}