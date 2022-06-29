import React, { useEffect } from "react";
import Aos from "aos";
import { useCart } from "react-use-cart";
const Featured = (props) => {
	// useEffect(() => {
	// 	Aos.init({ duration: 4000 });
	// }, []);
	Aos.init();
	const { addItem } = useCart();
	return (
		<>
			<div className="col-lg-12 card_space">
				<div>
					<div className="fe_card_img">
						<img className="img-fluid" src={props.img} />
					</div>
					<div>
						<div className="fe_card_title d-flex justify-content-between">
							<span>{props.title}</span>
							<span>${props.price}</span>
						</div>
						<div className="d-flex justify-content-between">
							<div className="fe_card_select_color">
								<span className="fe_card_select_color_text">Pot color</span>
								<div className="d-flex">
									<div className="color_circle_1"></div>
									<div className="color_circle_2"></div>
									<div className="color_circle_3"></div>
									<div className="color_circle_4"></div>
								</div>
							</div>
							<div className="fe_card_buy_btn">
								<button className="btn" onClick={() => addItem(props.item)}>
									Buy
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Featured;
