import React,{useEffect} from "react";
import group33 from "../pages/assets/Group 33.svg";
import Aos from 'aos';


const Map = () => {
	Aos.init();

	// useEffect(() => {
	// 	Aos.init({ duration: 4000 });
	// }, []);
	return (
		<>
			<section className="plant_map_section" data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
				<div>
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
							<div className="point_map">
								<img className="img-fluid map_img" src={group33} />
								</div>
								<div className="map_info_box d-none d-lg-block">
                                <button className="btn d-flex">GET DIRECTIONS</button>
									<h6 className="info_head">Visit us</h6>
									<div className="info_body">
										<p>
											<span className="d-block">Gekikara Street 16, Atalanta</span><span className="d-block"> 1327 Block M</span> <span className="d-block">Mardial, Sigure</span>
											T2G 0T2
										</p>
									</div>
                                    <h6 className="info_body_bottom"><span className="text-decoration-underline">Open day </span>: 11am–5:30pm everyday</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Map;
