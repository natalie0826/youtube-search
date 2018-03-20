import React from 'react';
import PropTypes from 'prop-types';

export const withInfiniteScroll = (Component) =>
    class WithInfniniteScroll extends React.Component {
        static propTypes = {
            onPaginatedSearch: PropTypes.func.isRequired,
            list: PropTypes.arrayOf(PropTypes.object).isRequired,
            isLoading: PropTypes.bool.isRequired
        };

        componentDidMount() {
            window.addEventListener('scroll', this.onScroll, false);
        }

        componentWillUnmount() {
            window.removeEventListener('scroll', this.onScroll, false);
        }

        onScroll = () => {
            if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 100) && this.props.list.length && !this.props.isLoading) {
                this.props.onPaginatedSearch();
            }
        }

        render() {
            return <Component {...this.props} />;
        }
    };
