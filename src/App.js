import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import MyNavbar from "./components/UI/Navbar/MyNavbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";


const App = () => {
	const [isAuth, setIsAuth] = useState(false);
	//while authorization is in process, router doesn't work, we show Loader
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (localStorage.getItem('auth')) {
			setIsAuth(true);
		}
		setIsLoading(false);
	}, [])

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
			<BrowserRouter>
				<MyNavbar />
				<AppRouter />
			</BrowserRouter>
		</AuthContext.Provider>
	)
};

export default App;
