import React from "react";
import { connect } from "react-redux";

// import {Switch, Route} from 'react-router-dom'

import "./collection.styles.scss";
import { selectShopCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ match, collection }) => {
	console.log(match);

	// const { collectionID } = match.params;

	console.log(collection);

	return (
		<div className='collection-page'>
			<h2> {match.params.collectionID} </h2>
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
