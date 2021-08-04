import React from 'react';
import { 
  FlatList, 
  ImageBackground, 
  Text, 
  View 
} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import BannerPng from '../../assets/banner.png'

export function AppointmentDetails() {
  const members =[
    {
      id: '1',
      username: 'Renner',
      avatar_url: 'https://github.com/LiomarRenner.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Liomar',
      avatar_url: 'https://github.com/LiomarRenner.png',
      status: 'offline'
    },
  ]
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto 
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground 
        source={BannerPng}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendários
          </Text>

          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida
          </Text>
        </View>
      </ImageBackground>

      <ListHeader 
        title="Jogadores"
        subtitle="Total 3"
      />

      <FlatList 
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member 
            data={item}
          />
        )}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida "/>
      </View>
    </Background>
  );  
}

