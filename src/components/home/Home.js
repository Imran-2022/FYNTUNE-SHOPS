import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import "./Home.css"
const Home = () => {
    const storeLength = useSelector((state) => {
        return state.stores;
    })
    const [shops] = useState(storeLength);
    const [commonshops, setCommonShop] = useState([]);
    const [commonFiler, setCommonFiler] = useState({
        filterByArea: "ALL",
        filterByCategory: "ALL",
        filterByOpenOrClose: "Open/Close"
    })
    console.log(commonFiler)

    useEffect(() => {
        if (commonFiler.filterByArea !== "ALL") {
            let newshops = shops.filter(element => {
                if (commonFiler.filterByCategory !== "ALL") {
                    return element.shop_area === commonFiler.filterByArea && element.shop_category === commonFiler.filterByCategory;
                } else {
                    return element.shop_area === commonFiler.filterByArea;
                }
            });
            setCommonShop(newshops)
            console.log("not all area ", newshops)
        }
        else {
            let newshopss = shops.filter((element, x, y) => {
                if (commonFiler.filterByCategory !== "ALL") {
                    return element.shop_category === commonFiler.filterByCategory;
                } else {
                    return y;
                }
            });
            setCommonShop(newshopss)
            console.log(" all area ", newshopss)
        }
        console.log("commonshops", commonshops);
    }, [commonFiler])

    return (
        <div className="home">
            <p className='home-p'>length of the shops {storeLength.length}</p>
            <div className='home-filter'>
                <div className="catagories py-5 ms-5">
                    <label for="blood">Choose a Area : &nbsp;</label>
                    <select id="blood" name="bloodlist" onChange={(e) => setCommonFiler({
                        ...commonFiler, filterByArea: e.target.value
                    })}>
                        <option selected="selected" value="ALL">ALL</option>
                        <option value="Thane">Thane</option>
                        <option value="Pune">Pune</option>
                        <option value="Mumbai-Suburban">Mumbai-Suburban</option>
                        <option value="Nashik">Nashik</option>
                        <option value="Nagpur">Nagpur</option>
                        <option value="Ahmednagar">Ahmednagar</option>
                        <option value="Solapur">Solapur</option>
                    </select>
                </div>
                <div className="catagories py-5 ms-5">
                    <label for="blood">Choose a Category : &nbsp;</label>
                    <select id="blood" name="bloodlist" onChange={(e) => setCommonFiler({
                        ...commonFiler, filterByCategory: e.target.value
                    })}>
                        <option selected="selected" value="ALL">ALL</option>
                        <option value="Grocery">Grocery</option>
                        <option value="Butcher">Butcher</option>
                        <option value="Baker">Baker</option>
                        <option value="Chemist">Chemist</option>
                        <option value="Stationery-shop">Stationery-shop</option>
                    </select>
                </div>
                <div className="catagories py-5 ms-5">
                    <label for="blood">open/close status(Today) : &nbsp;</label>
                    <select id="blood" name="bloodlist" onChange={(e) => setCommonFiler({
                        ...commonFiler, filterByOpenOrClose: e.target.value
                    })}>
                        <option selected="selected" value="ALL">Open/Close</option>
                        <option value="open">Open</option>
                        <option value="close">Close</option>
                    </select>
                </div>
            </div>
            <div className="homeGrid" >
                {
                    commonshops && commonshops.map((dt, idx) => {
                        const { shop_name, shop_area, shop_category, open, close } = dt
                        return (
                            <div key={idx} className='homeGridShops'>
                                <p className='grid-shop-p'>shop : {shop_name}</p>
                                <p>area : {shop_area}</p>
                                <p>category : {shop_category}</p>
                                <p>open date : {open}</p>
                                <p>closing date : {close}</p>
                            </div>
                        )
                    }).reverse()
                }
            </div>
        </div>
    );
};

export default Home;