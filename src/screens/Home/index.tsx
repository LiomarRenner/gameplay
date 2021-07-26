import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';

export function Home() {
  const [category, setCategory] = useState('');

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      
      <View>
        <CategorySelect 
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        <View style={styles.content}>
          
        </View>
      </View>
    </View>
  );
};

