import { PropTypes } from 'prop-types';
import AcquiredElementsListItem from '../components/AcquiredElementsListItem';
import { connect } from 'react-redux';
import map from 'lodash/map';

const AcquiredElementsList = (
	({ elements }) => (
		<section className="row">
			{map(elements, (element, index) => (
				<div key={index} className="col-4 col-md-6 col-lg-6 col-xl-4 text-center item-gapped">
					<AcquiredElementsListItem element={element} />
				</div>
			))}
		</section>
	)
);

AcquiredElementsList.propTypes = {
	elements: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired
	}).isRequired)
};

const mapStateToProps = state => ({
	elements: state.acquiredItems.map(id => state.items.data[id])
});

const mapDispatchToProps = () => ({
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AcquiredElementsList);
