import React from 'react';
import BalancePanel from './BalancePanel';
import MoneyPanel from './MoneyPanel';
import WalletPanel from './WalletPanel';
import AcquiredElementsList from './AcquiredElementsList';

const OperationPanel = (
	() => (
		<section className="sidebar">
			<BalancePanel />
            <WalletPanel />
			<MoneyPanel denomination={[0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50]} />
			<AcquiredElementsList />
		</section>
	)
);

export default OperationPanel;
