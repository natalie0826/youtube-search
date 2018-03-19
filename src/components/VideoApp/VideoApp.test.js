import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { shallow } from 'enzyme';

import { configureStore } from '../configureStore';
import VideoApp from './VideoApp';
import Loading from './Loading';

describe('VideoApp stateful component', () => {
    const videoProps = {
        isFetching: true,
        video: {
            'kind': 'youtube#searchResult',
            'etag': '\'RmznBCICv9YtgWaaa_nWDIH1_GM/sCMvxYeCLrAk98CyeVbbHF2JWPY\'',
            'id': {
                'kind': 'youtube#video',
                'videoId': 'CY8E6N5Nzec'
            },
            'snippet': {
                'publishedAt': '2018-02-09T04:41:39.000Z',
                'channelId': 'UCEdvpU2pFRCVqU6yIPyTpMQ',
                'title': 'Marshmello & Anne-Marie - FRIENDS (Lyric Video) *OFFICIAL FRIENDZONE ANTHEM*',
                'description': 'Download FRIENDS by Marshmello & Anne-Marie HERE ▷ http://au.gt/friends Watch Cooking with Marshmello HERE ▷ http://youtube.com/playlist?list=PLcYK4PlHbZQtXROf5fnrr4dO4ruWiv7ts Get your...',
                'thumbnails': {
                    'default': {
                        'url': 'https://i.ytimg.com/vi/CY8E6N5Nzec/default.jpg',
                        'width': 120,
                        'height': 90
                    },
                    'medium': {
                        'url': 'https://i.ytimg.com/vi/CY8E6N5Nzec/mqdefault.jpg',
                        'width': 320,
                        'height': 180
                    },
                    'high': {
                        'url': 'https://i.ytimg.com/vi/CY8E6N5Nzec/hqdefault.jpg',
                        'width': 480,
                        'height': 360
                    }
                },
                'channelTitle': 'Marshmello',
                'liveBroadcastContent': 'none'
            }
        },
        videos: [
            {
                'kind': 'youtube#searchResult',
                'etag': '\'RmznBCICv9YtgWaaa_nWDIH1_GM/sCMvxYeCLrAk98CyeVbbHF2JWPY\'',
                'id': {
                    'kind': 'youtube#video',
                    'videoId': 'CY8E6N5Nzec'
                },
                'snippet': {
                    'publishedAt': '2018-02-09T04:41:39.000Z',
                    'channelId': 'UCEdvpU2pFRCVqU6yIPyTpMQ',
                    'title': 'Marshmello & Anne-Marie - FRIENDS (Lyric Video) *OFFICIAL FRIENDZONE ANTHEM*',
                    'description': 'Download FRIENDS by Marshmello & Anne-Marie HERE ▷ http://au.gt/friends Watch Cooking with Marshmello HERE ▷ http://youtube.com/playlist?list=PLcYK4PlHbZQtXROf5fnrr4dO4ruWiv7ts Get your...',
                    'thumbnails': {
                        'default': {
                            'url': 'https://i.ytimg.com/vi/CY8E6N5Nzec/default.jpg',
                            'width': 120,
                            'height': 90
                        },
                        'medium': {
                            'url': 'https://i.ytimg.com/vi/CY8E6N5Nzec/mqdefault.jpg',
                            'width': 320,
                            'height': 180
                        },
                        'high': {
                            'url': 'https://i.ytimg.com/vi/CY8E6N5Nzec/hqdefault.jpg',
                            'width': 480,
                            'height': 360
                        }
                    },
                    'channelTitle': 'Marshmello',
                    'liveBroadcastContent': 'none'
                }
            },
            {
                'kind': 'youtube#searchResult',
                'etag': '\'RmznBCICv9YtgWaaa_nWDIH1_GM/HSKDFkwbVuEgNHxkHX5mHYrnwJU\'',
                'id': {
                    'kind': 'youtube#video',
                    'videoId': '6ZfuNTqbHE8'
                },
                'snippet': {
                    'publishedAt': '2017-11-29T13:26:24.000Z',
                    'channelId': 'UCvC4D8onUfXzvjTOM-dBfEA',
                    'title': `Marvel Studios' Avengers: Infinity War Official Trailer`,
                    'description': '\'There was an idea…\' Avengers: Infinity War. In theaters May 4. ▻ Subscribe to Marvel: http://bit.ly/WeO3YJ Follow Marvel on Twitter:   https://twitter.com/marvel Like Marvel on FaceBook:...',
                    'thumbnails': {
                        'default': {
                            'url': 'https://i.ytimg.com/vi/6ZfuNTqbHE8/default.jpg',
                            'width': 120,
                            'height': 90
                        },
                        'medium': {
                            'url': 'https://i.ytimg.com/vi/6ZfuNTqbHE8/mqdefault.jpg',
                            'width': 320,
                            'height': 180
                        },
                        'high': {
                            'url': 'https://i.ytimg.com/vi/6ZfuNTqbHE8/hqdefault.jpg',
                            'width': 480,
                            'height': 360
                        }
                    },
                    'channelTitle': 'Marvel Entertainment',
                    'liveBroadcastContent': 'none'
                }
            }],
        videoTypes: ['one', 'two', 'three'],
        fetchVideos: jest.fn(),
        setActiveVideo: jest.fn()
    };

    const component = shallow(<VideoApp {...videoProps} store={configureStore} />);

    it('renders VideoApp component', () => {
        expect(component.length).toBe(1);
    });


});