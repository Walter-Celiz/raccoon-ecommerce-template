import { createSlice, PayloadAction} from '@reduxjs/toolkit'

interface Product {
    message: string;
    uid: number;
    name: string;
    price: number;
    description: string,
    stock: number,

}

interface ProductState {
    products: Product[],
}


const initialState: ProductState = {
    products: [],
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        dataFetch: (state, action: PayloadAction<Product>) => {
            state.products = [action.payload] //same as Product type
        }
    }
})

export const { dataFetch, } = productSlice.actions
export default productSlice.reducer