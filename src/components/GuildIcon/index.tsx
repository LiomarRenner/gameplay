import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';
import DiscordSvg from '../../assets/discord.svg'
const { CDN_IMAGE } = process.env;

type Props = {
  guildId: string;
  iconId: string | null;
}

export function GuildIcon({ guildId, iconId }: Props) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`

  //'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipartcraft.com%2Fimages%2Fdiscord-logo-transparent-cool-5.png&f=1&nofb=1'

  return (
    <View style={styles.container}>
      {
        iconId ?
        <Image
          source={{ uri }}
          style={styles.image}
          resizeMode="cover"
        />
        :
        <DiscordSvg width={40} height={40} />
      }
    </View>
  );
}