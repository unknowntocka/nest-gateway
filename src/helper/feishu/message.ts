import { methodV } from '@/utils/request';

export enum RECEIVE_TYPE {
  open_id = 'open_id',
  user_id = 'user_id',
  union_id = 'union_id',
  email = 'email',
  chat_id = 'chat_id',
}

export enum MSG_TYPE {
  text = 'text',
  post = 'post',
  image = 'image',
  file = 'file',
  audio = 'audio',
  media = 'media',
  sticker = 'sticker',
  interactive = 'interactive',
  share_chat = 'share_chat',
  share_user = 'share_user',
}

export type MESSAGES_PARAMS = {
  receive_id: string;
  content: string;
  msg_type: MSG_TYPE;
};

export const messages = async (
  receive_id_type: RECEIVE_TYPE,
  params: MESSAGES_PARAMS,
  app_token: string,
) => {
  const data = await methodV({
    url: `/im/v1/messages`,
    method: 'POST',
    query: { receive_id_type },
    params,
    headers: {
      Authorization: `Bearer ${app_token}`,
    },
  });
  return data;
};
