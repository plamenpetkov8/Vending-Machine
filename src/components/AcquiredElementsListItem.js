import { PropTypes } from 'prop-types';

const AcquiredElementsListItem = (
	({ element }) => (
		<div className="card .bg-primary">
			<div className="card-body">
				<img src={element.image} alt="Acquired Item" className="img-rounded img-fluid center-block" />
			</div>
		</div>
	)
);

AcquiredElementsListItem.propTypes = {
	element: PropTypes.shape({
		image: PropTypes.string.isRequired
	}).isRequired
};

export default AcquiredElementsListItem;
