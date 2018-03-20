import { BASE_URL, API } from '../constants/app';

export const generateUrl = (searchQuery, videoType, perPage, pageToken) => {
    pageToken = pageToken || '';

    return `${BASE_URL}?part=snippet&` +
    `maxResults=${perPage}&` +
    'type=video&' +
    `videoType=${videoType}&` +
    `key=${API}&` +
    `pageToken=${pageToken}&` +
    `q=${searchQuery}`;
};
