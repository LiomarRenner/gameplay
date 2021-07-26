import React from 'react';
import { ScrollView } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { categories } from '../../utils/categories';
import { Category } from '../Category';

type CategorySelectedProps = {
  categorySelected: string;
  setCategory: (categoryId: string) => void; 
}

export function CategorySelect({ categorySelected, setCategory }: CategorySelectedProps) {
  return(
    <ScrollView
      horizontal 
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight:40 }}
    >
      {
        categories.map(category => (
          //call Category component
          <Category 
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === categorySelected}
            onPress={() => setCategory(category.id)}
          />
        ))
      }
    </ScrollView>
  );
}