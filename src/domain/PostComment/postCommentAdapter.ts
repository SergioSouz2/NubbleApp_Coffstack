/**
 * @description Adapta o PostAPI para o modelo de post
 */

import { PostComment, PostCommentAPI } from "./postCommentTypes";





function toPostComment (postCommentAPI: PostCommentAPI): PostComment {
   return {
      id: postCommentAPI.id,
      message: postCommentAPI.message,
      createdAt: postCommentAPI.created_at,
      author: {
         id: postCommentAPI.user.id,
         name: postCommentAPI.user.full_name,
         userName: postCommentAPI.user.username,
         profileURL: postCommentAPI.user.profile_url,
      },
   }
}

export const postCommentAdapter ={
   toPostComment,
}