import Immutable from 'immutable';

import { VIDEO_TYPES, PER_PAGE_VALUES } from '../constants/app';

const Search = Immutable.Record({
    searchQuery: '',
    activeType: VIDEO_TYPES[0],
    perPage: PER_PAGE_VALUES[0]
});

export default Search;
