import { BASE_URL, API } from '../constants/app';

export const generateVideoUrl = (searchQuery, videoType, perPage, pageToken, channelId) => {
    pageToken = pageToken || '';
    const channelQuery = channelId ? `channelId=${channelId}` : null;

    return `${BASE_URL}search?part=snippet&` +
        `maxResults=${perPage}&` +
        'type=video&' +
        `videoType=${videoType}&` +
        `key=${API}&` +
        `pageToken=${pageToken}&` +
        `${channelQuery}&` +
        `q=${searchQuery}`;

};
