import {createSlice} from '@reduxjs/toolkit'

export type ItemCart = {
    id: number,
    title: string,
    image: string,
    price: number,
    quantity: number,
}
const initialState: {cart: ItemCart[]}  = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action:{payload: ItemCart, type: string}) => {
            const itemInCart = state.cart.find((item) => item.id === action.payload.id)
            if (itemInCart) {
                itemInCart.quantity++
            }else {
                state.cart.push({...action.payload, quantity: 1})
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload)
            if (item) item.quantity++
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload)
            if (!item) return
            if (item?.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--
            }
        },
        removeItem: (state, action) => {
            const removeItem = state.cart.filter(item => item.id != action.payload)
            state.cart = removeItem
        }
    }
})

export const cartReducer = cartSlice.reducer
export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeItem
} = cartSlice.actions