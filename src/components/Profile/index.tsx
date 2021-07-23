import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { Avatar } from '../Avatar';

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar 
        urlImage="https://github.com/LiomarRenner.png"
      />

      <View>
        <View style={styles.user}>
          <Text style={styles.greetings}>
            Olá
          </Text>

          <Text style={styles.username}>
            Renner
          </Text>
        </View>

        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>
      </View>

    </View>
  );
}
