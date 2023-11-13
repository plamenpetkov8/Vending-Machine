import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { roundTo2Dec } from '../helpers/index'

const WalletPanel = (
	({ capital }) => (
        <section className="card .bg-primary item-gapped">
			<div className="card-header">
				Wallet
			</div>
			<div className="card-body text-center">
				{ `${roundTo2Dec(capital.value)} lv` }
			</div>
		</section>
	)
);

WalletPanel.propTypes = {
	capital: PropTypes.shape({
		value: PropTypes.number.isRequired
	})
};

const mapStateToProps = state => ({
	capital: state.wallet
});

const mapDispatchToProps = () => ({});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(WalletPanel);
