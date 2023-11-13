import React from 'react';
import { ElementsList, OperationPanel } from './components'

const App = () => {
  return (
    <section className="container">
		<div className="page-header text-center">
			<h1>Vending Machine</h1>
		</div>
		<div className='row'>
			<div className="col-xs-7 col-sm-9">
				<ElementsList />
			</div>
			<div className="col-xs-5 col-sm-3">
				<OperationPanel />
			</div>
		</div>
	</section>
  );
}

export default App;
