export const increment=(num) =>{
    return (
        {
            type:"INCREMENT",
            payload:num,

        }
    )
}
export const decrement=() =>{
    return (
        {
            type:"DECREMENT"
            
        }
    )
}
export const shops=(shops) =>{
    return (
        {
            type:"shops",
            payload:shops
            
        }
    )
}
export const shopsD=(idd) =>{
    return (
        {
            type:"shopsD",
            payload:idd
            
        }
    )
}