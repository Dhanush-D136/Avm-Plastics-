import { create } from 'zustand';

export interface CartItem {
  id: number; // product id
  item_code: string;
  item_name: string;
  item_name_tamil?: string | null;
  rate: number;
  original_price: number;
  discount_price: number;
  quantity: number;
  discount_percentage: number; // Treated as flat discount amount per unit
  tax_percentage: number;       // Always 0 (GST removed)
  total: number;
}

export interface Customer {
  id: number;
  name: string;
  phone: string;
  address?: string | null;
  gst?: string | null;
  balance_due: number;
  credit_limit: number;
  total_bills_count?: number;
  total_purchase_amount?: number;
  last_purchase_date?: string | null;
  purchase_history?: any[];
  loyalty_points?: number;
}

interface POSState {
  cart: CartItem[];
  customer: Customer | null;
  paymentType: 'cash' | 'card' | 'upi' | 'credit';
  amountPaid: number;
  overallDiscount: number;
  activeTab: 'pos' | 'inventory' | 'customers' | 'whatsapp' | 'analytics' | 'settings' | 'expenses' | 'employees';
  tamilMode: boolean;
  
  // Actions
  addToCart: (product: any, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateCartItem: (productId: number, updates: Partial<CartItem>) => void;
  clearCart: () => void;
  setCustomer: (customer: Customer | null) => void;
  setPaymentType: (type: 'cash' | 'card' | 'upi' | 'credit') => void;
  setAmountPaid: (amount: number) => void;
  setOverallDiscount: (discount: number) => void;
  setActiveTab: (tab: 'pos' | 'inventory' | 'customers' | 'whatsapp' | 'analytics' | 'settings' | 'expenses' | 'employees') => void;
  toggleTamilMode: () => void;
  
  // Calculations
  getCartSubtotal: () => number;
  getCartTax: () => number;
  getCartGrandTotal: () => number;
}

const calculateItemTotal = (rate: number, qty: number, discount: number): number => {
  const base = rate * qty;
  const lineDiscount = discount * qty;
  return base - lineDiscount;
};

export const usePOSStore = create<POSState>((set, get) => ({
  cart: [],
  customer: null,
  paymentType: 'cash',
  amountPaid: 0,
  overallDiscount: 0,
  activeTab: 'pos',
  tamilMode: false,

  addToCart: (product, quantity = 1) => {
    const { cart } = get();
    const existingIndex = cart.findIndex((item) => item.id === product.id);
    const discount = parseFloat(product.discount_percentage) || 0;

    if (existingIndex > -1) {
      const existing = cart[existingIndex];
      const newQty = existing.quantity + quantity;
      const newTotal = calculateItemTotal(existing.rate, newQty, existing.discount_percentage);
      
      const newCart = [...cart];
      newCart[existingIndex] = {
        ...existing,
        quantity: newQty,
        total: parseFloat(newTotal.toFixed(2)),
      };
      
      set({ cart: newCart });
    } else {
      const original_price = parseFloat(product.rate) || 0;
      const discount_price = parseFloat(product.discount_price) || original_price;
      // Default to discount_price
      const rate = discount_price;
      const total = calculateItemTotal(rate, quantity, discount);

      const newItem: CartItem = {
        id: product.id,
        item_code: product.item_code,
        item_name: product.item_name,
        item_name_tamil: product.item_name_tamil,
        rate,
        original_price,
        discount_price,
        quantity,
        discount_percentage: discount,
        tax_percentage: 0,
        total: parseFloat(total.toFixed(2)),
      };

      set({ cart: [...cart, newItem] });
    }
  },

  removeFromCart: (productId) => {
    set({ cart: get().cart.filter((item) => item.id !== productId) });
  },

  updateCartItem: (productId, updates) => {
    const { cart } = get();
    const index = cart.findIndex((item) => item.id === productId);
    if (index === -1) return;

    const item = cart[index];
    const newRate = updates.rate !== undefined ? updates.rate : item.rate;
    const newQty = updates.quantity !== undefined ? updates.quantity : item.quantity;
    const newDisc = updates.discount_percentage !== undefined ? updates.discount_percentage : item.discount_percentage;

    const newTotal = calculateItemTotal(newRate, newQty, newDisc);

    const newCart = [...cart];
    newCart[index] = {
      ...item,
      ...updates,
      tax_percentage: 0,
      total: parseFloat(newTotal.toFixed(2)),
    };

    set({ cart: newCart });
  },

  clearCart: () => {
    set({
      cart: [],
      customer: null,
      paymentType: 'cash',
      amountPaid: 0,
      overallDiscount: 0,
    });
  },

  setCustomer: (customer) => {
    set({ 
      customer,
      paymentType: customer ? (customer.phone === '9999999999' ? 'cash' : 'credit') : 'cash'
    });
  },

  setPaymentType: (type) => set({ paymentType: type }),
  
  setAmountPaid: (amount) => set({ amountPaid: amount }),
  
  setOverallDiscount: (discount) => set({ overallDiscount: discount }),
  
  setActiveTab: (tab) => set({ activeTab: tab }),
  
  toggleTamilMode: () => set({ tamilMode: !get().tamilMode }),

  getCartSubtotal: () => {
    return get().cart.reduce((sum, item) => {
      const base = item.rate * item.quantity;
      const discount = item.discount_percentage * item.quantity;
      return sum + (base - discount);
    }, 0);
  },

  getCartTax: () => 0,

  getCartGrandTotal: () => {
    const subtotal = get().getCartSubtotal();
    const discount = get().overallDiscount;
    return parseFloat((subtotal - discount).toFixed(2));
  },
}));
