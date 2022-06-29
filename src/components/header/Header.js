import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./Black & White Geometric Beauty Circle Logo 1.svg";
import logo2 from "./clarity_search-line.svg";
import logo3 from "./clarity_user-line.svg";
import logo4 from "./clarity_shopping-cart-line.svg";
import $ from "jquery";
import { useCart } from "react-use-cart";

const Header = () => {
	const {
		isEmpty,
		totalUniqueItems,
		totalItems,
		items,
		cartTotal,
		updateItemQuantity,
		removeItem,
		emptyCart,
	  } = useCart();
	return (
		<div>
			<nav className="navbar navbar-expand-lg custom_nav">
				<div className="container">
					<a className="navbar-brand mx-auto d-block d-lg-none ms-0" href="#">
						<img src={logo} />
					</a>
					<div className="d-inline me-3 d-block d-lg-none">
								<a href="" blanck="">
									<img src={logo4} />
								</a>
							</div>
					<button
						className="navbar-toggler third-button"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<div class="animated-icon3">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink className="nav-link" aria-current="page" to="/">
									Shop
								</NavLink>
							</li>
							<li class="nav-item">
								<NavLink className="nav-link" to="products">
									Products
								</NavLink>
							</li>
							<li class="nav-item">
								<NavLink className="nav-link" to="fertilizer">
									Fertilizer
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="guide">
									Guide
								</NavLink>
							</li>
						</ul>
						<a className="navbar-brand mx-auto d-none d-lg-block" href="#">
							<img src={logo} />
						</a>
						<ul className="ms-auto">
							<li className="d-inline me-3 d-none d-lg-inline-block">
								<a href="" blanck="">
									<img src={logo2} />
								</a>
							</li>
							<li className="d-inline me-3 d-none d-lg-inline-block">
								<a href="" blanck="">
									<img src={logo3} />
								</a>
							</li>
							<li className="d-inline nav-item me-3 d-none d-lg-inline-block">
								<NavLink className="nav-link" to="cart" blanck="">
									<img src={logo4} />${cartTotal}({totalItems})
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
$(document).ready(function () {
	$(".third-button").on("click", function () {
		$(".animated-icon3").toggleClass("open");
	});
});
