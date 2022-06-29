import React,{useEffect} from "react";
import image13 from "../pages/assets/image 13.svg";
import Aos from 'aos';
const FreeShipping = () => {
	Aos.init();

		// useEffect(() => {
		// 	Aos.init({ duration: 4000 });
		// }, []);
	return (
		<>
			<section className="free_shipping_section" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
				<div>
					<div className="container free_shipping_container">
						<div className="row">
							<div className="col-lg-12">
								<img className="img-fluid free_img" src={image13} />
								<div className="free_shipping_content" data-aos={"fade-down"}  data-aos-duration="3000">
									<h3>Free Shipping Services</h3>
									<p className="free_p_text">*only for the same region</p>
									<div className="free_bottom_text">
										<a className="free_scontact" href="" blanck=""><span>+62 1189-2719-00</span></a>
										<a className="free_semail" href="" blanck=""><span >order@platify.co</span></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default FreeShipping;
