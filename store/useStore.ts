// store/useStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/types/product";
import { CartItem } from "@/types/cart";
import { User } from "@/types/user";

interface AppState {
  // Cart
  cart: CartItem[];
  cartOpen: boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  setCartOpen: (open: boolean) => void;
  getCartTotal: () => number;
  getCartCount: () => number;

  // Wishlist
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;

  // Search
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;

  // Mobile Menu
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;

  // User auth/profile
  user: User | null;
  isAuthenticated: boolean;
  signIn: (userData?: Partial<User>) => void;
  signOut: () => void;
  updateUserProfile: (userData: Partial<User>) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Cart
      cart: [],
      cartOpen: false,

      addToCart: (product: Product) => {
        const { cart } = get();
        const existing = cart.find((item) => item.product.id === product.id);
        if (existing) {
          set({
            cart: cart.map((item) =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            ),
          });
        } else {
          set({ cart: [...cart, { product, quantity: 1 }] });
        }
      },

      removeFromCart: (productId: string) => {
        set({
          cart: get().cart.filter((item) => item.product.id !== productId),
        });
      },

      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeFromCart(productId);
          return;
        }
        set({
          cart: get().cart.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item,
          ),
        });
      },

      clearCart: () => set({ cart: [] }),
      setCartOpen: (open) => set({ cartOpen: open }),

      getCartTotal: () => {
        return get().cart.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0,
        );
      },

      getCartCount: () => {
        return get().cart.reduce((count, item) => count + item.quantity, 0);
      },

      // Wishlist
      wishlist: [],
      toggleWishlist: (productId: string) => {
        const { wishlist } = get();
        if (wishlist.includes(productId)) {
          set({ wishlist: wishlist.filter((id) => id !== productId) });
        } else {
          set({ wishlist: [...wishlist, productId] });
        }
      },
      isInWishlist: (productId: string) => {
        return get().wishlist.includes(productId);
      },

      // Search
      searchOpen: false,
      setSearchOpen: (open) => set({ searchOpen: open }),

      // Mobile Menu
      mobileMenuOpen: false,
      setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),

      // User auth/profile
      user: null,
      isAuthenticated: false,
      signIn: (userData) => {
        const baseUser: User = {
          id: "demo-user",
          name: "Alexander Morgan",
          email: "alexander@luxewatches.com",
          avatar: "AM",
          phone: "+1 555 0148",
          address: {
            street: "42 Rue de la Paix",
            city: "New York",
            state: "NY",
            zip: "10001",
            country: "USA",
          },
          ...userData,
        };

        set({ user: baseUser, isAuthenticated: true });
      },
      signOut: () => set({ user: null, isAuthenticated: false }),
      updateUserProfile: (userData) => {
        const { user } = get();
        if (!user) {
          get().signIn(userData);
          return;
        }

        const nextAddress = {
          street: user.address?.street ?? "",
          city: user.address?.city ?? "",
          state: user.address?.state ?? "",
          zip: user.address?.zip ?? "",
          country: user.address?.country ?? "",
          ...(userData.address ?? {}),
        };

        set({
          user: {
            ...user,
            ...userData,
            address: nextAddress,
          },
        });
      },
    }),
    {
      name: "chronos-store",
      partialize: (state) => ({
        cart: state.cart,
        wishlist: state.wishlist,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);
