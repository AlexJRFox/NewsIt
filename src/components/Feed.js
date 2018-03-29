import React from 'react';
import PropTypes from 'prop-types';
import Group from './Group';
import categories from '../constants/categories';

class Feed extends React.Component {
	constructor(props) {
    	super(props);
 	}
	componentDidMount() {
		categories.forEach((category) => {
			this.props.getNews(category);
		}, this);
	};

	render() {
		const groups = categories.map((category, i) => {
			return <Group
				category={category}
				data={this.props.news.news[category]}
				key={i}
			/>;
		});
		return (
			<section className="feed">
				{groups}
			</section>
    	);
  	}
}

Feed.propTypes = {
	getNews: PropTypes.func
};

export default Feed;
