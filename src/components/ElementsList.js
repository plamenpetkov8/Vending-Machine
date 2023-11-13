import { PropTypes } from 'prop-types'
import ElementsListItem from './ElementListItem';
import { connect } from 'react-redux';
import map from 'lodash/map';
import { buyItem } from '../services/vmApi';

const ElementsList = (
	({ elements, balance, onElementClick }) => (
		<section className="row">
			{
				elements.loading ?
				'Loading items...' :
				map(elements.data, element => (
					<div key={element.id} className="col-xs-12 col-md-6 col-lg-4 text-center item-gapped">
						<ElementsListItem element={element} balance={balance} onClick={onElementClick} />
					</div>
				))
			}
		</section>
	)
);

ElementsList.propTypes = {
	elements: PropTypes.shape({
		loading: PropTypes.bool.isRequired,
		data: PropTypes.object.isRequired
	}).isRequired,
	balance: PropTypes.object.isRequired,
	onElementClick: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	elements: state.items,
	balance: state.balance
});

const mapDispatchToProps = dispatch => ({
	onElementClick: id => dispatch(buyItem(id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ElementsList);
