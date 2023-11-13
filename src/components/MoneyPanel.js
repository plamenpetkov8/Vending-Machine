import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { incrementBalance } from '../services/vmApi';

const MoneyPanel = (
	({ denomination, onUnitClick }) => (
		<section className="card .bg-primary item-gapped">
			<div className="card-header">
				Insert money
			</div>
			<div className="card-body">
				<section className="row center-block">
					{denomination.map(unit => (
						<div key={unit} className="col-4 col-sm-12 col-md-12 col-lg-6 col-xl-4 text-center item-gapped">
							<button className="btn btn-primary col-12" onClick={() => onUnitClick(unit)}>{unit} lv</button>
						</div>
					))}
				</section>
			</div>
		</section>
	)
);

MoneyPanel.propTypes = {
	denomination: PropTypes.arrayOf(PropTypes.number).isRequired,
	onUnitClick: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
	onUnitClick: amount =>  dispatch(incrementBalance(amount))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MoneyPanel);
