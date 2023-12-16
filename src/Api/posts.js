import { postApi, ENDPOINT, pathApi, putApi } from './api';

const { RECIPIENTS, MESSAGES, REACTIONS } = ENDPOINT;

/** 롤링페이퍼 만들기 */
export const createRecipient = async (data) => postApi(data, RECIPIENTS);

/** 대상에게 메세지 보내기 */
export const createMessage = async (id, data) => postApi(data, `${RECIPIENTS}${id}/${MESSAGES}`);

/** 대상에게 리액션 보내기 */
export const createReaction = async (id, data) => postApi(data, `${RECIPIENTS}${id}/${REACTIONS}`);

/** 메세지 업데이트 하기 (편집하기 기능) */
export const updateMessage = async (messageId, data) => putApi(data, `${MESSAGES}${messageId}/`);

/** 메세지 부분 업데이트 하기 (편집하기 기능)  */
export const updateMessagePartial = async (messageId, data) => pathApi(data, `${MESSAGES}${messageId}/`);
