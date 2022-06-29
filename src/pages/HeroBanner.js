import React,{useEffect} from "react";
import group13 from "../pages/assets/Group 13.svg";
import pattern from "../pages/assets/pattern.svg";
import Aos from "aos";


const HeroBanner = () => {
    Aos.init();
    // Aos.init({
	// 	disable: function() {
	// 	  var maxWidth = 800;
	// 	  return window.innerWidth < maxWidth;
	// 	}
	//   });
    Aos.refresh();
    // useEffect(() => {
	// 	Aos.init({ duration: 10000 });
	// }, []);
	return (
		<>
			<section className="hero_section">
				<div>
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="hero_left_content">
                                    <h1 className="hero_maintext" data-aos="{fade-up}">Happiness blooms from within</h1>
                                    <p className="hero_para" data-aos={"fade-up"}  data-aos-duration="1000">Our environment, the world in which we live and work, is a mirror of our attitudes and expectations.</p>
                                <div className="hero_btn" data-aos={"fade-up"}  data-aos-duration="4000">
                                    <button className="btn"> Shop now</button>
                                    <span><a className="hero_link" data-bs-toggle="modal"
				data-bs-target="#exampleModal" href="" blanck="">Explore plants</a></span>
                                    </div>
                                </div>
							</div>
                            <div className="col-lg-6" data-aos={"fade-up-right"}  data-aos-duration="3000">
                                <div className="hero_banner_img">
                                    <img className="top_img img-fluid" src={group13} />
                                    <div className="hero_pattern">
                                    <img className="img-fluid" src={pattern}  />

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

export default HeroBanner;
