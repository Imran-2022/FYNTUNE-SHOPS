import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
    // redux
   
    const storeLength = useSelector((state) => {
        return state.stores;
    })
    
    return (
        <>
            <p>fyntune-shop</p>
            <p>length of the stores {storeLength.length}</p>
            <div style={{display: 'flex',gap:"30px",margin:"50px",flexWrap:"wrap", }}>
                {
                    storeLength.map((dt, idx) => {
                        const { shop_name, shop_id, shop_area, shop_category, open, close } = dt
                        console.log(shop_name, shop_id, shop_area, shop_category, open, close)
                        return (
                            <div key={idx}  style={{padding:"10px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",minWidth:"200px"}}>

                                <p>{shop_name}</p>
                                <p>{shop_id}</p>
                                <p>{shop_area}</p>
                                <p>{shop_category}</p>
                                <p>{open}</p>
                                <p>{close}</p>

                            </div>
                        )
                    }).reverse()
                }
            </div>
           
        </>
    );
};

export default Home;