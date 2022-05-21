import React from 'react';
import {useSelector} from 'react-redux';
const AddShops = () => {
    const storeLength = useSelector((state)=>{
        return state.stores;
      })
    return (
        <div>
            {
       storeLength.map((dt,idx)=>{
         return(
           <div>
             <p>{idx}  description : {dt.description} id : {dt.id}</p>
           </div>
         )
       })
     }
        </div>
    );
};

export default AddShops;