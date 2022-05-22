export const increment = (num) => {
    return (
        {
            type: "INCREMENT",
            payload: num,

        }
    )
}
export const decrement = () => {
    return (
        {
            type: "DECREMENT"

        }
    )
}
export const shops = (shops) => {
    return (
        {
            type: "shops",
            payload: shops

        }
    )
}
export const shopsD = (idd) => {
    return (
        {
            type: "shopsD",
            payload: idd

        }
    )
}
export const shopsU = (idd) => {
    return (
        {
            type: "shopsU",
            payload: idd,
            shop_name: 'updated ',
            shop_id: 'U8',
            shop_area: 'Nagpur',
            shop_category: 'Stationery-shop',
            open: '2022-06-03',
            close: '2022-06-01'

        }
    )
}