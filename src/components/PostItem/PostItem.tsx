import React from 'react';
import {Image, Dimensions, ListRenderItemInfo} from 'react-native';
import {Box, Text} from '@components';
import {Post} from '@domain';
import {PostHeader} from './Components/PostHeader/PostHeader';
import {PostImage} from './Components/PostImage/PostImage';

interface Props {
   post: Post;
}

export function PostItem({post}: Props) {
   return (
      <Box marginBottom="s24">
         <PostHeader author={post.author} />
         <PostImage imageURL={post.imageURL} />
      </Box>
   );
}
