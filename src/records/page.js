import { Record } from 'immutable';

const Page = Record({
    isFetching: null,
    isLoading: null,
    totalCount: null,
    nextPageToken: null,
    activeVideoId: null,
    items: null,
    error: null,
});

export default Page;
