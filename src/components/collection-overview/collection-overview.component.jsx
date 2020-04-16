import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForOverview } from '../../redux/shop/shop.selectors';

import './collection-overview.styles.scss';

import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionOverview = ({ collections }) => {
	return (
		<div className='collections-overview'>
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForOverview,
});

export default connect(mapStateToProps)(CollectionOverview);
