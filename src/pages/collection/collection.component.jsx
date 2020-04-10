import React from "react";
import { connect } from "react-redux";

// import {Switch, Route} from 'react-router-dom'

import "./collection.styles.scss";
import { selectShopCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ match, collection }) => {
	const { title, items } = collection;

	return (
		<div className='collection-page'>
			<h2 className='title'>{title}</h2>
			<div className='items'>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	const { collectionID } = ownProps.match.params;
	return {
		collection: selectShopCollection(collectionID)(state),
	};
};

export default connect(mapStateToProps)(CollectionPage);
