// create out image list components

import React from 'react';
import ImageDetail from './image_detail';

// const IMAGES = [
// 	{ title: 'Pen', link: 'https://dummyimage.com/600x400'},
// 	{ title: 'Pine Tree', link:'https://dummyimage.com/600x400'},
// 	{ title: 'Mug', link:'https://dummyimage.com/600x400'}
// ];

const ImageList = (props) => {
	const validImages = props.images.filter(image => !image.is_album);

	const RenderedImages = validImages.map(function(image){
		return <ImageDetail key={image.title} image={image} />
	});

	// // or 	const RenderedImages = IMAGES.map(image => 
	// 	<ImageDetail key={image.title} image={image} />
	// );


	return (
		<ul className="media-list list-group">
			{RenderedImages}
		</ul>
	);
};

export default ImageList;