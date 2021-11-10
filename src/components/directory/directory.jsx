import React from 'react';
import "./directory.scss";
import MenuItem from '../menu-item/menu-item.jsx';

import { useSelector } from 'react-redux';


const Directory = props => {

	const directorySelector = useSelector( state => state.directory.categoriesArray );

	return (

		<div className="directory-menu">

			{
				directorySelector.map( ({ title, imageUrl, id, size, linkUrl }) => {

					// We could use something like "singleCategory" to refer to the each object
					// in our state (all of the containing the properties title, imageUrl etc.);

					// But we can also destructure the singleCategory object and use its property
					// straight here in the map function, without tiping everytime singleCategory.title,
					// singleCategory.imageUrl etc.

					return <MenuItem
						key = { id }
						title = { title }
						imageUrl = { imageUrl }
						size = { size }
						linkUrl = { linkUrl } />
				} )
			}

		</div>
	)

}


export default Directory;