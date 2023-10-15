import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';

import {PostItem, Screen} from '@components';
import {AppTabScreenProps} from '@routes';
import {Post, postService} from '@domain';

import {HomeHeader} from './components/HomeHeader';
import {HomeEmpty} from './components/HomeEmpty';
import {err} from 'react-native-svg/lib/typescript/xml';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
   const [postList, setPostList] = useState<Post[]>([]);
   const [error, setError] = useState<boolean | null>(null);
   const [loading, setLoading] = useState(true);

   async function fetchData() {
      try {
         setError(null);
         setLoading(true);
         postService.getList().then(list => setPostList(list));

         const list = await postService.getList();
         setPostList(list);
      } catch (err) {
         console.log('ERROR: ', err);
         setError(true);
      } finally {
         setLoading(false);
      }
   }

   useEffect(() => {
      fetchData();
   }, []);

   function renderItem({item}: ListRenderItemInfo<Post>) {
      return <PostItem post={item} />;
   }

   return (
      <Screen style={$screen}>
         <FlatList
            data={postList}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            contentContainerStyle={{
               flex: postList.length === 0 ? 1 : undefined,
            }}
            ListHeaderComponent={<HomeHeader />}
            ListEmptyComponent={
               <HomeEmpty refetch={fetchData} error={error} loading={loading} />
            }
         />
      </Screen>
   );
}

const $screen: StyleProp<ViewStyle> = {
   paddingBottom: 0,
   paddingHorizontal: 0,
   paddingTop: 0,
   flex: 1,
};
