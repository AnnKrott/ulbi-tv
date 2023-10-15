import React from "react";

import { BrowserRouter } from "react-router-dom";
import MyNavbar from "./components/UI/Navbar/MyNavbar";
import AppRouter from "./components/AppRouter";


const App = () => {
	return (
		<BrowserRouter>
			<MyNavbar />
			<AppRouter />
		</BrowserRouter>
	)
};

export default App;
