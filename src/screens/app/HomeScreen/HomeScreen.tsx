import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';

import {PostItem, Screen} from '@components';
import {AppTabScreenProps} from '@routes';
import {Post, postService} from '@domain';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
   const [postList, setPostList] = useState<Post[]>([]);

   function renderItem({item}: ListRenderItemInfo<Post>) {
      return <PostItem post={item} />;
   }

   useEffect(() => {
      postService.getList().then(list => setPostList(list));
      console.log(postList);
   }, []);

   return (
      <Screen style={$screen}>
         <FlatList
            data={postList}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
         />
      </Screen>
   );
}

const $screen: StyleProp<ViewStyle> = {
   paddingBottom: 0,
   paddingHorizontal: 0,
   paddingTop: 0,
};
