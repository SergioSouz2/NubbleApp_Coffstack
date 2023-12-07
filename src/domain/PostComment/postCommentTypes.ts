export interface PostComment {
   id: number,                                 
   message: string,   
   createdAt: string, 
   author:{
      id: number,
      profileURL:string,
      name: string,
      userName: string,
   };
}

export interface PostCommentAPI {
   id: number,                                   //114,
   message: string,                              // "Defessus demens dolores stipes appono valeo.",
   user_id: number,                              // 3,
   post_id: number,                              // 1,
   created_at: string,                           //"2023-12-06T16:45:03.000-03:00",
   updated_at: string,                           //"2023-12-07T04:00:25.586-03:00",
   user: {
      id: number,                                // 3,
      first_name: string,                        // "Ana",
      last_name: string,                         //"Oliveira",
      username: string,                          //"aninha23",
      email: string,                             //"oliveiraana23@coffstack.com",
      profile_url: string,                       //"https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/7-ana.png",
      is_online:boolean,                         // false,
      full_name: string,                         //"Ana Oliveira"
   };
   meta:{}
}