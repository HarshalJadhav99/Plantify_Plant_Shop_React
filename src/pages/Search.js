import React,{useEffect} from "react";
import group35 from "../pages/assets/Group 35.svg";
import search from '../pages/assets/clarity_search-line.svg';
import image14 from "../pages/assets/image 14.svg";
import image15 from "../pages/assets/image 15.svg";
import image16 from "../pages/assets/image 16.svg";
import image17 from "../pages/assets/image 17.svg";
import Aos from 'aos'



const Search = () => {
	Aos.init();
	// useEffect(() => {
	// 	Aos.init({ duration: 4000 });
	// }, []);
	return (
		<>
			<section className="search_space">
				<section className="search_section" data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
					<div>
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<form className="row">
										<div className="col-auto search_lbtn">
											<button className="btn p-0">
												<img src={group35} />
											</button>
										</div>
										<div className="col-auto col-md-8 col-lg-10 px-0 search_input">
											<input
												type="search"
												class="form-control "
												placeholder="Search flowers..."
											/>
										</div>
										<div className="col-auto search_rbtn">
											<button className="btn p-1">
												<img src={search} />
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="colorful_new_section">
					<div>
						<div className="container">
							<div className="row">
								<div className="col-8 col-lg-6 color_space" data-aos={"fade-up-right"}>
									<div>
										<h3 className="arrivals_head">Colorful New Arrivals</h3>
									</div>
								</div>
								<div className="col-4 col-lg-6" data-aos={"fade-right"}>
									<div>
										<h3 className="arrivals_head_right">
											<a href="" blanck="">
												{" "}
												view all
											</a>
										</h3>
									</div>
								</div>
								<div className="col-md-6 col-lg-3 card_img_overlay" data-aos={"fade-down"}>
									<div>
										<img className="img-fluid bottom_img_overlay" src={image14} />
									</div>
									<div class="overlay">
										<div class="text">
											<span className="text_hover">Blue Lily</span>
											<span className="text_hover_a">
												<a href="" blanck="">
													more information
												</a>
											</span>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-lg-3 card_img_overlay" data-aos={"fade-up"}>
									<div>
										<img className="img-fluid bottom_img_overlay" src={image15} />
									</div>
									<div class="overlay">
										<div class="text">
											<span className="text_hover">Blue Lily</span>
											<span className="text_hover_a">
												<a href="" blanck="">
													more information
												</a>
											</span>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-lg-3 card_img_overlay" data-aos={"fade-down"}>
									<div>
										<img className="img-fluid bottom_img_overlay" src={image16} />
									</div>
									<div class="overlay">
										<div class="text">
											<span className="text_hover">Blue Lily</span>
											<span className="text_hover_a">
												<a href="" blanck="">
													more information
												</a>
											</span>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-lg-3 card_img_overlay" data-aos={"fade-up"}>
									<div>
										<img className="img-fluid bottom_img_overlay" src={image17} />
									</div>
									<div class="overlay">
										<div class="text">
											<span className="text_hover">Blue Lily</span>
											<span className="text_hover_a">
												<a href="" blanck="">
													more information
												</a>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>
		</>
	);
};

export default Search;
