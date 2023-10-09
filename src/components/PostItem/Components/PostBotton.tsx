import {Box, Text} from '@components';
import {Post} from '@domain';
import React from 'react';

type Props = Pick<Post, 'author' | 'text' | 'commentCount'>;

export function PostBotton({author, commentCount, text}: Props) {
   const commentText = getCommentText(commentCount);
   return (
      <Box marginTop="s16">
         <Text preset="paragraphMedium" bold>
            {author.userName}
         </Text>
         <Text preset="paragraphMedium" color="gray1">
            {text}
         </Text>

         <Text marginTop="s8" preset="paragraphSmall" bold color="primary">
            {commentText}
         </Text>
      </Box>
   );
}

function getCommentText(commentCount: number): string | null {
   if (commentCount === 0) {
      return null;
   } else if (commentCount === 1) {
      return 'Ver comentário';
   } else {
      return `ver ${commentCount} comentários`;
   }
}
