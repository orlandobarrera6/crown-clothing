import React from "react";
import { Switch, Route } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => {
	return (
		<div className='shop-page'>
			<Switch>
				<Route exact path={match.path} component={CollectionOverview} />
				<Route
					path={`${match.path}/:collectionID`}
					component={CollectionPage}
				/>
			</Switch>
		</div>
	);
};

export default ShopPage;
