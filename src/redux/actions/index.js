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
export const addtoCart=(description,id) =>{
    return (
        {
            type:"addtoCart",
            payload:{
                description:description,
                id:id
            }
            
        }
    )
}