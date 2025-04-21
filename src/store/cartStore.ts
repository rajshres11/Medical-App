// src/store/cartStore.ts

import { create } from 'zustand';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (doctor) =>
    set((state) => {
      const exists = state.cart.some((item) => item.id === doctor.id);
      return exists
        ? state
        : { cart: [...state.cart, { ...doctor, quantity: 1 }] };
    }),
  
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ cart: [] }),
}));
