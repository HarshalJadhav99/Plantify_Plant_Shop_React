import React from "react";
import Featured from "./Featured";
import FreeShipping from "./FreeShipping";
import HeroBanner from "./HeroBanner";
import Map from "./Map";
import PlantStands from "./PlantStands";
import Search from "./Search";
import data from "./data";
import Slider from "react-slick";

const Home = () => {
	const settings = {
		className: "slider variable-width",
		dots: true,
		infinite: true,
		centerMode: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
					dots: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
				},
			},
		],
	};
	return (
		<>
			<HeroBanner />

			<section className="featured_section" data-aos={"fade-up"}>
				<div className="container">
					<div className="row">
						<div className="col-6 col-lg-6">
							<div className="featured_header">
								<span>Featured</span>
							</div>
						</div>
						<div className="col-6 col-lg-6">
							<div className="featured_header_link">
								<a href="" blanck="">
									view all
								</a>
							</div>
						</div>
						<Slider {...settings}>
							{data.productData.map((item, index) => {
								return (
									<Featured
										img={item.img}
										title={item.title}
										desc={item.desc}
										price={item.price}
										item={item}
										key={index}
									/>
								);
							})}
						</Slider>
					</div>
				</div>
			</section>
			<Search />
			<PlantStands />
			<FreeShipping />
			<Map />
		</>
	);
};

export default Home;
