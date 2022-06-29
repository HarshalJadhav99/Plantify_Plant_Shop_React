import React from 'react'
import ModalData from "./ModalData";
import mdata from "./mdata";
import AllProducts from './AllProducts';

const AllFeatured = () => {
  return (
    <>
        <div className='container mt-5'>
           <div className='row'>
            {mdata.productData.map((item, index) => {
											return (
												<AllProducts
													img={item.img}
													title={item.title}
													desc={item.desc}
													price={item.price}
													item={item}
													key={index}
												/>
											);
										})}
                                        {mdata.productData2.map((item, index) => {
											return (
												<AllProducts
													img={item.img}
													title={item.title}
													desc={item.desc}
													price={item.price}
													item={item}
													key={index}
												/>
											);
										})}</div>
            
        </div>
    </>
  )
}

export default AllFeatured