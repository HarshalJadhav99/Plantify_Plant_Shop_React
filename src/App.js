import React, { useEffect } from "react";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Products from "./pages/Products";
import Guide from "./pages/Guide";
import Fertilizer from "./pages/Fertilizer";
import HeroBanner from "./pages/HeroBanner";
import FreeShipping from "./pages/FreeShipping";
import Map from "./pages/Map";
import Search from "./pages/Search";
import PlantStands from "./pages/PlantStands";
import Featured from "./pages/Featured";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { CartProvider } from "react-use-cart";
import Modal from "./pages/Modal";
import AllFeatured from "./pages/AllFeatured";

function App() {
	useEffect(() => {
		Aos.init({ duration: 2000 });
		Aos.refresh();
	}, []);
	return (
		<div className="App">
			<CartProvider>
				<Header />
				<Routes>
					<Route exact path="/" element={<Home />} />

					<Route exact path="/cart" element={<Cart />} />
					<Route path='/featured' element={<AllFeatured/>}/>
				</Routes>
				<Modal/>
			</CartProvider>
			
		</div>
	);
}

export default App;
