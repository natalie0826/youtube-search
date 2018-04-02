import { Record } from 'immutable';

const Search = Record({
    searchQuery: null,
    channelId: null,
    activeType: null,
    perPage: null
});

export default Search;
