import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ContextAPI from './Context/ContextAPI.jsx'
createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<ContextAPI>
			<App />
		</ContextAPI>
	</BrowserRouter>
)
