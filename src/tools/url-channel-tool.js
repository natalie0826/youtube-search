import { BASE_URL, API } from '../constants/app';

export const generateChannelUrl = (channelId) => {
    return `${BASE_URL}channels?id=${channelId}&part=snippet&key=${API}`;
};
