import Immutable from 'immutable';

import Videos from './videos';

const Page = Immutable.Record({
    isFetching: true,
    isLoading: false,
    totalCount: null,
    nextPageToken: '',
    activeVideoId: '',
    items: new Videos(),
    error: null,
});

export default Page;
