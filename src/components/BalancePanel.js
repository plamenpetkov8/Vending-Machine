import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { roundTo2Dec } from '../helpers/index'
import { ejectBalance } from '../services/vmApi'

const BalancePanel = (
	({ balance, onClick }) => (
        <section className="card .bg-primary item-gapped">
			<div className="card-header container-fluid">
				<div className="row">
                    <div style={{margin:"auto"}} className="col-10 col-sm-12 col-md-12 col-lg-7 col-xl-8 col-xxl-9">
                        <h4 style={{fontSize:"16px", margin:"auto"}}>Current balance</h4>
                    </div>
                    <div className="col-2 col-sm-12 col-md-12 col-lg-5 col-xl-4 col-xxl-3 float-right">
                        <button style={{border:"0px"}} className="btn btn-danger" onClick={() => onClick()}>Eject</button>
                    </div>
                </div>
			</div>
			<div className="card-body text-center">
				{ `${roundTo2Dec(balance.value)} lv` }
			</div>
		</section>
	)
);

BalancePanel.propTypes = {
	balance: PropTypes.shape({
		value: PropTypes.number.isRequired
	}),
    onClick: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	balance: state.balance
});

const mapDispatchToProps = dispatch => ({
	onClick: () => dispatch(ejectBalance())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BalancePanel);
