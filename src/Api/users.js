import { getApi, ENDPOINT } from './Api';

const { RECIPIENTS, MESSAGES, REACTIONS, PROFILE_IMAGE, BACKGROUND_IMAGE } = ENDPOINT;

/** 롤링페이퍼 리스트 가져오기 */
export const getRecipientList = async (sort) => getApi(RECIPIENTS, sort);

/** 롤링페이퍼 대상 정보 가져오기 */
export const getRecipient = async (id) => getApi(`${RECIPIENTS}${id}/`);

/** 롤링페이퍼 대상이 받은 메세지들만 가져오기 */
export const getRecipientMessages = async (id) => getApi(`${RECIPIENTS}${id}/${MESSAGES}`);

/** 특정 메세지만 가져오기 */
export const getMessage = async (messageId) => getApi(`${MESSAGES}${messageId}/`);

/** 롤링페이퍼 대상이 받은 리액션들 가져오기 */
export const getReactions = async (id) => getApi(`${RECIPIENTS}${id}/${REACTIONS}`);

/** 서버에 저장된 기본 프로필 이미지들 가져오기 */
export const getProfileImage = async () => getApi(PROFILE_IMAGE);

/** 서버에 저장된 기본 배경이미지들 가져오기 */
export const getBackgroundImage = async () => getApi(BACKGROUND_IMAGE);
