import '../style/global.css';
import { Provider } from 'mobx-react';
import store from '../store/rootStore';

export default function App({ Component, pageProps }) {
	console.log(store);

	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}
