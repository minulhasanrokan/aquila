/**
 * WordPress Dependencies.
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { blockColumns } from './templates';

const INNER_BLOCKS_TEMPLATE = [
	[
		'core/group',
		{ className: 'aquila-dos-and-donts__group', backgroundColor: '#000' },
		blockColumns,
	],
];

const ALLOWED_BLOCKS = [ 'core/group' ];

const Edit = () => {

	return (
		<div className="aquila-dos-and-donts">
			<InnerBlocks
				template={ INNER_BLOCKS_TEMPLATE }
				allowedBlocks={ ALLOWED_BLOCKS }
				templateLock={ true }
			/>
		</div>
	);
};

export default Edit;