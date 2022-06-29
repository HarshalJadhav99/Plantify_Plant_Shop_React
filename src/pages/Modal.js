import React from "react";
import mdata from "./mdata";
import Featured from "./Featured";
import ModalData from "./ModalData";
import { Scrollbars } from "react-custom-scrollbars-2";

const Modal = () => {
	return (
		<>
			{/* <button
				type="button"
				className="btn btn-primary"
				data-bs-toggle="modal"
				data-bs-target="#exampleModal">
				Launch demo modal
			</button> */}

			<div
				className="modal fade"
				id="exampleModal"
				tabindex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header m_custom_header">
							<h5 className="modal-title" id="exampleModalLabel">
								Explore Plants & More
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<Scrollbars style={{ height: "400px" }}>
								<div className="container">
									<div className="row">
										<div className="col-12">
											<h1 className="hlines hlines_text">Exclusive Plants Pots</h1>
										</div>
										{mdata.productData.map((item, index) => {
											return (
												<ModalData
													img={item.img}
													title={item.title}
													desc={item.desc}
													price={item.price}
													item={item}
													key={index}
												/>
											);
										})}
										<div className="col-12">
											<h1 className="hlines hlines_text">Our Plants</h1>
										</div>
										{mdata.productData2.map((item, index) => {
											return (
												<ModalData
													img={item.img}
													title={item.title}
													desc={item.desc}
													price={item.price}
													item={item}
													key={index}
												/>
											);
										})}
									</div>
								</div>
							</Scrollbars>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
