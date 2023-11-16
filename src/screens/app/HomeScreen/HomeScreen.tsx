import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';

import {PostItem, Screen} from '@components';
import {AppTabScreenProps} from '@routes';
import {Post, usePostList} from '@domain';

import {HomeHeader} from './components/HomeHeader';
import {HomeEmpty} from './components/HomeEmpty';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
   const {postList, error, loading, refetch} = usePostList();

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
               <HomeEmpty refetch={refetch} error={error} loading={loading} />
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
