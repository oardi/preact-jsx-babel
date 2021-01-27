import { h } from 'preact';
import { ButtonCounter } from './components/ButtonCounter';
import './style.scss';

export const App = () => {
	return (
		<div className="app">
			<h1>Preact Jsx Babel</h1>
			<ButtonCounter name="Some Title" />
		</div>
	);
}
