import { myAxios } from "./helper"

export const signUp = (user) =>{

    return myAxios
    .post("/signUp",user)
    .then((response)=> response.data)
}

export const loginUser= (loginDetail) =>{

    return myAxios.
    post("/signIn",loginDetail).
    then((response)=>response.data)
}

export const createaccount= (accountDetail) =>{

    return myAxios.
    post("/create-account",accountDetail).
    then((response)=>response.data)
}

export const pinchange= (accountDetail) =>{

    return myAxios.
    put("/pin-change",accountDetail).
    then((response)=>response.data)
}

export const balanceview= (accountDetail) =>{

    return myAxios.
    post("/balance-view",accountDetail).
    then((response)=>response.data)
}

export const withdraw= (accountDetail) =>{

    return myAxios.
    put("/withdraw-money",accountDetail).
    then((response)=>response.data)
}

export const deposit= (accountDetail) =>{

    return myAxios.
    put("/deposit-money",accountDetail).
    then((response)=>response.data)
}

export const transaction= (accountDetail) =>{

    return myAxios.
    post("/list-of-transaction",accountDetail).
    then((response)=>response.data)
}

