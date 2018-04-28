import App from './App.html';
import './assets/styles/main.css';

var app = new App({
	target: document.body,
	data: {
		name: 'World'
	}
});

export default app;