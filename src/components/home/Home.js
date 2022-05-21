import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
    // redux
   
    const storeLength = useSelector((state) => {
        return state.stores;
    })
    const [users, setUsers] = useState(storeLength);
    const [filterblood,setFilterBlood]=useState(users)
    const [group,setGroup]=useState("ALL")
    const filterImage=(fimage)=>{
       
        setFilterBlood(users)
        console.log("fimage",fimage);
        setGroup(fimage)
        if(fimage==="ALL")
        {
            setFilterBlood(users)
        }
        else{
            const filterImages = users.filter((x)=>{
                console.log("x",x)
                return x.shop_area===fimage;
        })
        setFilterBlood(filterImages)

        }
    }
    return (
        <>

            <p>fyntune-shop</p>
            <p>length of the stores {storeLength.length}</p>
            <div className="catagories py-5 ms-5">
                <label for="blood">Choose a Area : &nbsp;</label>
                <select id="blood" name="bloodlist" onChange={(e)=>filterImage(e.target.value)}>
                    <option selected="selected" value="ALL">ALL</option>
                    <option value="Thane">Thane</option>
                    <option value="Pune">Pune</option>
                    <option value="Mumbai-Suburban">Mumbai-Suburban</option>
                    <option value="Nashik">Nashik</option>
                    <option value="Nagpur">Nagpur</option>
                    <option value="Ahmednagar">Ahmednagar</option>
                    <option value="Solapur">Solapur</option>
                </select>
                &nbsp; available donar for {group} : {filterblood.length}
            </div>
            <div style={{display: 'flex',gap:"30px",margin:"50px",flexWrap:"wrap", }}>
                {
                    filterblood.map((dt, idx) => {
                        const { shop_name, shop_id, shop_area, shop_category, open, close } = dt
                        console.log(shop_name, shop_id, shop_area, shop_category, open, close)
                        return (
                            <div key={idx}  style={{padding:"10px",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",minWidth:"200px"}}>

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