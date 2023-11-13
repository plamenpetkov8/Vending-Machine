import { PropTypes } from 'prop-types';
import { roundTo2Dec, insertGapInline } from '../helpers/index';
import { decrementQuantity } from '../services/vmApi';
import { connect } from 'react-redux';

const ElementsListItem = ({ element, balance, onClick, onQuantityUpdate }) => {
	const onClickModified = function (id) {
		onClick(id);
		onQuantityUpdate(id);
	}

	return (
		<div className="card .bg-primary">
			<div className="card-header">
				Price: <strong>{element.price} lv</strong>{ insertGapInline(5) }Count: <strong>{element.quantity}</strong>
			</div>
			<div className="card-body">
                <img src={element.image} alt={"Image of a " + element.name + " item"} className="img-rounded img-responsive center-block" />
			</div>
			<div className="card-footer">
				{
					element.quantity <= 0 ?
					<label className="btn-sm text-danger">Out of stock</label> :
					element.loading ?
					<button className="btn btn-primary">Buying ...</button> :
					element.price <= balance.value ?
					<button className="btn btn-primary" onClick={() => onClickModified(element.id)}>Buy</button> :
					<label className="btn-sm text-warning">Load <strong>{roundTo2Dec(element.price - balance.value)} lv</strong> more</label>
				}
			</div>
		</div>
	)
};

ElementsListItem.propTypes = {
	element: PropTypes.shape({
		id: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		image: PropTypes.string.isRequired
	}).isRequired,
	balance: PropTypes.shape({
		value: PropTypes.number.isRequired
	}),
	onClick: PropTypes.func.isRequired,
	onQuantityUpdate: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
	onQuantityUpdate: id => dispatch(decrementQuantity(id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ElementsListItem);
