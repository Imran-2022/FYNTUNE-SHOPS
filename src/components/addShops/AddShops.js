import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { shops} from '../../redux/actions';
import "./AddShops.css"
import ShopsList from './ShopsList';

const AddShops = () => {
    const storeLength = useSelector((state) => {
        return state.stores;
    })
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        dispatch(shops(data))
        console.table(data)
        alert("successfully submitted")
        reset()
    };

    const [showModal, setShowModal] = useState(false);
    const handleKeyup = e => e.keyCode === 27 && setShowModal(false);
    useEffect(() => {
        if (showModal) window.addEventListener('keyup', handleKeyup);
        return () => window.removeEventListener('keyup', handleKeyup);
    });
    return (
        <>
            <form className="form" onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", gap: "20px" }}>
                <input placeholder="Shop Name" {...register("shop_name", { required: true })} autoComplete="off" />
                {errors.shop_name && <p>This field is required</p>}
                <input type="hidden" defaultValue={storeLength.length + 1} {...register("shop_id")} autoComplete="off" readOnly />
                <div style={{ display: 'flex', justifyContent: 'space-between',flexWrap:"wrap" }}>
                    <p>SHOPS AREA</p>
                    <select {...register("shop_area", { required: true })} className="p-1 mb-3">
                        <option value="Thane">Thane</option>
                        <option value="Pune">Pune</option>
                        <option value="Mumbai-Suburban">Mumbai-Suburban</option>
                        <option value="Nashik">Nashik</option>
                        <option value="Nagpur">Nagpur</option>
                        <option value="Ahmednagar">Ahmednagar</option>
                        <option value="Solapur">Solapur</option>
                    </select>
                    {errors.shop_area && <p>This field is required</p>}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between',flexWrap:"wrap" }}>
                    <p>SHOPS CATEGORY -</p>
                    <select {...register("shop_category", { required: true })} className="p-1 mb-3">
                        <option value="Grocery">Grocery</option>
                        <option value="Butcher">Butcher</option>
                        <option value="Baker">Baker</option>
                        <option value="Chemist">Chemist</option>
                        <option value="Nagpur">Nagpur</option>
                        <option value="Stationery-shop">Stationery-shop</option>
                    </select>
                    {errors.shop_category && <p>This field is required</p>}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between',flexWrap:"wrap" }}>
                    <div>
                        <p style={{ marginBottom: "10px" }}>Open Date</p>
                        <input type="date" {...register("open", { required: true })} />
                        {errors.open && <p>This field is required</p>}
                    </div>
                    <div>
                        <p style={{ marginBottom: "10px" }}>closing date</p>
                        <input type="date"  {...register("close", { required: true })} />
                        {errors.close && <p>This field is required</p>}
                    </div>
                </div>

                <input className="my-3" type="submit" value="ADD NEW SHOPS" />
            </form>

            <div>
                <ShopsList/>
            </div>
        </>
    );
};

export default AddShops;

