import axiosClient from "./axiosClients";

const cartApi={
    getAll(params){
        const url= '/products';
        return axiosClient.get(url,{params})


    },
    getCartByUserId(user_id){
        const url= `/cart/${user_id}`;
        return axiosClient.get(url)

    },
    getCountCartByUserId(user_id){
        const url= `/cart_count/${user_id}`;
        return axiosClient.get(url)

    },
    addCart(data){
        const url= '/cart/add';
        return axiosClient.post(url, data)

    },
    updateQuantityCart(data){
        const url= `/cart/update`;
        return axiosClient.post(url, data)

    },
    removeCart(id){
        const url= `/cart/remove/${id}`;
        return axiosClient.delete(url)
    }

};
export default cartApi;