import { useState } from "react";
import { ContextProvider } from "./Context";

const ContextAPI = ({ children }) => {
	const [isAuth, setIsAuth] = useState(false);
	const [token, setToken] = useState(null);
	return (
		<ContextProvider.Provider value={{}}>
			{children}
		</ContextProvider.Provider>
	)
}

export default ContextAPI;