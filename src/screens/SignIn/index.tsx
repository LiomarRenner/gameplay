import React, { useState } from 'react';
import { View, Text, TextInput, Image, StatusBar } from 'react-native';

import IllustrationImg  from '../../assets/illustration.png';
import { styles } from './styles';

export function SignIn() {

    const [text, setText] = useState('')

    return (
        <View style={styles.container}>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Image 
                source={ IllustrationImg } 
                style={styles.image}
                resizeMode="stretch"
            />

            <View style={styles.content}> 
                <Text style={styles.title}>
                    Organize {`\n`} 
                    suas jogatinas {`\n`}
                    facilmente 
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>
            </View>
        </View>
    );
}

