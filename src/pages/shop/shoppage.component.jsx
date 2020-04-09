import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const ShopPage = ({ collections }) => {
	return (
		<div className='shop-page'>
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

// This is the easy way of mapping the global state to props

// const mapStateToProps = (state) => ({
// 	collections: state.shop.collections,
// });

// However we will use selectors for the collections

const mapStateToProps = createStructuredSelector({
	collections: selectShopCollections,
});

export default connect(mapStateToProps)(ShopPage);
