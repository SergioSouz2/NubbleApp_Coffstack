import React from 'react';
import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';
import {Post} from '@domain';

type Props = Pick<Post, 'commentCount' | 'reactionCount' | 'favoriteCount'>;

export function PostActions({
   commentCount,
   favoriteCount,
   reactionCount,
}: Props) {
   function likePost() {
      //TODO: Implementa like post
      return null;
   }

   function navigateToComments() {
      //TODO: Implementa navegacao
      return null;
   }

   function favoritePost() {
      //TODO: Implementa favoritePost
      return null;
   }

   return (
      <Box flexDirection="row" marginTop="s16">
         <Item
            marked={true}
            onPress={likePost}
            text={reactionCount}
            icon={{default: 'heart', marked: 'heartFill'}}
         />
         <Item
            marked={false}
            onPress={likePost}
            text={commentCount}
            icon={{default: 'comment', marked: 'comment'}}
         />
         <Item
            marked={false}
            onPress={likePost}
            text={favoriteCount}
            icon={{default: 'bookmark', marked: 'bookmarkFill'}}
         />
      </Box>
   );
}

interface ItemProps {
   onPress: () => void;
   marked: boolean;
   icon: {
      default: IconProps['name'];
      marked: IconProps['name'];
   };
   text: number;
}

function Item({onPress, marked, icon, text}: ItemProps) {
   return (
      <TouchableOpacityBox
         flexDirection="row"
         alignItems="center"
         marginRight="s24"
         onPress={onPress}>
         <Icon
            color={marked ? 'market' : undefined}
            name={marked ? icon.marked : icon.default}
         />

         {text > 0 && (
            <Text marginLeft="s4" bold preset="paragraphSmall">
               {text}
            </Text>
         )}
      </TouchableOpacityBox>
   );
}
