'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  Users, 
  MessageSquare, 
  Settings as SettingsIcon, 
  Search, 
  Plus, 
  Trash2, 
  UserPlus, 
  CreditCard, 
  Check, 
  Printer, 
  Mic, 
  MicOff, 
  Camera, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Send,
  X,
  DollarSign,
  TrendingDown,
  RefreshCw,
  Edit2,
  Clock,
  Download,
  Upload,
  FileText,
  Award,
  Shield,
  Calendar,
  Building,
  Bell,
  Sun,
  Moon,
  ChevronRight,
  User
} from 'lucide-react';
import { usePOSStore, CartItem, Customer } from '../../store/posStore';
import confetti from 'canvas-confetti';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  Legend
} from 'recharts';

const API_URL = 'http://127.0.0.1:8000/api/v1';

const TRANSLATIONS = {
  en: {
    dashboard: "Dashboard",
    inventory: "Inventory",
    billing: "POS Billing",
    customers: "Customers",
    expenses: "Expenses",
    reports: "Business Reports",
    settings: "Settings",
    notifications: "Notifications",
    itemNo: "Item No",
    itemName: "Item Name",
    category: "Category",
    brand: "Brand",
    shopPrice: "Shop Price",
    originalPrice: "Original Price",
    discountPrice: "Discount Price",
    stockQty: "Stock Qty",
    minQty: "Min Qty",
    branch: "Branch",
    actions: "Actions",
    searchPlaceholder: "Search by Item Code, Name, Category, Brand...",
    lowStock: "Low Stock",
    outOfStock: "Out of Stock",
    healthy: "Healthy",
    addNewProduct: "Add New Product",
    exportInventory: "Export Inventory",
    importInventory: "Import Inventory",
    printBill: "Print Bill",
    tamilTranslation: "Tamil Name",
    confirmPayment: "Confirm Payment",
    todaySales: "Today's Sales",
    todayProfit: "Today's Profit",
    monthlySales: "Monthly Sales",
    monthlyProfit: "Monthly Profit",
    runningLow: "Products Running Low",
    bestSellers: "Best Selling Products",
    topCustomers: "Top Customers",
    recentBills: "Recent Bills",
    expectedProfit: "Expected Profit",
    potentialRevenue: "Potential Revenue",
    sellingRevenue: "Selling Revenue",
    totalInventoryValue: "Total Inventory Value",
    language: "Language",
    unitType: "Unit Type",
    description: "Description",
    barcode: "Barcode",
    lastUpdated: "Last Updated",
    registerProductSpec: "Register Product Spec",
    updateProductSpec: "Update Product Specifications",
    productName: "Product Name *",
    productDescription: "Product Description",
    saveProductSpec: "Save Product Spec",
    salesForecast: "AI Sales Forecasts",
    expenseCategory: "Expense Category *",
    recordExpense: "Record Operating Expense",
    confirmPaymentTitle: "Process Payment Settlement",
    whatsappNotification: "WhatsApp Notification Dispatch",
    customerLedger: "Customer Credit Ledger",
    billingReceipt: "Billing Transaction Receipt",
    dualLanguageBill: "Dual Language Bill",
    tamilBill: "Tamil Bill",
    englishBill: "English Bill",
    taxInvoice: "TAX INVOICE",
    authorizedSignatory: "Authorized Signatory",
    thankYou: "Thank you for your business!"
  },
  ta: {
    dashboard: "டாஷ்போர்டு",
    inventory: "சரக்கு மேலாண்மை",
    billing: "POS பில்லிங்",
    customers: "வாடிக்கையாளர்கள்",
    expenses: "செலவுகள்",
    reports: "வணிக அறிக்கைகள்",
    settings: "அமைப்புகள்",
    notifications: "அறிவிப்புகள்",
    itemNo: "பொருள் எண்",
    itemName: "பொருள் பெயர்",
    category: "வகை",
    brand: "பிராண்ட்",
    shopPrice: "கடை விலை (Shop Price)",
    originalPrice: "அசல் விலை (Original Price)",
    discountPrice: "தள்ளுபடி விலை (Discount Price)",
    stockQty: "இருப்பு அளவு",
    minQty: "குறைந்தபட்ச இருப்பு",
    branch: "கிளை",
    actions: "செயல்கள்",
    searchPlaceholder: "பொருள் எண், பெயர், வகை, பிராண்ட் மூலம் தேடவும்...",
    lowStock: "குறைந்த இருப்பு",
    outOfStock: "இருப்பு இல்லை",
    healthy: "நன்றாக உள்ளது",
    addNewProduct: "புதிய பொருள் சேர்",
    exportInventory: "ஏற்றுமதி செய்க",
    importInventory: "இறக்குமதி செய்க",
    printBill: "பில் அச்சிடு",
    tamilTranslation: "தமிழ் பெயர்",
    confirmPayment: "பணத்தை உறுதிசெய்",
    todaySales: "இன்றைய விற்பனை",
    todayProfit: "இன்றைய லாபம்",
    monthlySales: "மாதாந்திர விற்பனை",
    monthlyProfit: "மாதாந்திர லாபம்",
    runningLow: "குறையும் பொருட்கள்",
    bestSellers: "அதிகம் விற்பனையாகும் பொருட்கள்",
    topCustomers: "முக்கிய வாடிக்கையாளர்கள்",
    recentBills: "சமீபத்திய பில்கள்",
    expectedProfit: "எதிர்பார்க்கும் லாபம்",
    potentialRevenue: "சாத்தியமான வருவாய்",
    sellingRevenue: "விற்பனை வருவாய்",
    totalInventoryValue: "மொத்த சரக்கு மதிப்பு",
    language: "மொழி",
    unitType: "அலகு வகை",
    description: "விளக்கம்",
    barcode: "பார் கோடு",
    lastUpdated: "கடைசியாக புதுப்பிக்கப்பட்டது",
    registerProductSpec: "பொருள் விவரங்களை பதிவு செய்",
    updateProductSpec: "பொருள் விவரங்களை புதுப்பி",
    productName: "பொருள் பெயர் *",
    productDescription: "பொருள் விளக்கம்",
    saveProductSpec: "சேமி",
    salesForecast: "AI விற்பனை கணிப்பு",
    recordExpense: "செலவுகளை பதிவு செய்",
    expenseCategory: "செலவு வகை *",
    confirmPaymentTitle: "செலுத்துதலை செயலாக்குக",
    whatsappNotification: "வாட்ஸ்அப் அறிவிப்பு",
    customerLedger: "வாடிக்கையாளர் கடன் கணக்கு",
    billingReceipt: "பில்லிங் பரிவர்த்தனை ரசீது",
    dualLanguageBill: "இருமொழி பில்",
    tamilBill: "தமிழ் பில்",
    englishBill: "ஆங்கில பில்",
    taxInvoice: "வரி விலைப்பட்டியல் (TAX INVOICE)",
    authorizedSignatory: "அங்கீகரிக்கப்பட்ட கையொப்பம்",
    thankYou: "உங்கள் வணிகத்திற்கு நன்றி!"
  }
};

type ThemeType = 'light' | 'blue' | 'gold' | 'silver' | 'dark';

export default function Home() {
  const { 
    cart, 
    customer, 
    paymentType, 
    amountPaid, 
    overallDiscount, 
    activeTab, 
    tamilMode,
    addToCart,
    removeFromCart,
    updateCartItem,
    clearCart,
    setCustomer,
    setPaymentType,
    setAmountPaid,
    setOverallDiscount,
    setActiveTab,
    toggleTamilMode,
    getCartSubtotal,
    getCartGrandTotal
  } = usePOSStore();

  const [lang, setLang] = useState<'en' | 'ta'>('en');
  const t = (key: keyof typeof TRANSLATIONS['en']): string => {
    return TRANSLATIONS[lang][key] || TRANSLATIONS['en'][key] || '';
  };

  // Premium Theme State
  const [activeTheme, setActiveTheme] = useState<ThemeType>('light');
  const [previewTheme, setPreviewTheme] = useState<ThemeType>('light');
  const [clientDate, setClientDate] = useState<string>('');

  // Multi-Role Simulated Flow
  const [currentUserRole, setCurrentUserRole] = useState<'owner' | 'manager' | 'cashier'>('owner');

  // Branch & Filter states
  const [selectedBranch, setSelectedBranch] = useState('All');
  const [branches, setBranches] = useState<string[]>(['Branch A', 'Branch B', 'Branch C']);
  const [globalSearch, setGlobalSearch] = useState('');

  // Loading & Error States
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  // Shared Data
  const [products, setProducts] = useState<any[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [whatsappLogs, setWhatsappLogs] = useState<any[]>([]);
  const [dashboardSummary, setDashboardSummary] = useState<any>(null);
  const [salesHistory, setSalesHistory] = useState<any[]>([]);
  const [bestSellers, setBestSellers] = useState<any[]>([]);
  const [deadStock, setDeadStock] = useState<any[]>([]);
  const [aiPredictions, setAiPredictions] = useState<any[]>([]);

  // Expiry Date Management
  const [expiryAlerts, setExpiryAlerts] = useState<any>({ expired: [], expiring_7: [], expiring_15: [], expiring_30: [] });
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('All');

  // Expenses management state
  const [expenses, setExpenses] = useState<any[]>([]);
  const [newExpCategory, setNewExpCategory] = useState('Rent');
  const [newExpAmount, setNewExpAmount] = useState('');
  const [newExpDesc, setNewExpDesc] = useState('');
  const [newExpBranch, setNewExpBranch] = useState('Branch A');
  const [newExpDate, setNewExpDate] = useState(new Date().toISOString().split('T')[0]);

  // Shift & Session tracking state
  const [activeSession, setActiveSession] = useState<any>(null);
  const [employeeSessions, setEmployeeSessions] = useState<any[]>([]);
  const [cashierPerformance, setCashierPerformance] = useState<any[]>([]);

  // Daily Report Date selector
  const [reportDate, setReportDate] = useState(new Date().toISOString().split('T')[0]);
  const [reportBranch, setReportBranch] = useState('Branch A');

  // Keyboard billing helper states
  const [inputCode, setInputCode] = useState('');
  const [posProduct, setPosProduct] = useState<any | null>(null);
  const [posQty, setPosQty] = useState('1');
  const [posDiscount, setPosDiscount] = useState('0');
  const [posRate, setPosRate] = useState('0');
  
  // Loyalty redemption state
  const [pointsToRedeem, setPointsToRedeem] = useState<number>(0);
  const [creditDueDate, setCreditDueDate] = useState<string>(
    new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  );
  
  // Micro interactions toasts
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Refs for POS inputs
  const codeInputRef = useRef<HTMLInputElement>(null);
  const qtyInputRef = useRef<HTMLInputElement>(null);
  const discountInputRef = useRef<HTMLInputElement>(null);
  const checkoutBtnRef = useRef<HTMLButtonElement>(null);

  // Modal control states
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [showLuxurySuccessModal, setShowLuxurySuccessModal] = useState(false);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showAddCustomerModal, setShowAddCustomerModal] = useState(false);
  const [showAddPaymentModal, setShowAddPaymentModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<any | null>(null);
  const [activeLedgerCustomer, setActiveLedgerCustomer] = useState<Customer | null>(null);
  const [ledgerData, setLedgerData] = useState<any>(null);
  
  // OCR & Voice states
  const [isListening, setIsListening] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState('');
  const [showOcrModal, setShowOcrModal] = useState(false);
  const [ocrScanning, setOcrScanning] = useState(false);
  
  // Add payment form
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentMode, setPaymentMode] = useState('cash');
  const [paymentRef, setPaymentRef] = useState('');
  const [paymentNotes, setPaymentNotes] = useState('');

  // Add product form
  const [newProdCode, setNewProdCode] = useState('');
  const [newProdName, setNewProdName] = useState('');
  const [newProdNameTamil, setNewProdNameTamil] = useState('');
  const [newProdCategory, setNewProdCategory] = useState('');
  const [newProdBrand, setNewProdBrand] = useState('');
  const [newProdRate, setNewProdRate] = useState('');
  const [newProdPurchasePrice, setNewProdPurchasePrice] = useState('');
  const [newProdDiscount, setNewProdDiscount] = useState('0');
  const [newProdStock, setNewProdStock] = useState('');
  const [newProdMinStock, setNewProdMinStock] = useState('20');
  const [newProdBarcode, setNewProdBarcode] = useState('');
  const [newProdBranch, setNewProdBranch] = useState('Branch A');
  const [newProdUnitType, setNewProdUnitType] = useState('pcs');
  const [newProdDescription, setNewProdDescription] = useState('');
  const [newProdMfg, setNewProdMfg] = useState('');
  const [newProdExp, setNewProdExp] = useState('');
  const [editingProductId, setEditingProductId] = useState<number | null>(null);

  // Add customer form
  const [newCustName, setNewCustName] = useState('');
  const [newCustPhone, setNewCustPhone] = useState('');
  const [newCustAddress, setNewCustAddress] = useState('');
  const [newCustGst, setNewCustGst] = useState('');
  const [newCustLimit, setNewCustLimit] = useState('50000');

  // Search states for tables
  const [prodSearch, setProdSearch] = useState('');
  const [custSearch, setCustSearch] = useState('');

  // Voice Speech Recognition setup
  const recognitionRef = useRef<any>(null);

  // Custom customer collection popup states
  const [showCustomerCollectModal, setShowCustomerCollectModal] = useState(false);
  const [collectName, setCollectName] = useState('');
  const [collectPhone, setCollectPhone] = useState('');

  // Customer purchase history popup states
  const [showCustBillsModal, setShowCustBillsModal] = useState(false);
  const [selectedCustHistory, setSelectedCustHistory] = useState<Customer | null>(null);

  // Bill Template Settings State
  const [tplShopName, setTplShopName] = useState('VEL BILLING');
  const [tplShopAddress, setTplShopAddress] = useState('124, East Avani Moola Street, Madurai - 625001');
  const [tplMobileNumber, setTplMobileNumber] = useState('+91 98765 43210');
  const [tplGstNumber, setTplGstNumber] = useState('33ABCDE1234F1Z0');
  const [tplLogoUrl, setTplLogoUrl] = useState('');
  const [tplFooterMessage, setTplFooterMessage] = useState('Terms & Conditions:\n1. Goods once sold will not be taken back.\n2. Subject to Madurai jurisdiction.');
  const [tplThankYouMessage, setTplThankYouMessage] = useState('Thank you for your business! Please visit again.');
  const [tplFontSize, setTplFontSize] = useState(9);
  const [tplCustomText, setTplCustomText] = useState('');

  // Fetch all necessary data on startup and when tabs switch
  useEffect(() => {
    const isAuth = typeof window !== 'undefined' ? localStorage.getItem('avm_owner_authenticated') : null;
    if (isAuth !== 'true') {
      window.location.href = '/owner-login';
      return;
    }
    fetchProducts();
    fetchCustomers();
    fetchDashboardData();
    fetchWhatsappLogs();
    fetchBillTemplate();
    fetchBranches();
    fetchExpenses();
    fetchEmployeeSessions();
    fetchExpiryAlerts();
  }, [activeTab, selectedBranch]);

  // Load saved theme if any
  useEffect(() => {
    const savedTheme = localStorage.getItem('vel-billing-theme');
    if (savedTheme) {
      setActiveTheme(savedTheme as ThemeType);
      setPreviewTheme(savedTheme as ThemeType);
    }
    setClientDate(new Date().toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' }));
  }, []);

  // POS keyboard flow setup
  useEffect(() => {
    if (activeTab === 'pos' && codeInputRef.current) {
      codeInputRef.current.focus();
    }

    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (activeTab === 'pos') {
        if (e.ctrlKey && e.key === 'Enter') {
          e.preventDefault();
          if (cart.length > 0) {
            triggerCheckout();
          }
        }
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [activeTab, cart, customer]);

  const triggerCheckout = () => {
    if (cart.length === 0) return;
    setPointsToRedeem(0);
    if (!customer || customer.phone === '9999999999' || customer.phone === '') {
      setCollectName('');
      setCollectPhone('');
      setShowCustomerCollectModal(true);
    } else {
      setShowCheckoutModal(true);
    }
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 1800);
  };

  const fetchBranches = async () => {
    try {
      const res = await fetch(`${API_URL}/settings/branches`);
      if (res.ok) {
        const data = await res.json();
        setBranches(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchExpiryAlerts = async () => {
    try {
      const res = await fetch(`${API_URL}/products/expiry-alerts`);
      if (res.ok) {
        setExpiryAlerts(await res.json());
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchExpenses = async () => {
    try {
      const branchParam = selectedBranch !== 'All' ? `&branch=${selectedBranch}` : '';
      const res = await fetch(`${API_URL}/expenses/?limit=100${branchParam}`);
      if (res.ok) {
        setExpenses(await res.json());
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchEmployeeSessions = async () => {
    try {
      const sRes = await fetch(`${API_URL}/employees/sessions`);
      const pRes = await fetch(`${API_URL}/employees/performance`);
      if (sRes.ok && pRes.ok) {
        setEmployeeSessions(await sRes.json());
        setCashierPerformance(await pRes.json());
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchBillTemplate = async () => {
    try {
      const res = await fetch(`${API_URL}/settings/template`);
      if (res.ok) {
        const data = await res.json();
        setTplShopName(data.shop_name);
        setTplShopAddress(data.shop_address);
        setTplMobileNumber(data.mobile_number);
        setTplGstNumber(data.gst_number || '');
        setTplLogoUrl(data.logo_url || '');
        setTplFooterMessage(data.footer_message || '');
        setTplThankYouMessage(data.thank_you_message || '');
        setTplFontSize(data.font_size || 9);
        setTplCustomText(data.custom_text || '');
      }
    } catch (err) {
      console.error("Error fetching bill template settings:", err);
    }
  };

  const handleSaveTemplate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setApiError(null);
    try {
      const res = await fetch(`${API_URL}/settings/template`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          shop_name: tplShopName,
          shop_address: tplShopAddress,
          mobile_number: tplMobileNumber,
          gst_number: tplGstNumber || null,
          logo_url: tplLogoUrl || null,
          footer_message: tplFooterMessage || null,
          thank_you_message: tplThankYouMessage || null,
          font_size: tplFontSize,
          custom_text: tplCustomText || null
        })
      });
      if (res.ok) {
        showToast("Template settings saved successfully!");
        fetchBillTemplate();
      } else {
        const err = await res.json();
        throw new Error(err.detail || "Failed to save template");
      }
    } catch (err: any) {
      alert(err.message || "Error saving template settings");
    } finally {
      setLoading(false);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${API_URL}/products/?limit=100&search=${prodSearch}`);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products", err);
    }
  };

  const fetchCustomers = async () => {
    try {
      const res = await fetch(`${API_URL}/customers/?limit=100&search=${custSearch}`);
      const data = await res.json();
      setCustomers(data);
    } catch (err) {
      console.error("Error fetching customers", err);
    }
  };

  const fetchWhatsappLogs = async () => {
    try {
      const res = await fetch(`${API_URL}/whatsapp/logs`);
      const data = await res.json();
      setWhatsappLogs(data);
    } catch (err) {
      console.error("Error fetching whatsapp logs", err);
    }
  };

  const fetchDashboardData = async () => {
    try {
      const branchParam = selectedBranch !== 'All' ? `?branch=${selectedBranch}` : '';
      const [sumRes, salesRes, sellersRes, deadRes, aiRes] = await Promise.all([
        fetch(`${API_URL}/analytics/summary${branchParam}`),
        fetch(`${API_URL}/analytics/sales-over-time?days=15`),
        fetch(`${API_URL}/analytics/best-sellers`),
        fetch(`${API_URL}/analytics/dead-stock`),
        fetch(`${API_URL}/analytics/ai-predictions`)
      ]);
      setDashboardSummary(await sumRes.json());
      setSalesHistory(await salesRes.json());
      setBestSellers(await sellersRes.json());
      setDeadStock(await deadRes.json());
      setAiPredictions(await aiRes.json());
    } catch (err) {
      console.error("Error loading analytics dashboard", err);
    }
  };

  // Keyboard billing actions
  const handleCodeChange = async (val: string) => {
    setInputCode(val);
    if (!val) {
      setPosProduct(null);
      return;
    }
    try {
      const res = await fetch(`${API_URL}/products/code/${val}`);
      if (res.ok) {
        const prod = await res.json();
        setPosProduct(prod);
        setPosRate(prod.rate);
        setPosDiscount(prod.discount_percentage.toString());
      } else {
        setPosProduct(null);
      }
    } catch {
      setPosProduct(null);
    }
  };

  const handleCodeKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (posProduct) {
        qtyInputRef.current?.focus();
        qtyInputRef.current?.select();
      } else if (inputCode.trim().length > 0) {
        const matched = products.find(p => p.item_code === inputCode || p.item_name.toLowerCase().includes(inputCode.toLowerCase()));
        if (matched) {
          setPosProduct(matched);
          setPosRate(matched.rate);
          setPosDiscount(matched.discount_percentage.toString());
          setInputCode(matched.item_code);
          setTimeout(() => {
            qtyInputRef.current?.focus();
            qtyInputRef.current?.select();
          }, 50);
        }
      }
    }
  };

  const handleQtyKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addPosRow();
    }
  };

  const handleDiscountKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addPosRow();
    }
  };

  const addPosRow = () => {
    if (!posProduct) return;
    
    const qty = parseInt(posQty) || 1;
    const rate = parseFloat(posRate) || parseFloat(posProduct.rate);
    const discount = parseFloat(posDiscount) || 0;

    addToCart(
      {
        ...posProduct,
        rate: rate,
        discount_percentage: discount
      },
      qty
    );

    const existing = cart.find(c => c.id === posProduct.id);
    if (existing) {
      updateCartItem(posProduct.id, {
        rate: rate,
        quantity: existing.quantity + qty,
        discount_percentage: discount,
        tax_percentage: 0
      });
    } else {
      setTimeout(() => {
        updateCartItem(posProduct.id, {
          rate: rate,
          discount_percentage: discount,
          tax_percentage: 0
        });
      }, 50);
    }

    showToast(`Added ${posProduct.item_name} to bill`);

    setInputCode('');
    setPosProduct(null);
    setPosQty('1');
    setPosDiscount('0');
    setPosRate('0');
    
    setTimeout(() => {
      codeInputRef.current?.focus();
    }, 50);
  };

  const handleCheckoutSubmit = async () => {
    setLoading(true);
    setApiError(null);
    try {
      const itemsPayload = cart.map(item => ({
        product_id: item.id,
        quantity: item.quantity,
        rate: item.rate,
        discount_percentage: item.discount_percentage,
        tax_percentage: 0
      }));

      const payload = {
        customer_id: customer?.id || null,
        payment_type: paymentType,
        payment_status: paymentType === 'credit' ? 'unpaid' : 'paid',
        amount_paid: amountPaid || (getCartGrandTotal() - pointsToRedeem),
        discount: overallDiscount || 0,
        branch: selectedBranch !== 'All' ? selectedBranch : 'Branch A',
        points_redeemed: pointsToRedeem || 0,
        due_date: paymentType === 'credit' ? new Date(creditDueDate).toISOString() : null,
        items: itemsPayload
      };

      const res = await fetch(`${API_URL}/invoices/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.detail || "Failed to submit checkout");
      }

      const invoice = await res.json();
      
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#2563EB', '#10B981']
      });

      clearCart();
      setShowCheckoutModal(false);
      setSelectedInvoice(invoice);
      setShowLuxurySuccessModal(true);
      
      if (invoice.customer && invoice.customer.phone && invoice.customer.phone !== '9999999999') {
        autoSendWhatsAppInvoice(invoice.invoice_no, invoice.customer.phone);
      }
      fetchDashboardData();
    } catch (err: any) {
      setApiError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const autoSendWhatsAppInvoice = async (invoiceNo: string, phone: string) => {
    try {
      await fetch(`${API_URL}/whatsapp/send-invoice`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          invoice_no: invoiceNo,
          phone: phone,
          message_type: "invoice_alert"
        })
      });
      fetchWhatsappLogs();
    } catch (e) {
      console.error("Auto whatsapp trigger failed", e);
    }
  };

  // Return & Refund handler
  const handleReturnInvoice = async (invoiceNo: string) => {
    const reason = prompt("Enter reason for return & refund:");
    if (!reason) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/invoices/${invoiceNo}/return`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reason })
      });
      if (res.ok) {
        showToast("Refund processed successfully!");
        fetchDashboardData();
        setSelectedInvoice(null);
        setShowLuxurySuccessModal(false);
      } else {
        const err = await res.json();
        alert(err.detail || "Return failed");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleRecordPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeLedgerCustomer || !paymentAmount) return;

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/customers/${activeLedgerCustomer.id}/payments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_id: activeLedgerCustomer.id,
          amount: parseFloat(paymentAmount),
          payment_mode: paymentMode,
          reference_no: paymentRef || null,
          notes: paymentNotes || null
        })
      });

      if (res.ok) {
        setPaymentAmount('');
        setPaymentRef('');
        setPaymentNotes('');
        setShowAddPaymentModal(false);
        fetchCustomerLedger(activeLedgerCustomer.id);
        fetchCustomers();
        showToast("Ledger payment recorded!");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCustomerLedger = async (custId: number) => {
    try {
      const res = await fetch(`${API_URL}/customers/${custId}/ledger`);
      if (res.ok) {
        const data = await res.json();
        setLedgerData(data);
        setActiveLedgerCustomer(data.customer);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const url = editingProductId ? `${API_URL}/products/${editingProductId}` : `${API_URL}/products/`;
      const method = editingProductId ? 'PUT' : 'POST';
      
      const payload = {
        item_code: newProdCode,
        item_name: newProdName,
        item_name_tamil: newProdNameTamil || null,
        category: newProdCategory || null,
        brand: newProdBrand || null,
        rate: parseFloat(newProdRate),
        purchase_price: parseFloat(newProdPurchasePrice) || 0.0,
        discount_price: parseFloat(newProdDiscount) || parseFloat(newProdRate) || 0.0,
        stock: parseInt(newProdStock) || 0,
        min_stock: parseInt(newProdMinStock) || 10,
        unit_type: newProdUnitType || 'pcs',
        description: newProdDescription || null,
        barcode: newProdBarcode || null,
        branch: newProdBranch
      };

      const res = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setNewProdCode('');
        setNewProdName('');
        setNewProdNameTamil('');
        setNewProdCategory('');
        setNewProdBrand('');
        setNewProdRate('');
        setNewProdPurchasePrice('');
        setNewProdDiscount('0');
        setNewProdStock('');
        setNewProdMinStock('20');
        setNewProdBarcode('');
        setNewProdUnitType('pcs');
        setNewProdDescription('');
        setNewProdMfg('');
        setNewProdExp('');
        setEditingProductId(null);
        setShowAddProductModal(false);
        fetchProducts();
        showToast(editingProductId ? "Product updated successfully!" : "Product added successfully!");
      } else {
        const err = await res.json();
        alert(err.detail || "Error saving product");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Expenses creator
  const handleAddExpense = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/expenses/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: newExpCategory,
          amount: parseFloat(newExpAmount),
          description: newExpDesc || null,
          branch: newExpBranch,
          date: new Date(newExpDate).toISOString()
        })
      });
      if (res.ok) {
        setNewExpAmount('');
        setNewExpDesc('');
        fetchExpenses();
        fetchDashboardData();
        showToast("Operating expense recorded!");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Shift logs actions
  const handleStartShift = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/employees/login-session`, {
        method: 'POST'
      });
      if (res.ok) {
        const session = await res.json();
        setActiveSession(session);
        fetchEmployeeSessions();
        showToast("Shift session started!");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEndShift = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/employees/logout-session`, {
        method: 'POST'
      });
      if (res.ok) {
        setActiveSession(null);
        fetchEmployeeSessions();
        showToast("Shift session closed!");
      } else {
        const err = await res.json();
        alert(err.detail || "Logout failed");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Database Backup and Restore
  const handleDownloadBackup = () => {
    window.open(`${API_URL}/settings/backup`, '_blank');
  };

  const handleRestoreDatabase = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    setLoading(true);
    const formData = new FormData();
    formData.append("file", files[0]);

    try {
      const res = await fetch(`${API_URL}/settings/restore`, {
        method: 'POST',
        body: formData
      });
      if (res.ok) {
        showToast("Database restored successfully!");
        fetchProducts();
        fetchCustomers();
        fetchDashboardData();
      } else {
        const err = await res.json();
        alert(err.detail || "Restore failed");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (productId: number) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/products/${productId}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        showToast("Product deleted");
        await fetchProducts();
      } else {
        const err = await res.json();
        alert(err.detail || "Error deleting product");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddCustomer = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/customers/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newCustName,
          phone: newCustPhone,
          address: newCustAddress || null,
          gst: newCustGst || null,
          balance_due: 0.0,
          credit_limit: parseFloat(newCustLimit) || 50000
        })
      });

      if (res.ok) {
        setNewCustName('');
        setNewCustPhone('');
        setNewCustAddress('');
        setNewCustGst('');
        setNewCustLimit('50000');
        setShowAddCustomerModal(false);
        fetchCustomers();
        showToast("Customer registered!");
      } else {
        const err = await res.json();
        alert(err.detail || "Error creating customer");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const sendDueReminder = async (cust: Customer) => {
    try {
      const res = await fetch(`${API_URL}/whatsapp/send-reminder`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_id: cust.id,
          phone: cust.phone,
          amount_due: cust.balance_due
        })
      });

      if (res.ok) {
        const data = await res.json();
        window.open(data.whatsapp_web_url, '_blank');
        fetchWhatsappLogs();
      }
    } catch (e) {
      console.error("Reminder failed", e);
    }
  };

  const triggerDownloadReport = () => {
    window.open(`${API_URL}/reports/daily/pdf?date_str=${reportDate}&branch=${reportBranch}`, '_blank');
  };

  const triggerBroadcastReport = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/reports/daily/send?email=owner@velbilling.com&whatsapp_no=+919443311122`, {
        method: 'POST'
      });
      if (res.ok) {
        showToast("Daily audit report dispatched!");
        fetchWhatsappLogs();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleOcrScanFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    setOcrScanning(true);
    const formData = new FormData();
    formData.append("file", files[0]);

    try {
      const res = await fetch(`${API_URL}/ai/ocr-scanner`, {
        method: 'POST',
        body: formData
      });

      if (res.ok) {
        const data = await res.json();
        clearCart();
        for (const item of data.items) {
          const matched = products.find(p => p.id === item.product_id);
          if (matched) {
            addToCart(matched, item.quantity);
            setTimeout(() => {
              updateCartItem(item.product_id, {
                rate: item.rate,
                discount_percentage: 0
              });
            }, 100);
          }
        }
        setShowOcrModal(false);
        setActiveTab('pos');
        showToast("OCR receipt contents parsed!");
      }
    } catch (err) {
      console.error(err);
      alert("OCR scanning failed.");
    } finally {
      setOcrScanning(false);
    }
  };

  const handleVoiceBilling = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech Recognition API is not supported in this browser. Please use Chrome/Edge.");
      return;
    }

    const rec = new SpeechRecognition();
    rec.continuous = false;
    rec.lang = tamilMode ? 'ta-IN' : 'en-IN';
    rec.interimResults = false;

    rec.onstart = () => {
      setIsListening(true);
      setVoiceTranscript('Listening...');
    };

    rec.onresult = async (event: any) => {
      const text = event.results[0][0].transcript;
      setVoiceTranscript(text);
      setIsListening(false);

      try {
        const res = await fetch(`${API_URL}/ai/voice-billing`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ transcript: text })
        });
        
        if (res.ok) {
          const data = await res.json();
          if (data.detected_items.length === 0) {
            alert(`Voice text: "${text}" could not be mapped. Try: "3 of PROD001" or "2 sunflower oil".`);
            return;
          }
          data.detected_items.forEach((item: any) => {
            const matched = products.find(p => p.item_code === item.item_code);
            if (matched) {
              addToCart(matched, item.quantity);
            }
          });
          showToast(`Added ${data.detected_items.length} items from Voice!`);
        }
      } catch (err) {
        console.error(err);
      }
    };

    rec.onerror = () => {
      setIsListening(false);
      setVoiceTranscript('Failed. Try again.');
    };

    rec.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = rec;
    rec.start();
  };

  const triggerPrintPdf = () => {
    if (selectedInvoice) {
      window.open(`${API_URL}/invoices/${selectedInvoice.invoice_no}/pdf`, '_blank');
    }
  };

  // Role Filtering logic
  const isAllowed = (tabName: string) => {
    if (currentUserRole === 'owner') return true;
    if (currentUserRole === 'manager') {
      return ['pos', 'analytics', 'inventory', 'customers', 'whatsapp'].includes(tabName);
    }
    if (currentUserRole === 'cashier') {
      return ['pos', 'whatsapp', 'settings'].includes(tabName);
    }
    return false;
  };

  const handleSaveTheme = () => {
    setActiveTheme(previewTheme);
    localStorage.setItem('vel-billing-theme', previewTheme);
    showToast(`Saved ${previewTheme.toUpperCase()} theme settings!`);
  };

  const downloadImportTemplate = () => {
    const headers = ["item_code", "item_name", "item_name_tamil", "category", "brand", "purchase_price", "rate", "discount_price", "stock", "min_stock", "unit_type", "branch", "description"];
    const exampleRow = ["AVM-101", "Tago Plastic Bucket", "டேகோ பிளாஸ்டிக் வாளி", "Household", "AVM", "50.00", "65.00", "60.00", "150", "20", "pcs", "Branch A", "Heavy duty durable plastic bucket"];
    
    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(","), exampleRow.join(",")].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "Vel_Billing_Inventory_Template.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportToCSV = () => {
    const headers = ["item_code", "item_name", "item_name_tamil", "category", "brand", "purchase_price", "rate", "discount_price", "stock", "min_stock", "unit_type", "branch", "description"];
    const rows = products.map(p => [
      p.item_code,
      p.item_name,
      p.item_name_tamil || '',
      p.category || '',
      p.brand || '',
      p.purchase_price,
      p.rate,
      p.discount_price || p.rate,
      p.stock,
      p.min_stock,
      p.unit_type || 'pcs',
      p.branch || 'Branch A',
      p.description || ''
    ]);
    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(","), ...rows.map(e => e.map(val => `"${val.toString().replace(/"/g, '""')}"`).join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `AVM_Plastics_Inventory_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleImportCSV = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const text = event.target?.result as string;
        const lines = text.split(/\r?\n/);
        if (lines.length <= 1) {
          alert("Invalid file: Empty template or CSV file");
          return;
        }

        const parsedItems = [];
        const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
        
        for (let i = 1; i < lines.length; i++) {
          const line = lines[i].trim();
          if (!line) continue;
          
          const matches = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || line.split(',');
          const values = matches.map(v => v.trim().replace(/^"|"$/g, '').replace(/""/g, '"'));
          
          const item: any = {};
          headers.forEach((header, idx) => {
            const val = values[idx];
            if (header === "item_code") {
              item.item_code = val;
            } else if (header === "item_name") {
              item.item_name = val;
            } else if (header === "item_name_tamil") {
              item.item_name_tamil = val || null;
            } else if (header === "category") {
              item.category = val || null;
            } else if (header === "brand") {
              item.brand = val || null;
            } else if (header === "purchase_price") {
              item.purchase_price = parseFloat(val) || 0;
            } else if (header === "rate") {
              item.rate = parseFloat(val) || 0;
            } else if (header === "discount_price") {
              item.discount_price = parseFloat(val) || 0;
            } else if (header === "stock") {
              item.stock = parseInt(val) || 0;
            } else if (header === "min_stock") {
              item.min_stock = parseInt(val) || 10;
            } else if (header === "unit_type") {
              item.unit_type = val || 'pcs';
            } else if (header === "branch") {
              item.branch = val || 'Branch A';
            } else if (header === "description") {
              item.description = val || null;
            }
          });
          
          if (item.item_code && item.item_name) {
            parsedItems.push(item);
          }
        }

        if (parsedItems.length === 0) {
          alert("No valid items found in the CSV/Excel file.");
          return;
        }

        const res = await fetch(`${API_URL}/products/bulk-import`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(parsedItems)
        });
        
        if (res.ok) {
          const summary = await res.json();
          showToast(`Import Success: Added ${summary.added}, Updated ${summary.updated}, Failed ${summary.failed}`);
          fetchProducts();
        } else {
          alert("Failed to submit bulk import to backend");
        }
      } catch (err) {
        console.error(err);
        alert("Error parsing CSV: " + err);
      }
    };
    reader.readAsText(file);
  };

  // Filter products by category tab
  const getUniqueCategories = () => {
    const cats = new Set(products.map(p => p.category || 'General'));
    return ['All', ...Array.from(cats)];
  };

  // Global search filtering
  const filteredProducts = products.filter(p => {
    const matchesSearch = p.item_code.toLowerCase().includes(globalSearch.toLowerCase()) || 
                          p.item_name.toLowerCase().includes(globalSearch.toLowerCase()) ||
                          (p.category && p.category.toLowerCase().includes(globalSearch.toLowerCase()));
    
    const matchesCategory = selectedCategoryFilter === 'All' || (p.category || 'General') === selectedCategoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={`theme-${activeTheme} min-h-screen flex flex-col transition-all duration-300`}>
      
      {/* GLOBAL TOAST BANNER */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#0F172A] text-white border border-[#D4AF37] px-6 py-3 rounded-full shadow-2xl flex items-center space-x-2 text-sm font-semibold"
          >
            <CheckCircle className="h-4 w-4 text-[#D4AF37]" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TOP NAVIGATION HEADER (Stripe-like & Premium Space) */}
      <header className="h-20 border-b border-slate-200/80 bg-white/70 backdrop-blur-xl flex items-center justify-between px-8 z-30 shrink-0 sticky top-0">
        
        {/* Left Title */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-[#0F172A] to-[#2563EB] flex items-center justify-center font-bold text-lg text-[#D4AF37] shadow">
              V
            </div>
            <div>
              <h1 className="font-heading font-bold text-lg tracking-tight text-[#0F172A]">
                VEL BILLING
              </h1>
              <p className="text-[9px] text-[#8C6D1F] uppercase tracking-widest font-bold font-heading">4.0 Premium ERP</p>
            </div>
          </div>
        </div>

        {/* Center: Stripe-like Global Search */}
        <div className="flex-1 max-w-lg mx-8 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input 
            type="text" 
            placeholder={t('searchPlaceholder')} 
            value={globalSearch}
            onChange={(e) => setGlobalSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-slate-100/80 border border-slate-200/60 rounded-full text-xs font-medium outline-none focus:border-[#D4AF37] focus:bg-white focus:ring-4 focus:ring-[#D4AF37]/10 transition-all text-slate-800"
          />
        </div>

        {/* Right Info Controls */}
        <div className="flex items-center space-x-5 text-slate-600">
          
          {/* Tamil/English Language Switcher */}
          <div className="flex items-center space-x-0.5 bg-slate-100 p-0.5 rounded-lg border border-slate-200/50">
            <button 
              type="button"
              onClick={() => setLang('en')} 
              className={`px-2.5 py-1.5 text-[9px] font-extrabold rounded-md transition-all ${lang === 'en' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              EN
            </button>
            <button 
              type="button"
              onClick={() => setLang('ta')} 
              className={`px-2.5 py-1.5 text-[9px] font-extrabold rounded-md transition-all ${lang === 'ta' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              தமிழ்
            </button>
          </div>

          {/* Notification Button */}
          <button className="relative p-2 rounded-full hover:bg-slate-100 transition">
            <Bell className="h-4.5 w-4.5 text-slate-700" />
            <span className="absolute top-1 right-1.5 h-2 w-2 rounded-full bg-red-500" />
          </button>

          {/* Quick toggle theme display for settings shortcut */}
          <button 
            onClick={() => {
              const nextTheme: Record<ThemeType, ThemeType> = {
                light: 'blue',
                blue: 'gold',
                gold: 'silver',
                silver: 'dark',
                dark: 'light'
              };
              setActiveTheme(nextTheme[activeTheme]);
            }}
            className="p-2 rounded-full hover:bg-slate-100 transition"
            title="Cycle theme appearance"
          >
            {activeTheme === 'dark' ? <Moon className="h-4.5 w-4.5" /> : <Sun className="h-4.5 w-4.5" />}
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-2 border-l border-slate-200 pl-4">
            <div className="h-8 w-8 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center font-bold text-xs text-[#D4AF37]">
              {currentUserRole[0].toUpperCase()}
            </div>
            <div className="text-left hidden md:block">
              <p className="text-xs font-bold text-slate-800 capitalize leading-tight">{currentUserRole}</p>
              <p className="text-[9px] font-mono text-slate-400 font-num">
                {selectedBranch === 'All' ? 'All Branches' : selectedBranch}
              </p>
            </div>
          </div>

          <div className="text-right text-[10px] font-mono hidden lg:block font-num text-slate-400">
            {clientDate}
          </div>
        </div>
      </header>

      {/* CORE WORKSPACE GRID */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* LEFT NAV SIDEBAR (Notion-level spacing) */}
        <aside className="w-64 border-r border-slate-200/60 bg-white/40 backdrop-blur-xl flex flex-col justify-between p-5 shrink-0 z-10">
          <div className="space-y-6">
            
            {/* Active role simulation selectors */}
            <div className="space-y-1.5 bg-slate-100/50 p-2 rounded-2xl border border-slate-200/40">
              <label className="text-[8px] uppercase text-slate-500 tracking-wider font-bold block px-1.5 font-heading">Simulated Permission Role</label>
              <div className="grid grid-cols-3 gap-1">
                {(['owner', 'manager', 'cashier'] as const).map(role => (
                  <button
                    key={role}
                    onClick={() => {
                      setCurrentUserRole(role);
                      if (role === 'cashier' && !['pos', 'whatsapp', 'settings'].includes(activeTab)) {
                        setActiveTab('pos');
                      } else if (role === 'manager' && activeTab === 'employees') {
                        setActiveTab('pos');
                      }
                    }}
                    className={`text-[9px] py-1.5 rounded-lg font-bold capitalize transition-all ${
                      currentUserRole === role ? 'bg-white shadow text-[#0F172A] border border-slate-200' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            <nav className="space-y-1">
              {[
                { id: 'pos', name: t('billing'), icon: ShoppingCart },
                { id: 'analytics', name: t('dashboard'), icon: LayoutDashboard },
                { id: 'inventory', name: t('inventory'), icon: Package },
                { id: 'expenses', name: t('expenses'), icon: DollarSign },
                { id: 'customers', name: t('customers'), icon: Users },
                { id: 'employees', name: 'Cashier Shifts', icon: Clock },
                { id: 'whatsapp', name: 'WhatsApp Logs', icon: MessageSquare },
                { id: 'settings', name: t('settings'), icon: SettingsIcon },
              ].map((tab) => {
                if (!isAllowed(tab.id)) return null;
                const Icon = tab.icon;
                const active = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`w-full flex items-center space-x-3.5 px-4 py-3 rounded-xl transition-all ${
                      active 
                        ? 'bg-white shadow-md text-[#0F172A] border border-slate-200/80 font-semibold' 
                        : 'text-slate-500 hover:bg-slate-50/80 hover:text-slate-800'
                    }`}
                  >
                    <Icon className={`h-4.5 w-4.5 ${active ? 'text-[#D4AF37]' : 'text-slate-400'}`} />
                    <span className="text-xs font-medium font-heading">{tab.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Bottom Controls */}
          <div className="space-y-3 pt-4 border-t border-slate-200/50">
            
            <div className="flex items-center justify-between px-1">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider font-heading">Tamil Mode</span>
              <button 
                onClick={toggleTamilMode} 
                className={`text-[9px] px-2 py-1 rounded-full font-bold uppercase transition-all ${
                  tamilMode ? 'bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30' : 'bg-slate-200 text-slate-600'
                }`}
              >
                {tamilMode ? 'தமிழ்' : 'EN'}
              </button>
            </div>

            {/* Session controller */}
            <div className="bg-slate-100/50 border border-slate-200/40 p-3 rounded-2xl space-y-2">
              <div className="flex items-center space-x-2.5">
                <div className="h-6 w-6 rounded-full bg-slate-300 flex items-center justify-center text-[10px] font-bold text-slate-700">
                  {currentUserRole[0].toUpperCase()}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold text-slate-800 leading-tight">Session Shift</p>
                  <p className="text-[8px] text-slate-400 font-mono truncate">{activeSession ? `ID: ${activeSession.id}` : 'Logged Out'}</p>
                </div>
              </div>
              {activeSession ? (
                <button onClick={handleEndShift} className="w-full text-center bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white border border-red-500/20 text-[9px] py-1 rounded-lg font-bold transition">
                  Close Shift
                </button>
              ) : (
                <button onClick={handleStartShift} className="w-full text-center bg-[#10B981]/10 hover:bg-[#10B981] text-[#10B981] hover:text-white border border-[#10B981]/20 text-[9px] py-1 rounded-lg font-bold transition">
                  Log Shift Session
                </button>
              )}
            </div>

          </div>
        </aside>

        {/* WORKSPACE AREA */}
        <main className="flex-1 p-8 overflow-y-auto z-10 bg-transparent">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              
              {/* POS WORKSPACE REDESIGNED */}
              {activeTab === 'pos' && (
                <div className="grid grid-cols-3 gap-8 h-full items-start animate-slide-up">
                  
                  {/* Left Column: Product Entry (Floating luxury card) */}
                  <div className="space-y-6">
                    <div className="luxury-panel p-6 space-y-5">
                      <div className="flex items-center justify-between border-b border-slate-200/50 pb-3">
                        <h3 className="text-xs uppercase text-slate-400 tracking-wider font-bold font-heading">1. Product Entry</h3>
                        <span className="text-[10px] bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-0.5 rounded-full font-bold">POS Scanner Mode</span>
                      </div>

                      <div className="space-y-4">
                        
                        {/* Luxury Input Item Code */}
                        <div className="space-y-1 relative">
                          <label className="text-[10px] uppercase text-slate-500 tracking-wider font-bold block px-1 font-heading">Item Code *</label>
                          <input 
                            ref={codeInputRef}
                            type="text" 
                            placeholder="Type or Scan code..." 
                            value={inputCode}
                            onChange={(e) => handleCodeChange(e.target.value)}
                            onKeyDown={handleCodeKeyDown}
                            className="w-full luxury-input font-num text-sm text-center font-bold tracking-wider"
                          />
                        </div>

                        {/* Product Detail preview block */}
                        <div className="bg-slate-100/50 border border-slate-200/40 p-4 rounded-2xl space-y-3">
                          <span className="text-[9px] uppercase text-slate-400 font-bold tracking-wider block font-heading">Product Details</span>
                          {posProduct ? (
                            <div className="space-y-1">
                              <h4 className="text-sm font-bold text-slate-800 leading-tight">
                                {tamilMode && posProduct.item_name_tamil ? posProduct.item_name_tamil : posProduct.item_name}
                              </h4>
                              <p className="text-[10px] text-slate-400 font-heading">Category: {posProduct.category || 'General'}</p>
                            </div>
                          ) : (
                            <p className="text-xs text-slate-400 italic font-heading">Enter code to search details...</p>
                          )}
                        </div>

                        {/* Luxury Input Quantity and Rate */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase text-slate-500 tracking-wider font-bold block px-1 font-heading">Selling Rate (₹)</label>
                            <input 
                              type="text"
                              value={posRate}
                              onChange={(e) => setPosRate(e.target.value)}
                              className="w-full luxury-input font-num text-center font-bold"
                              disabled={!posProduct}
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] uppercase text-slate-500 tracking-wider font-bold block px-1 font-heading">Quantity</label>
                            <input 
                              ref={qtyInputRef}
                              type="number" 
                              min="1"
                              value={posQty}
                              onChange={(e) => setPosQty(e.target.value)}
                              onKeyDown={handleQtyKeyDown}
                              className="w-full luxury-input font-num text-center font-bold"
                              disabled={!posProduct}
                            />
                          </div>
                        </div>

                        {/* Flat Row Discount */}
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase text-slate-500 tracking-wider font-bold block px-1 font-heading">Line Discount (₹)</label>
                          <input 
                            ref={discountInputRef}
                            type="number" 
                            min="0"
                            value={posDiscount}
                            onChange={(e) => setPosDiscount(e.target.value)}
                            onKeyDown={handleDiscountKeyDown}
                            className="w-full luxury-input font-num text-center font-bold"
                            disabled={!posProduct}
                          />
                        </div>

                        {/* Action Add Button */}
                        <button 
                          onClick={addPosRow}
                          disabled={!posProduct}
                          className="w-full luxury-btn-primary"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          <span>Insert Item to Bill</span>
                        </button>

                      </div>
                    </div>

                    {/* AI scanner shortcuts */}
                    <div className="grid grid-cols-2 gap-4">
                      <button 
                        onClick={handleVoiceBilling}
                        className="luxury-card p-4 flex items-center justify-between text-left"
                      >
                        <div>
                          <h4 className="text-xs font-bold text-slate-800 font-heading">Voice POS</h4>
                          <p className="text-[9px] text-slate-400 truncate font-heading">{isListening ? 'Listening...' : 'Click to dictate'}</p>
                        </div>
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center text-white ${isListening ? 'bg-red-500 animate-pulse' : 'bg-[#D4AF37]'}`}>
                          <Mic className="h-4 w-4" />
                        </div>
                      </button>

                      <button 
                        onClick={() => setShowOcrModal(true)}
                        className="luxury-card p-4 flex items-center justify-between text-left"
                      >
                        <div>
                          <h4 className="text-xs font-bold text-slate-800 font-heading">OCR Import</h4>
                          <p className="text-[9px] text-slate-400 font-heading">OCR scan bills</p>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-slate-900 text-white flex items-center justify-center">
                          <Camera className="h-4 w-4" />
                        </div>
                      </button>
                    </div>

                  </div>

                  {/* Center Column: Bill Items (Zebra floating luxury table) */}
                  <div className="col-span-2 space-y-6">
                    <div className="luxury-panel p-6 space-y-4">
                      <div className="flex justify-between items-center border-b border-slate-200/50 pb-3">
                        <h3 className="text-xs uppercase text-slate-400 tracking-wider font-bold font-heading">2. Bill Summary Items</h3>
                        <span className="text-xs font-num font-bold text-[#D4AF37]">
                          Total Count: {cart.length}
                        </span>
                      </div>

                      {/* Luxury Table list */}
                      <div className="overflow-x-auto">
                        <table className="luxury-table">
                          <thead>
                            <tr>
                              <th className="w-12 text-center">S.No</th>
                              <th>Code</th>
                              <th>Item Name</th>
                              <th className="text-right">Rate</th>
                              <th className="text-center">Qty</th>
                              <th className="text-center">Discount</th>
                              <th className="text-right">Total</th>
                              <th className="w-12"></th>
                            </tr>
                          </thead>
                          <tbody>
                            {cart.length === 0 ? (
                              <tr>
                                <td colSpan={8} className="p-12 text-center text-slate-400 italic">
                                  <div className="flex flex-col items-center justify-center space-y-2">
                                    <ShoppingCart className="h-8 w-8 text-slate-300" />
                                    <p className="text-xs font-heading font-medium">POS Cart is currently empty</p>
                                    <p className="text-[10px] text-slate-400">Scan codes or type inputs to populate the current wholesale transaction.</p>
                                  </div>
                                </td>
                              </tr>
                            ) : (
                              cart.map((item, idx) => (
                                <tr key={item.id}>
                                  <td className="text-center font-num text-slate-400 text-xs">{idx + 1}</td>
                                  <td className="font-num font-bold text-slate-500 text-xs">{item.item_code}</td>
                                  <td className="font-semibold text-slate-800 text-xs">
                                    <div>{item.item_name}</div>
                                    {item.item_name_tamil && (
                                      <div className="text-[10px] text-slate-400 font-medium Tamil mt-0.5">{item.item_name_tamil}</div>
                                    )}
                                  </td>
                                  <td className="text-right font-num text-slate-700 text-xs">
                                    <div className="flex flex-col items-end space-y-1">
                                      <span className="font-bold text-slate-850">₹{item.rate.toFixed(2)}</span>
                                      <div className="flex space-x-1">
                                        <button 
                                          type="button"
                                          onClick={() => updateCartItem(item.id, { rate: item.original_price })}
                                          className={`px-1 py-0.5 rounded text-[8px] font-extrabold uppercase border ${
                                            Math.abs(item.rate - item.original_price) < 0.01 
                                              ? 'bg-indigo-50 border-indigo-200 text-indigo-600' 
                                              : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-600'
                                          }`}
                                          title="Switch to Retail Price"
                                        >
                                          Retail
                                        </button>
                                        <button 
                                          type="button"
                                          onClick={() => updateCartItem(item.id, { rate: item.discount_price })}
                                          className={`px-1 py-0.5 rounded text-[8px] font-extrabold uppercase border ${
                                            Math.abs(item.rate - item.discount_price) < 0.01 
                                              ? 'bg-[#D4AF37]/10 border-[#D4AF37]/30 text-[#8C6D1F]' 
                                              : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-600'
                                          }`}
                                          title="Switch to Wholesale Price"
                                        >
                                          Wholesale
                                        </button>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="text-center">
                                    <input 
                                      type="number"
                                      min="1"
                                      value={item.quantity}
                                      onChange={(e) => updateCartItem(item.id, { quantity: parseInt(e.target.value) || 1 })}
                                      className="w-12 bg-white/80 border border-slate-200 text-center rounded-lg text-xs font-bold p-1 text-slate-800 font-num outline-none focus:border-[#D4AF37]"
                                    />
                                  </td>
                                  <td className="text-center">
                                    <input 
                                      type="number"
                                      min="0"
                                      value={item.discount_percentage}
                                      onChange={(e) => updateCartItem(item.id, { discount_percentage: parseFloat(e.target.value) || 0 })}
                                      className="w-16 bg-white/80 border border-slate-200 text-center rounded-lg text-xs font-bold p-1 text-slate-800 font-num outline-none focus:border-[#D4AF37]"
                                    />
                                  </td>
                                  <td className="text-right font-num font-bold text-[#10B981] text-xs">₹{item.total.toFixed(2)}</td>
                                  <td className="text-center">
                                    <button 
                                      onClick={() => removeFromCart(item.id)}
                                      className="text-slate-400 hover:text-red-500 p-1"
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </button>
                                  </td>
                                </tr>
                              ))
                            )}
                          </tbody>
                        </table>
                      </div>

                      {/* Payment, Customer summary card block inside workspace grid */}
                      <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-200/50">
                        {/* Customer section */}
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] uppercase text-slate-400 font-bold font-heading">Wholesale Customer</span>
                            <button onClick={() => setShowAddCustomerModal(true)} className="text-[9px] text-[#D4AF37] font-bold font-heading">Add New</button>
                          </div>
                          
                          <select 
                            className="w-full luxury-input text-xs font-semibold"
                            value={customer ? customer.id : ''}
                            onChange={(e) => {
                              const cid = parseInt(e.target.value);
                              const matched = customers.find(c => c.id === cid);
                              setCustomer(matched || null);
                            }}
                          >
                            <option value="">Walk-in Cash Retailer</option>
                            {customers.map((c) => (
                              <option key={c.id} value={c.id}>
                                {c.name} ({c.phone}) {c.balance_due > 0 ? `| Due: ₹${c.balance_due}` : ''}
                              </option>
                            ))}
                          </select>

                          {customer && (
                            <div className="bg-slate-100/50 border border-slate-200/40 p-3 rounded-2xl text-[10px] space-y-1 leading-relaxed">
                              <p className="font-bold text-slate-800">{customer.name}</p>
                              <p className="text-slate-400 font-num">Phone: {customer.phone}</p>
                              <div className="flex justify-between text-[#D4AF37] font-bold">
                                <span>Loyalty Points:</span>
                                <span className="font-num">{customer.loyalty_points || 0} pts</span>
                              </div>
                              {customer.balance_due > 0 && (
                                <p className="text-red-500 font-bold font-num">Credit Due: ₹{customer.balance_due.toFixed(2)}</p>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Checkout totals section */}
                        <div className="bg-slate-50 border border-slate-200/60 p-4 rounded-2xl space-y-3">
                          <div className="flex justify-between text-xs text-slate-500 font-heading">
                            <span>Subtotal:</span>
                            <span className="font-num font-bold text-slate-700">₹{getCartSubtotal().toFixed(2)}</span>
                          </div>
                          
                          <div className="flex justify-between items-center text-xs text-slate-500 font-heading">
                            <span>Flat Disc (₹):</span>
                            <input 
                              type="number"
                              min="0"
                              value={overallDiscount}
                              onChange={(e) => setOverallDiscount(parseFloat(e.target.value) || 0)}
                              className="w-16 bg-white border border-slate-200 text-right rounded p-1 font-bold text-xs text-slate-800 font-num outline-none focus:border-[#D4AF37]"
                            />
                          </div>

                          {customer && (customer.loyalty_points ?? 0) > 0 && (
                            <div className="flex justify-between items-center text-xs text-[#D4AF37] font-heading font-bold">
                              <span>Redeem Points:</span>
                              <input 
                                type="number"
                                min="0"
                                max={Math.min(customer.loyalty_points ?? 0, getCartGrandTotal())}
                                value={pointsToRedeem}
                                onChange={(e) => setPointsToRedeem(Math.min(parseInt(e.target.value) || 0, customer.loyalty_points ?? 0))}
                                className="w-14 bg-white border border-slate-200 text-right rounded p-1 font-bold text-xs text-[#D4AF37] font-num outline-none"
                              />
                            </div>
                          )}

                          <div className="flex justify-between items-end border-t border-slate-200/50 pt-2 font-heading font-bold">
                            <span className="text-xs text-slate-800">Grand Total:</span>
                            <span className="text-xl text-[#10B981] font-num font-black">
                              ₹{(getCartGrandTotal() - pointsToRedeem).toFixed(2)}
                            </span>
                          </div>

                          {/* Payment selector */}
                          <div className="space-y-1.5">
                            <span className="text-[9px] uppercase text-slate-400 font-bold block font-heading">Payment</span>
                            <div className="grid grid-cols-2 gap-1.5 text-[9px] font-bold">
                              {['cash', 'upi', 'card', 'credit'].map((pType) => (
                                <button
                                  key={pType}
                                  type="button"
                                  onClick={() => {
                                    setPaymentType(pType as any);
                                    if (pType === 'credit' && !customer) {
                                      alert("Select registered customer for Credit sales!");
                                      setPaymentType('cash');
                                    }
                                  }}
                                  className={`py-1.5 rounded-lg border text-center transition-all ${
                                    paymentType === pType 
                                      ? 'bg-slate-900 border-slate-900 text-white shadow' 
                                      : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'
                                  }`}
                                >
                                  {pType.toUpperCase()}
                                </button>
                              ))}
                            </div>
                          </div>

                          {paymentType === 'credit' && (
                            <div className="space-y-1 text-left">
                              <span className="text-[8px] uppercase text-slate-400 font-bold font-heading">Due Date</span>
                              <input 
                                type="date"
                                value={creditDueDate}
                                onChange={(e) => setCreditDueDate(e.target.value)}
                                className="w-full p-1 bg-white border border-slate-200 text-[10px] text-center font-num rounded font-bold"
                              />
                            </div>
                          )}

                          <button 
                            onClick={triggerCheckout} 
                            disabled={cart.length === 0} 
                            className="w-full luxury-btn-primary mt-2"
                          >
                            <CreditCard className="h-4 w-4 mr-2" />
                            <span>Confirm Checkout</span>
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              )}

              {/* DASHBOARD TAB (Redesigned with Premium layout) */}
              {activeTab === 'analytics' && dashboardSummary && (
                <div className="space-y-8 animate-slide-up">
                  
                  {/* Hero Section: Today's Sales Premium Card */}
                  <div className="luxury-panel p-8 bg-gradient-to-r from-slate-900 to-indigo-950 text-white relative overflow-hidden flex flex-col justify-between min-h-[220px]">
                    <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 h-64 w-64 rounded-full bg-gradient-to-br from-[#D4AF37]/10 to-[#2563EB]/10 blur-3xl" />
                    
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-xs uppercase text-[#D4AF37] font-bold tracking-widest font-heading">Wholesale Performance Hub</span>
                        <h2 className="text-4xl font-black font-num text-white mt-1.5">
                          ₹{dashboardSummary.today_sales.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </h2>
                        <p className="text-xs text-slate-400 mt-1 font-heading">Total Recorded Revenue Today</p>
                      </div>
                      <div className="bg-white/10 p-3 rounded-2xl border border-white/10 text-[#D4AF37]">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-6 pt-6 border-t border-white/10 text-xs font-num">
                      <div>
                        <p className="text-slate-400 font-heading">Net Profit Today</p>
                        <p className="text-sm font-bold text-[#10B981] mt-0.5">₹{dashboardSummary.net_profit.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 font-heading">Inventory Value</p>
                        <p className="text-sm font-bold mt-0.5">₹{dashboardSummary.inventory_value.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 font-heading">Total Orders</p>
                        <p className="text-sm font-bold mt-0.5">{dashboardSummary.total_invoices} sales</p>
                      </div>
                      <div>
                        <p className="text-slate-400 font-heading">Outstanding Credit</p>
                        <p className="text-sm font-bold text-red-400 mt-0.5">₹{dashboardSummary.outstanding_credit.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard metrics grid */}
                  <div className="grid grid-cols-4 gap-6">
                    {[
                      { name: 'Weekly Volume', val: dashboardSummary.weekly_sales, label: 'Last 7 Days', color: 'border-[#2563EB]' },
                      { name: 'Monthly Volume', val: dashboardSummary.monthly_sales, label: '30 Days Sales', color: 'border-[#D4AF37]' },
                      { name: 'Monthly Profit', val: dashboardSummary.monthly_profit, label: 'Net Margins', color: 'border-[#10B981]' },
                      { name: 'Average Ticket Size', val: dashboardSummary.average_bill_value, label: 'Per Invoice', color: 'border-slate-300' }
                    ].map((metric) => (
                      <div key={metric.name} className={`luxury-card p-5 border-l-4 ${metric.color} flex flex-col justify-between`}>
                        <span className="text-[10px] uppercase text-slate-500 font-bold tracking-wider font-heading">{metric.name}</span>
                        <h3 className="text-xl font-bold font-num text-slate-800 mt-1">
                          ₹{parseFloat(metric.val as any).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </h3>
                        <span className="text-[9px] text-slate-400 mt-1.5 block font-heading">{metric.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* OWNER-ONLY PROFIT & VALUATION PANEL */}
                  {currentUserRole === 'owner' && (
                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <h3 className="text-[10px] uppercase text-[#D4AF37] font-extrabold tracking-widest font-heading">
                        Expected Profit & Valuation (Owner View)
                      </h3>
                      <div className="grid grid-cols-4 gap-6">
                        <div className="luxury-card p-5 border-l-4 border-[#2563EB]">
                          <span className="text-[9px] uppercase text-slate-500 font-bold tracking-wider font-heading">Total Inventory Value (Shop Cost)</span>
                          <h3 className="text-xl font-bold font-num text-slate-800 mt-1">
                            ₹{parseFloat(dashboardSummary.inventory_value || 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                          </h3>
                          <span className="text-[9px] text-slate-400 mt-1.5 block font-heading">Based on Shop Price</span>
                        </div>
                        <div className="luxury-card p-5 border-l-4 border-slate-400">
                          <span className="text-[9px] uppercase text-slate-500 font-bold tracking-wider font-heading">Potential Revenue (MRP)</span>
                          <h3 className="text-xl font-bold font-num text-slate-800 mt-1">
                            ₹{parseFloat(dashboardSummary.potential_revenue || 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                          </h3>
                          <span className="text-[9px] text-slate-400 mt-1.5 block font-heading">Based on Original Price</span>
                        </div>
                        <div className="luxury-card p-5 border-l-4 border-[#D4AF37]">
                          <span className="text-[9px] uppercase text-slate-500 font-bold tracking-wider font-heading">Selling Revenue (Discount)</span>
                          <h3 className="text-xl font-bold font-num text-slate-800 mt-1">
                            ₹{parseFloat(dashboardSummary.selling_revenue || 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                          </h3>
                          <span className="text-[9px] text-slate-400 mt-1.5 block font-heading">Based on Discount Price</span>
                        </div>
                        <div className="luxury-card p-5 border-l-4 border-[#10B981]">
                          <span className="text-[9px] uppercase text-slate-500 font-bold tracking-wider font-heading">Expected Profit</span>
                          <h3 className="text-xl font-bold font-num text-[#10B981] mt-1">
                            ₹{parseFloat(dashboardSummary.expected_profit || 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                          </h3>
                          <span className="text-[9px] text-[#10B981] mt-1.5 block font-heading">Profit = Discount - Shop Price</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Daily Report Dispatch controls */}
                  <div className="luxury-panel p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-xs uppercase text-slate-400 font-bold font-heading tracking-wider">Report Dispatch Center</h4>
                      <p className="text-xs text-slate-600 mt-0.5 font-heading">Generate daily business reports and broadcast audit alerts.</p>
                    </div>
                    <div className="flex items-center space-x-3 text-xs">
                      <input 
                        type="date"
                        value={reportDate}
                        onChange={(e) => setReportDate(e.target.value)}
                        className="luxury-input py-1.5 font-num text-center font-bold"
                      />
                      <select 
                        value={reportBranch} 
                        onChange={(e) => setReportBranch(e.target.value)}
                        className="luxury-input py-1.5 font-semibold text-xs"
                      >
                        {branches.map(b => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                      <button onClick={triggerDownloadReport} className="luxury-btn-secondary h-10 px-4 flex items-center space-x-1 font-heading text-xs">
                        <Download className="h-4 w-4" />
                        <span>Download PDF</span>
                      </button>
                      <button onClick={triggerBroadcastReport} className="luxury-btn-primary h-10 px-4 flex items-center space-x-1 font-heading text-xs">
                        <Send className="h-4 w-4" />
                        <span>Broadcast Alerts</span>
                      </button>
                    </div>
                  </div>

                  {/* Charts and statistics */}
                  <div className="grid grid-cols-3 gap-8">
                    {/* Sales trends chart */}
                    <div className="col-span-2 luxury-panel p-6 space-y-4">
                      <h3 className="text-xs uppercase text-slate-400 font-bold tracking-wider font-heading">Revenue vs Profit Timeline (15 Days)</h3>
                      <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={salesHistory} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                            <defs>
                              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#2563EB" stopOpacity={0.2}/>
                                <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                              </linearGradient>
                              <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10B981" stopOpacity={0.15}/>
                                <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                            <XAxis dataKey="formatted_date" stroke="#94A3B8" fontSize={9} tickLine={false} />
                            <YAxis stroke="#94A3B8" fontSize={9} tickLine={false} />
                            <Tooltip contentStyle={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '12px', fontSize: '11px', fontFamily: 'monospace' }} />
                            <Legend verticalAlign="top" height={36} iconType="circle" />
                            <Area name="Sales Revenue" type="monotone" dataKey="sales" stroke="#2563EB" strokeWidth={2} fillOpacity={1} fill="url(#colorSales)" />
                            <Area name="Net profit" type="monotone" dataKey="profit" stroke="#10B981" strokeWidth={2} fillOpacity={1} fill="url(#colorProfit)" />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Best sellers */}
                    <div className="luxury-panel p-6 space-y-4">
                      <h3 className="text-xs uppercase text-slate-400 font-bold tracking-wider font-heading font-num">Fast-Moving Inventory Items</h3>
                      <div className="space-y-4">
                        {bestSellers.slice(0, 5).map((item, idx) => (
                          <div key={item.product_id} className="flex items-center space-x-3 bg-slate-50 border border-slate-200/50 p-3 rounded-2xl">
                            <div className="h-7 w-7 rounded-xl bg-slate-200 flex items-center justify-center font-bold font-num text-xs text-slate-700">
                              #{idx + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-bold text-slate-800 truncate font-heading">{item.item_name}</p>
                              <p className="text-[9px] text-slate-400 font-num">Qty sold: {item.quantity_sold}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-xs font-bold text-[#10B981] font-num">₹{parseFloat(item.revenue).toFixed(2)}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* AI Stock warnings and dead stock */}
                  <div className="grid grid-cols-2 gap-8">
                    <div className="luxury-panel p-6 space-y-4">
                      <h3 className="text-xs uppercase text-slate-400 font-bold tracking-wider font-heading flex items-center">
                        <Shield className="h-4 w-4 mr-2 text-[#D4AF37]" />
                        <span>AI Replenishment Forecasting (Next 30 Days)</span>
                      </h3>
                      <div className="space-y-3 max-h-72 overflow-y-auto pr-2 text-xs">
                        {aiPredictions.map((pred) => (
                          <div key={pred.product_id} className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                            <div>
                              <p className="font-bold text-slate-800 font-heading">{pred.item_name}</p>
                              <p className="text-[9px] text-slate-400 font-num">Stock: {pred.current_stock} units | Demand: {pred.predicted_demand_next_30_days} units</p>
                            </div>
                            <span className={`px-2 py-0.5 rounded-full text-[8px] font-bold ${
                              pred.status === 'CRITICAL' ? 'bg-red-50 text-red-500 border border-red-200' :
                              pred.status === 'RESTOCK' ? 'bg-amber-50 text-amber-500 border border-amber-200' :
                              'bg-green-50 text-green-500 border border-green-200'
                            }`}>
                              {pred.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="luxury-panel p-6 space-y-4">
                      <h3 className="text-xs uppercase text-slate-400 font-bold tracking-wider font-heading flex items-center">
                        <TrendingDown className="h-4 w-4 mr-2 text-red-500" />
                        <span>Dead Stock Report (Over 30 days unsold)</span>
                      </h3>
                      <div className="space-y-3 max-h-72 overflow-y-auto pr-2 text-xs">
                        {deadStock.length === 0 ? (
                          <p className="text-center text-slate-400 italic py-12 font-heading">No stagnant catalog items identified.</p>
                        ) : (
                          deadStock.map((prod) => (
                            <div key={prod.product_id} className="flex justify-between items-center border-b border-slate-100 pb-2.5 font-num">
                              <div>
                                <p className="font-bold text-slate-800 font-heading">{prod.item_name}</p>
                                <p className="text-[9px] text-slate-400">Last Sale: {prod.last_sold_date ? new Date(prod.last_sold_date).toLocaleDateString() : 'Never'}</p>
                              </div>
                              <span className="font-bold text-amber-500">{prod.stock} units</span>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {/* INVENTORY MANAGEMENT WORKSPACE */}
              {activeTab === 'inventory' && (
                <div className="space-y-8 animate-slide-up">
                  
                  {/* Alert Headers */}
                  <div className="grid grid-cols-3 gap-6">
                    {/* Expiry alerts banner */}
                    <div className="luxury-panel p-5 border-l-4 border-red-500 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs uppercase text-slate-500 font-bold tracking-wider font-heading">Product Expiry Date Warning</h4>
                        <p className="text-sm font-black text-red-500 font-num mt-1">
                          {expiryAlerts.expired.length} EXPIRED / {expiryAlerts.expiring_7.length} Expiring in 7 Days
                        </p>
                      </div>
                      <div className="text-[9px] text-slate-400 mt-2 font-heading">
                        Requires immediate stock auditing.
                      </div>
                    </div>

                    {/* Low Stock alerts */}
                    <div className="luxury-panel p-5 border-l-4 border-amber-500 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs uppercase text-slate-500 font-bold tracking-wider font-heading">Low Stock warning alerts</h4>
                        <p className="text-sm font-black text-amber-500 font-num mt-1">
                          {products.filter(p => p.stock <= p.min_stock).length} products below threshold
                        </p>
                      </div>
                      <div className="text-[9px] text-slate-400 mt-2 font-heading">
                        Suggested purchase orders calculated by AI forecasts.
                      </div>
                    </div>

                    {/* Total inventory statistics */}
                    <div className="luxury-panel p-5 border-l-4 border-[#D4AF37] flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs uppercase text-slate-500 font-bold tracking-wider font-heading">Total Inventory Value</h4>
                        <p className="text-sm font-black text-slate-800 font-num mt-1">
                          ₹{products.reduce((acc, curr) => acc + (curr.stock * curr.rate), 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </p>
                      </div>
                      <div className="text-[9px] text-[#D4AF37] mt-2 font-bold font-heading">
                        Valued at standard retail prices.
                      </div>
                    </div>
                  </div>

                  {/* Filter Section: Category Chips */}
                  <div className="luxury-panel p-5 space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      
                      {/* Search and chip category */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] uppercase text-slate-400 font-bold font-heading mr-2">Categories:</span>
                        {getUniqueCategories().map((cat) => (
                          <button
                            key={cat}
                            onClick={() => setSelectedCategoryFilter(cat)}
                            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                              selectedCategoryFilter === cat 
                                ? 'bg-slate-900 text-white' 
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>

                      <div className="flex items-center space-x-2">
                        {/* Import template / upload controls */}
                        <button 
                          type="button"
                          onClick={downloadImportTemplate} 
                          className="luxury-btn-secondary h-10 px-3 flex items-center space-x-1 font-heading text-[11px] border border-slate-200"
                          title="Download Pre-formatted CSV Import Template"
                        >
                          <Download className="h-3.5 w-3.5 text-slate-500" />
                          <span>Get Template</span>
                        </button>

                        <label className="luxury-btn-secondary h-10 px-3 flex items-center space-x-1 font-heading text-[11px] border border-slate-200 cursor-pointer">
                          <Upload className="h-3.5 w-3.5 text-slate-500" />
                          <span>Import CSV/Excel</span>
                          <input 
                            type="file" 
                            accept=".csv" 
                            onChange={handleImportCSV} 
                            className="hidden" 
                          />
                        </label>

                        <button 
                          type="button"
                          onClick={exportToCSV} 
                          className="luxury-btn-secondary h-10 px-3 flex items-center space-x-1 font-heading text-[11px] border border-slate-200"
                          title="Export All Products to Excel/CSV"
                        >
                          <FileText className="h-3.5 w-3.5 text-slate-500" />
                          <span>Export Excel/CSV</span>
                        </button>

                        <button 
                          type="button"
                          onClick={() => setShowAddProductModal(true)} 
                          className="luxury-btn-primary h-10 px-4 flex items-center space-x-1 font-heading text-[11px]"
                        >
                          <Plus className="h-3.5 w-3.5" />
                          <span>Add New Product</span>
                        </button>
                      </div>

                    </div>
                  </div>

                  {/* Redesigned Inventory Management Workspace Cards & Tables */}
                  <div className="luxury-panel p-6 space-y-4">
                    <div className="overflow-x-auto">
                      <table className="luxury-table">
                        <thead>
                          <tr className="text-xs uppercase tracking-wider text-slate-500 font-bold border-b border-slate-100">
                            <th className="p-3 text-left">Item No</th>
                            <th className="p-3 text-left">Item Name</th>
                            <th className="p-3 text-left">Tamil Name</th>
                            <th className="p-3 text-left">Category</th>
                            <th className="p-3 text-left">Brand</th>
                            {(currentUserRole === 'owner' || currentUserRole === 'manager') && (
                              <th className="p-3 text-right">Shop Price</th>
                            )}
                            <th className="p-3 text-right">Original Price</th>
                            <th className="p-3 text-right">Discount Price</th>
                            <th className="p-3 text-center">Stock Qty</th>
                            <th className="p-3 text-center">Min Qty</th>
                            <th className="p-3 text-center">Unit</th>
                            <th className="p-3 text-center">Branch</th>
                            <th className="p-3 text-center">Status</th>
                            <th className="p-3 text-center w-20">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredProducts.map((prod) => {
                            const isLow = prod.stock <= prod.min_stock && prod.stock > 0;
                            const isOut = prod.stock <= 0;
                            return (
                              <tr key={prod.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                                <td className="p-3 font-num font-bold text-slate-800 text-xs">{prod.item_code}</td>
                                <td className="p-3 font-semibold text-slate-800 text-xs">{prod.item_name}</td>
                                <td className="p-3 text-slate-600 text-xs font-semibold">{prod.item_name_tamil || '-'}</td>
                                <td className="p-3 text-slate-500 text-xs">{prod.category || 'N/A'}</td>
                                <td className="p-3 text-slate-500 text-xs font-semibold">{prod.brand || 'N/A'}</td>
                                {(currentUserRole === 'owner' || currentUserRole === 'manager') && (
                                  <td className="p-3 text-right font-num text-slate-500 text-xs">₹{parseFloat(prod.purchase_price || 0).toFixed(2)}</td>
                                )}
                                <td className="p-3 text-right font-num text-slate-500 text-xs">₹{parseFloat(prod.rate || 0).toFixed(2)}</td>
                                <td className="p-3 text-right font-num font-bold text-slate-900 text-xs">₹{parseFloat(prod.discount_price || 0).toFixed(2)}</td>
                                <td className="p-3 text-center font-num font-bold text-slate-800 text-xs">{prod.stock}</td>
                                <td className="p-3 text-center font-num text-slate-400 text-xs">{prod.min_stock}</td>
                                <td className="p-3 text-center text-slate-500 text-xs font-semibold uppercase">{prod.unit_type || 'pcs'}</td>
                                <td className="p-3 text-center text-slate-600 font-medium text-xs">{prod.branch || 'Branch A'}</td>
                                <td className="p-3 text-center">
                                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold ${
                                    isOut ? 'bg-red-50 text-red-600 border border-red-200' :
                                    isLow ? 'bg-rose-50 text-rose-600 border border-rose-100 animate-pulse' :
                                    'bg-emerald-50 text-emerald-600 border border-emerald-100'
                                  }`}>
                                    {isOut ? '⚠ OUT OF STOCK' : isLow ? '⚠ Low Stock' : 'Healthy'}
                                  </span>
                                </td>
                                <td className="p-3 text-center">
                                  <div className="flex items-center justify-center space-x-2">
                                    <button 
                                      onClick={() => {
                                        setEditingProductId(prod.id);
                                        setNewProdCode(prod.item_code);
                                        setNewProdName(prod.item_name);
                                        setNewProdNameTamil(prod.item_name_tamil || '');
                                        setNewProdCategory(prod.category || '');
                                        setNewProdBrand(prod.brand || '');
                                        setNewProdRate(prod.rate.toString());
                                        setNewProdPurchasePrice(prod.purchase_price.toString());
                                        setNewProdDiscount(prod.discount_price ? prod.discount_price.toString() : prod.rate.toString());
                                        setNewProdStock(prod.stock.toString());
                                        setNewProdMinStock(prod.min_stock.toString());
                                        setNewProdBranch(prod.branch || 'Branch A');
                                        setNewProdUnitType(prod.unit_type || 'pcs');
                                        setNewProdDescription(prod.description || '');
                                        setNewProdBarcode(prod.barcode || '');
                                        setShowAddProductModal(true);
                                      }}
                                      className="text-slate-400 hover:text-[#0A4D8C] transition-colors p-1"
                                      title="Edit Product"
                                    >
                                      <Edit2 className="h-4 w-4" />
                                    </button>
                                    <button 
                                      onClick={() => handleDeleteProduct(prod.id)}
                                      className="text-slate-400 hover:text-red-500 transition-colors p-1"
                                      title="Delete Product"
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
              )}

              {/* OPERATIONAL EXPENSES LOG */}
              {activeTab === 'expenses' && (
                <div className="grid grid-cols-3 gap-8 items-start animate-slide-up">
                  
                  {/* Left Create Form */}
                  <div className="luxury-panel p-6 space-y-4">
                    <h3 className="text-xs uppercase text-slate-400 font-bold tracking-wider font-heading border-b border-slate-200/50 pb-2">Record Operating Expense</h3>
                    <form onSubmit={handleAddExpense} className="space-y-4">
                      
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase text-slate-500 tracking-wider font-bold block px-1 font-heading">Expense Category *</label>
                        <select 
                          value={newExpCategory}
                          onChange={(e) => setNewExpCategory(e.target.value)}
                          className="w-full luxury-input font-semibold"
                        >
                          <option value="Rent">Rent</option>
                          <option value="Salary">Salaries</option>
                          <option value="Electricity">Electricity</option>
                          <option value="Internet">Internet / Network</option>
                          <option value="Miscellaneous">Miscellaneous</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] uppercase text-slate-500 tracking-wider font-bold block px-1 font-heading">Expense Amount (₹) *</label>
                        <input 
                          required 
                          type="number" 
                          step="0.01" 
                          placeholder="0.00" 
                          value={newExpAmount}
                          onChange={(e) => setNewExpAmount(e.target.value)}
                          className="w-full luxury-input font-num font-bold text-center"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] uppercase text-slate-500 tracking-wider font-bold block px-1 font-heading">Description</label>
                        <input 
                          type="text" 
                          placeholder="Office utility bills or salary advances..." 
                          value={newExpDesc}
                          onChange={(e) => setNewExpDesc(e.target.value)}
                          className="w-full luxury-input"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase text-slate-500 tracking-wider font-bold block px-1 font-heading">Branch</label>
                          <select 
                            value={newExpBranch}
                            onChange={(e) => setNewExpBranch(e.target.value)}
                            className="w-full luxury-input font-semibold text-xs"
                          >
                            {branches.map(b => (
                              <option key={b} value={b}>{b}</option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] uppercase text-slate-500 tracking-wider font-bold block px-1 font-heading">Date</label>
                          <input 
                            required
                            type="date" 
                            value={newExpDate}
                            onChange={(e) => setNewExpDate(e.target.value)}
                            className="w-full luxury-input font-num text-center text-xs"
                          />
                        </div>
                      </div>

                      <button type="submit" className="w-full luxury-btn-primary mt-2">
                        <span>Save Expense Entry</span>
                      </button>

                    </form>
                  </div>

                  {/* Right registry list */}
                  <div className="col-span-2 luxury-panel p-6 space-y-4">
                    <h3 className="text-xs uppercase text-slate-400 font-bold tracking-wider font-heading">Operational Expense ledger</h3>
                    
                    <div className="overflow-x-auto">
                      <table className="luxury-table">
                        <thead>
                          <tr>
                            <th className="w-12">ID</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th className="text-right">Amount</th>
                            <th className="text-center">Branch</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {expenses.map((exp) => (
                            <tr key={exp.id}>
                              <td className="font-num text-slate-400 text-xs">{exp.id}</td>
                              <td className="font-bold text-slate-800 text-xs">{exp.category}</td>
                              <td className="text-slate-600 text-xs">{exp.description || 'N/A'}</td>
                              <td className="text-right font-num font-bold text-red-500 text-xs">₹{parseFloat(exp.amount).toFixed(2)}</td>
                              <td className="text-center text-slate-500 font-medium text-xs">{exp.branch}</td>
                              <td className="font-num text-slate-400 text-xs">{new Date(exp.date).toLocaleDateString()}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
              )}

              {/* CUSTOMERS & LEDGER CRM PRESET */}
              {activeTab === 'customers' && (
                <div className="grid grid-cols-3 gap-8 items-start animate-slide-up">
                  
                  {/* Left Customer Card List Grid */}
                  <div className="col-span-2 space-y-6">
                    <div className="luxury-panel p-6 space-y-6">
                      
                      {/* Search Header */}
                      <div className="flex justify-between items-center">
                        <div className="relative w-80">
                          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                          <input 
                            type="text"
                            placeholder="Search Customer registry..."
                            value={custSearch}
                            onChange={(e) => {
                              setCustSearch(e.target.value);
                              setTimeout(() => fetchCustomers(), 50);
                            }}
                            className="w-full luxury-input pl-10 text-xs"
                          />
                        </div>

                        <button 
                          onClick={() => setShowAddCustomerModal(true)} 
                          className="luxury-btn-primary h-10 px-4 flex items-center space-x-1 font-heading text-xs"
                        >
                          <UserPlus className="h-4.5 w-4.5" />
                          <span>Register Client</span>
                        </button>
                      </div>

                      {/* CRM Card Deck */}
                      <div className="grid grid-cols-2 gap-4">
                        {customers.map((c) => (
                          <div 
                            key={c.id}
                            className={`luxury-card p-5 space-y-4 border transition-all ${
                              activeLedgerCustomer?.id === c.id ? 'border-[#D4AF37] ring-4 ring-[#D4AF37]/5' : 'border-slate-200/50'
                            }`}
                          >
                            <div className="flex items-center space-x-3.5">
                              <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-700">
                                <User className="h-5 w-5" />
                              </div>
                              <div>
                                <h4 className="font-bold text-slate-800 text-sm leading-tight">{c.name}</h4>
                                <p className="text-[10px] text-slate-400 font-num">{c.phone}</p>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-[10px] font-num border-t border-slate-100 pt-3">
                              <div>
                                <p className="text-slate-400 font-heading">Outstanding</p>
                                <p className="font-bold text-red-500 text-xs">₹{c.balance_due.toFixed(2)}</p>
                              </div>
                              <div>
                                <p className="text-slate-400 font-heading">Loyalty Balance</p>
                                <p className="font-bold text-[#D4AF37] text-xs">{c.loyalty_points || 0} pts</p>
                              </div>
                            </div>

                            <div className="flex justify-between items-center border-t border-slate-100 pt-3">
                              <button 
                                onClick={() => {
                                  setSelectedCustHistory(c);
                                  setShowCustBillsModal(true);
                                }}
                                className="text-[10px] text-slate-500 hover:text-slate-800 font-bold font-heading"
                              >
                                History
                              </button>

                              <div className="flex items-center space-x-2">
                                <button 
                                  onClick={() => fetchCustomerLedger(c.id)}
                                  className="text-[10px] text-[#2563EB] hover:underline font-bold font-heading"
                                >
                                  View Ledger
                                </button>
                                {c.balance_due > 0 && (
                                  <button 
                                    onClick={() => sendDueReminder(c)} 
                                    className="h-7 w-7 rounded-full bg-emerald-50 border border-emerald-200 text-[#10B981] flex items-center justify-center hover:bg-emerald-100 transition"
                                    title="WhatsApp Reminder"
                                  >
                                    <Send className="h-3.5 w-3.5" />
                                  </button>
                                )}
                              </div>
                            </div>

                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Right Statement view */}
                  <div>
                    {ledgerData ? (
                      <div className="luxury-panel p-6 space-y-6">
                        <div className="flex justify-between items-center border-b border-slate-200/50 pb-4">
                          <div>
                            <h3 className="font-bold text-slate-800 text-sm font-heading">{ledgerData.customer.name}</h3>
                            <p className="text-[10px] text-slate-400">Statement timeline</p>
                          </div>
                          
                          <button 
                            onClick={() => setShowAddPaymentModal(true)} 
                            className="bg-[#10B981] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg hover:brightness-105 transition"
                          >
                            Receive Payment
                          </button>
                        </div>

                        {/* Timeline */}
                        <div className="space-y-4 max-h-[420px] overflow-y-auto pr-1 text-xs">
                          {ledgerData.ledger.map((entry: any) => {
                            const isDebit = entry.type_code === 'DEBIT';
                            return (
                              <div key={entry.id} className="relative border-l-2 border-slate-100 pl-4 ml-1.5 pb-2">
                                <div className={`absolute -left-[5px] top-1 h-2 w-2 rounded-full ${isDebit ? 'bg-red-500' : 'bg-[#10B981]'}`} />
                                <div className="flex justify-between items-start">
                                  <div>
                                    <p className="font-bold text-slate-800 font-heading leading-tight">{entry.description}</p>
                                    <span className="text-[9px] text-slate-400 font-num">{new Date(entry.date).toLocaleString()}</span>
                                  </div>
                                  <div className="text-right">
                                    <p className={`font-bold font-num ${isDebit ? 'text-red-500' : 'text-[#10B981]'}`}>
                                      {isDebit ? '+' : '-'} ₹{parseFloat(entry.amount).toFixed(2)}
                                    </p>
                                    <p className="text-[9px] text-slate-400 font-num">Bal: ₹{parseFloat(entry.running_balance).toFixed(2)}</p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                      </div>
                    ) : (
                      <div className="luxury-panel p-8 text-center text-slate-400 text-xs italic font-heading py-20">
                        Select "View Ledger" from a client to display statement logs.
                      </div>
                    )}
                  </div>

                </div>
              )}

              {/* EMPLOYEE SHIFTS TRACKER */}
              {activeTab === 'employees' && (
                <div className="grid grid-cols-3 gap-8 items-start animate-slide-up">
                  
                  {/* Left panel current shift */}
                  <div className="luxury-panel p-6 space-y-4">
                    <h3 className="text-xs uppercase text-slate-400 font-bold tracking-wider font-heading border-b border-slate-200/50 pb-2">Shift Session</h3>
                    
                    {activeSession ? (
                      <div className="space-y-4 text-center">
                        <div className="h-10 w-10 rounded-full bg-emerald-50 border border-emerald-200 text-[#10B981] flex items-center justify-center mx-auto">
                          <Check className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 text-sm">Shift Status: ACTIVE</p>
                          <p className="text-[10px] text-slate-400 mt-1">Logged: {new Date(activeSession.login_time).toLocaleTimeString()}</p>
                        </div>

                        <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl text-left text-xs font-num space-y-2">
                          <div className="flex justify-between">
                            <span className="text-slate-400">Bills Created:</span>
                            <span className="font-bold text-slate-800">{activeSession.bills_created || 0} bills</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Sales Generated:</span>
                            <span className="font-bold text-[#10B981]">₹{(activeSession.sales_generated || 0).toLocaleString()}</span>
                          </div>
                        </div>

                        <button onClick={handleEndShift} className="w-full luxury-btn-danger">
                          <span>Logout Shift Session</span>
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4 text-center">
                        <p className="text-xs text-slate-400 italic font-heading py-8">No cashier shift active. Log shift tracking to start sales tally audits.</p>
                        <button onClick={handleStartShift} className="w-full luxury-btn-primary">
                          <span>Start New Shift Session</span>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Performance leaderboard */}
                  <div className="col-span-2 luxury-panel p-6 space-y-4">
                    <h3 className="text-xs uppercase text-slate-400 font-bold tracking-wider font-heading">Shift Performance leaderboard</h3>
                    
                    <div className="overflow-x-auto">
                      <table className="luxury-table">
                        <thead>
                          <tr>
                            <th>Cashier</th>
                            <th>Email</th>
                            <th className="text-center">Role</th>
                            <th className="text-center">Bills Count</th>
                            <th className="text-right">Sales Tally</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cashierPerformance.map((cash) => (
                            <tr key={cash.id}>
                              <td className="font-bold text-slate-800 text-xs flex items-center space-x-2">
                                <div className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center font-bold text-[9px] text-[#D4AF37]">
                                  {cash.full_name[0]}
                                </div>
                                <span>{cash.full_name}</span>
                              </td>
                              <td className="font-num text-slate-400 text-xs">{cash.email}</td>
                              <td className="text-center">
                                <span className="inline-block px-2 py-0.5 rounded-full text-[8px] bg-slate-100 border text-slate-600 uppercase font-bold">
                                  {cash.role}
                                </span>
                              </td>
                              <td className="text-center font-num text-slate-700 text-xs">{cash.bills_created}</td>
                              <td className="text-right font-num font-bold text-[#10B981] text-xs">₹{cash.sales_generated.toLocaleString()}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
              )}

              {/* WHATSAPP AUTOMATION LOGS */}
              {activeTab === 'whatsapp' && (
                <div className="luxury-panel p-6 space-y-4 animate-slide-up">
                  <div>
                    <h3 className="text-xs uppercase text-slate-400 font-bold tracking-wider font-heading">WhatsApp Delivery Ledger</h3>
                    <p className="text-xs text-slate-500 font-heading">Live review of automated wholesale alerts, credit due reminders, and WhatsApp PDF invoices.</p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="luxury-table">
                      <thead>
                        <tr>
                          <th className="w-12">ID</th>
                          <th>Client Name</th>
                          <th>Phone</th>
                          <th>Invoice No</th>
                          <th>Message Payload</th>
                          <th className="text-center">Status</th>
                          <th>Time</th>
                          <th>Link</th>
                        </tr>
                      </thead>
                      <tbody>
                        {whatsappLogs.map((log) => (
                          <tr key={log.id}>
                            <td className="font-num text-slate-400 text-xs">{log.id}</td>
                            <td className="font-semibold text-slate-800 text-xs">{log.customer_name}</td>
                            <td className="font-num text-slate-500 text-xs">{log.phone}</td>
                            <td className="font-num font-bold text-[#2563EB] text-xs">{log.invoice_no || 'N/A'}</td>
                            <td className="text-slate-600 text-xs truncate max-w-xs">{log.message}</td>
                            <td className="text-center">
                              <span className={`inline-block px-2 py-0.5 rounded-full text-[8px] font-bold ${
                                log.status === 'Sent' ? 'bg-green-50 text-green-500 border border-green-200' : 'bg-slate-100 border text-slate-500'
                              }`}>
                                {log.status}
                              </span>
                            </td>
                            <td className="font-num text-slate-400 text-xs">{new Date(log.timestamp).toLocaleString()}</td>
                            <td className="text-center">
                              <a href={log.whatsapp_web_url} target="_blank" rel="noopener noreferrer" className="text-[10px] text-[#2563EB] font-bold">
                                View Link
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* SETTINGS CENTER */}
              {activeTab === 'settings' && (
                <div className="grid grid-cols-3 gap-8 items-start animate-slide-up">
                  
                  {/* Left Column Settings Tabs Selection */}
                  <div className="luxury-panel p-6 space-y-4">
                    <h3 className="text-xs uppercase text-slate-400 font-bold tracking-wider font-heading border-b border-slate-200/50 pb-2">Settings Sections</h3>
                    
                    <div className="space-y-1 font-heading text-xs">
                      {[
                        { id: 'general', name: 'General Settings', desc: 'Shop details and logo metadata' },
                        { id: 'billing', name: 'Billing Settings', desc: 'Receipt prints and footers text' },
                        { id: 'whatsapp', name: 'WhatsApp Campaigns', desc: 'Alert automation integrations' },
                        { id: 'appearance', name: 'Appearance Settings', desc: 'Luxury themes customization' },
                        { id: 'database', name: 'Backup & Restore', desc: 'Local database administration' }
                      ].map((item) => (
                        <div key={item.id} className="p-2.5 rounded-xl hover:bg-slate-50 transition cursor-pointer flex items-center justify-between border border-transparent hover:border-slate-100">
                          <div>
                            <p className="font-bold text-slate-800">{item.name}</p>
                            <p className="text-[9px] text-slate-400 mt-0.5">{item.desc}</p>
                          </div>
                          <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Middle Column Form (Appearance Settings and General settings combination) */}
                  <div className="col-span-2 space-y-6">
                    
                    {/* Appearance theme picker custom box */}
                    <div className="luxury-panel p-6 space-y-5">
                      <div>
                        <h3 className="text-xs uppercase text-slate-400 font-bold tracking-wider font-heading">Appearance Themes Customization</h3>
                        <p className="text-xs text-slate-500 font-heading">Personalize color configurations and luxury reflections style dynamically.</p>
                      </div>

                      <div className="grid grid-cols-5 gap-3.5 text-center">
                        {[
                          { id: 'light', name: 'Premium Light', color: 'bg-white border-slate-200 text-[#0F172A]' },
                          { id: 'blue', name: 'Royal Blue', color: 'bg-[#EEF2F6] border-slate-300 text-[#2563EB]' },
                          { id: 'gold', name: 'Gold Luxury', color: 'bg-[#FAF6E8] border-[#D4AF37]/30 text-[#D4AF37]' },
                          { id: 'silver', name: 'Silver Professional', color: 'bg-[#F1F1F1] border-slate-300 text-slate-700' },
                          { id: 'dark', name: 'Dark Executive', color: 'bg-[#111317] border-white/5 text-white' }
                        ].map((themeOpt) => (
                          <button
                            key={themeOpt.id}
                            type="button"
                            onClick={() => setPreviewTheme(themeOpt.id as any)}
                            className={`p-3 rounded-2xl border flex flex-col items-center justify-between text-[10px] font-bold h-24 transition-all ${themeOpt.color} ${
                              previewTheme === themeOpt.id ? 'ring-4 ring-[#D4AF37]/40 scale-105' : 'opacity-80 hover:opacity-100'
                            }`}
                          >
                            <span className="text-[8px] uppercase tracking-wider">{themeOpt.name}</span>
                            <div className={`h-6 w-6 rounded-full border border-slate-200 flex items-center justify-center ${themeOpt.color}`}>
                              {previewTheme === themeOpt.id && <Check className="h-3 w-3 text-[#D4AF37]" />}
                            </div>
                          </button>
                        ))}
                      </div>

                      {/* Theme Live Preview Box */}
                      <div className={`theme-${previewTheme} bg-slate-50 p-4 rounded-2xl border border-slate-200/60 text-xs font-heading`}>
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-2">Live Preview Box</p>
                        <div className="luxury-panel p-4 space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="font-bold">VEL BILLING Dashboard Sample</span>
                            <span className="font-num font-bold text-[#10B981]">₹98,540.00</span>
                          </div>
                          <div className="flex space-x-2">
                            <button className="luxury-btn-primary h-8 px-3 py-0 text-[10px] rounded-lg">Primary Action</button>
                            <button className="luxury-btn-secondary h-8 px-3 py-0 text-[10px] rounded-lg">Secondary</button>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end pt-2">
                        <button onClick={handleSaveTheme} className="luxury-btn-primary">
                          <span>Save Theme Selection</span>
                        </button>
                      </div>
                    </div>

                    {/* Receipt Settings Form */}
                    <form onSubmit={handleSaveTemplate} className="luxury-panel p-6 space-y-4">
                      <h3 className="text-xs uppercase text-slate-400 font-bold tracking-wider font-heading border-b border-slate-200/50 pb-2">Wholesale Receipt Template Configuration</h3>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase text-slate-500 tracking-wider font-bold block px-1 font-heading">Shop Name *</label>
                          <input required type="text" value={tplShopName} onChange={(e) => setTplShopName(e.target.value)} className="w-full luxury-input font-bold" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase text-slate-500 tracking-wider font-bold block px-1 font-heading">GSTIN Number</label>
                          <input type="text" value={tplGstNumber} onChange={(e) => setTplGstNumber(e.target.value)} className="w-full luxury-input font-num uppercase" />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] uppercase text-slate-500 tracking-wider font-bold block px-1 font-heading">Address Location *</label>
                        <input required type="text" value={tplShopAddress} onChange={(e) => setTplShopAddress(e.target.value)} className="w-full luxury-input" />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase text-slate-500 tracking-wider font-bold block px-1 font-heading">Contact Mobile *</label>
                          <input required type="text" value={tplMobileNumber} onChange={(e) => setTplMobileNumber(e.target.value)} className="w-full luxury-input font-num" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase text-slate-500 tracking-wider font-bold block px-1 font-heading">Receipt Header Tagline</label>
                          <input type="text" value={tplCustomText} onChange={(e) => setTplCustomText(e.target.value)} className="w-full luxury-input" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase text-slate-500 tracking-wider font-bold block px-1 font-heading">Font Size (pt)</label>
                          <input type="number" min="6" max="18" value={tplFontSize} onChange={(e) => setTplFontSize(parseInt(e.target.value) || 9)} className="w-full luxury-input font-num" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase text-slate-500 tracking-wider font-bold block px-1 font-heading">Template Logo</label>
                          <input type="file" accept="image/*" onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onloadend = () => {
                                setTplLogoUrl(reader.result as string);
                              };
                              reader.readAsDataURL(file);
                            }
                          }} className="w-full text-xs text-slate-500 file:mr-2 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-[10px] file:font-semibold file:bg-slate-900 file:text-white hover:file:opacity-90 cursor-pointer" />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] uppercase text-slate-500 tracking-wider font-bold block px-1 font-heading">Receipt footer disclaimer</label>
                        <textarea rows={2} value={tplFooterMessage} onChange={(e) => setTplFooterMessage(e.target.value)} className="w-full luxury-input font-mono text-xs" />
                      </div>

                      <button type="submit" className="w-full luxury-btn-primary">
                        <span>Save Receipt configuration</span>
                      </button>
                    </form>

                    {/* Database administration */}
                    <div className="luxury-panel p-6 space-y-4">
                      <h3 className="text-xs uppercase text-slate-400 font-bold tracking-wider font-heading border-b border-slate-200/50 pb-2">Database Backup & Recovery</h3>
                      <p className="text-xs text-slate-500 font-heading">Download structural tables backup file binaries or restore snapshot from local storage.</p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <button onClick={handleDownloadBackup} className="luxury-btn-secondary font-heading text-xs">
                          <Download className="h-4.5 w-4.5 mr-2" />
                          <span>Download SQLite Backup</span>
                        </button>

                        <div className="relative border-2 border-dashed border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center hover:bg-slate-50 transition cursor-pointer text-center text-xs">
                          <input type="file" accept=".db" onChange={handleRestoreDatabase} className="absolute inset-0 opacity-0 cursor-pointer" />
                          <Upload className="h-5 w-5 text-slate-500 mb-1" />
                          <span className="font-bold text-slate-700 font-heading">Restore DB file (.db)</span>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </main>

      </div>

      {/* LUXURY PAYMENT SUCCESS MODAL DIALOG */}
      <AnimatePresence>
        {showLuxurySuccessModal && selectedInvoice && (
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="luxury-panel w-full max-w-md bg-white border border-slate-200/80 overflow-hidden shadow-2xl relative p-8 text-center space-y-6"
            >
              {/* Checkmark circle animated */}
              <div className="h-16 w-16 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center mx-auto border-2 border-[#10B981]/30">
                <motion.div 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }} 
                  transition={{ delay: 0.15, type: 'spring' }}
                >
                  <Check className="h-8 w-8 stroke-[3]" />
                </motion.div>
              </div>

              <div>
                <h3 className="font-heading font-bold text-lg text-slate-800">Invoice Created Successfully</h3>
                <p className="text-xs text-[#2563EB] font-num font-bold mt-1 tracking-wider">{selectedInvoice.invoice_no}</p>
              </div>

              <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl text-xs font-num space-y-2 text-left">
                <div className="flex justify-between">
                  <span className="text-slate-400 font-heading">Client:</span>
                  <span className="font-bold text-slate-800">{selectedInvoice.customer ? selectedInvoice.customer.name : 'Walk-in'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-heading">Loyalty Earned:</span>
                  <span className="font-bold text-[#D4AF37] font-num">+{selectedInvoice.points_earned} pts</span>
                </div>
                <div className="flex justify-between border-t border-slate-100 pt-2 font-bold font-num text-sm">
                  <span className="text-slate-800 font-heading">Grand Total:</span>
                  <span className="text-[#10B981]">₹{parseFloat(selectedInvoice.grand_total).toFixed(2)}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setSelectedInvoice(null);
                    setShowLuxurySuccessModal(false);
                  }}
                  className="luxury-btn-secondary h-11 text-xs"
                >
                  New Transaction
                </button>
                <button
                  onClick={triggerPrintPdf}
                  className="luxury-btn-primary h-11 text-xs flex items-center justify-center"
                >
                  <Printer className="h-4.5 w-4.5 mr-2" />
                  <span>Print Invoice</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CHECKOUT CONFIRMATION MODAL */}
      {showCheckoutModal && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="luxury-panel w-full max-w-sm bg-white overflow-hidden p-6 relative space-y-4">
            <button onClick={() => setShowCheckoutModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <X className="h-5 w-5" />
            </button>
            <div className="text-center">
              <h3 className="font-heading font-bold text-base text-slate-800">Checkout Wholesale Bill</h3>
              <p className="text-xs text-slate-400 mt-0.5">Please review quantities before execution</p>
            </div>
            
            <div className="bg-slate-50 border border-slate-100 p-3.5 rounded-2xl text-xs space-y-2 font-num">
              <div className="flex justify-between">
                <span className="text-slate-400 font-heading">Total Items:</span>
                <span className="font-bold text-slate-800">{cart.reduce((a, b) => a + b.quantity, 0)} Units</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-heading">Payment:</span>
                <span className="font-bold text-slate-800 uppercase">{paymentType}</span>
              </div>
              <div className="flex justify-between border-t border-slate-100 pt-2 font-bold text-sm">
                <span className="text-slate-800 font-heading">Grand Total:</span>
                <span className="text-[#10B981]">₹{(getCartGrandTotal() - pointsToRedeem).toFixed(2)}</span>
              </div>
            </div>

            <button onClick={handleCheckoutSubmit} disabled={loading} className="w-full luxury-btn-primary">
              <span>{loading ? 'Executing...' : 'Confirm Transaction'}</span>
            </button>
          </div>
        </div>
      )}

      {/* OCR MODAL DIALOG */}
      {showOcrModal && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="luxury-panel w-full max-w-sm bg-white p-6 relative space-y-4">
            <button onClick={() => setShowOcrModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <X className="h-5 w-5" />
            </button>
            <div className="text-center">
              <h3 className="font-heading font-bold text-base text-slate-800">OCR Receipt Import</h3>
              <p className="text-xs text-slate-400">Scan wholesale physical bills to import POS rows</p>
            </div>

            <div className="border-2 border-dashed border-slate-200 hover:border-[#D4AF37]/50 rounded-2xl p-6 text-center transition cursor-pointer relative bg-slate-50">
              <input type="file" accept="image/*" onChange={handleOcrScanFile} className="absolute inset-0 opacity-0 cursor-pointer" />
              <p className="text-xs text-slate-600 font-bold">Select Receipt Invoice file</p>
              <p className="text-[10px] text-slate-400 mt-1">Image or PDF format supported</p>
            </div>
            
            {ocrScanning && (
              <p className="text-xs text-[#D4AF37] font-bold text-center animate-pulse">Running AI OCR layout parser...</p>
            )}
          </div>
        </div>
      )}

      {/* CUSTOMER REGISTER BEFORE CHECKOUT */}
      {showCustomerCollectModal && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="luxury-panel w-full max-w-sm bg-white p-6 relative space-y-4">
            <button onClick={() => setShowCustomerCollectModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <X className="h-5 w-5" />
            </button>
            <div className="text-center">
              <h3 className="font-heading font-bold text-base text-slate-800">Client Mobile Information</h3>
              <p className="text-xs text-slate-400">Add retail customer metadata to collect loyalty balances</p>
            </div>
            <div className="space-y-3 text-xs">
              <input type="text" placeholder="Name" value={collectName} onChange={(e) => setCollectName(e.target.value)} className="w-full luxury-input font-bold" />
              <input type="text" placeholder="Mobile phone" value={collectPhone} onChange={(e) => setCollectPhone(e.target.value)} className="w-full luxury-input font-num" />
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button 
                onClick={() => {
                  setCustomer(null);
                  setShowCustomerCollectModal(false);
                  setShowCheckoutModal(true);
                }} 
                className="luxury-btn-secondary h-10 text-xs"
              >
                Skip Client
              </button>
              <button 
                onClick={async () => {
                  if (!collectName.trim() || !collectPhone.trim()) {
                    alert("Customer Name and Phone are required!");
                    return;
                  }
                  setLoading(true);
                  try {
                    const res = await fetch(`${API_URL}/customers/`, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        name: collectName,
                        phone: collectPhone,
                        address: null,
                        gst: null,
                        balance_due: 0.0,
                        credit_limit: 50000.0
                      })
                    });
                    if (res.ok) {
                      const savedCust = await res.json();
                      setCustomer(savedCust);
                      fetchCustomers();
                      setShowCustomerCollectModal(false);
                      setShowCheckoutModal(true);
                    } else {
                      const err = await res.json();
                      alert(err.detail || "Error saving customer");
                    }
                  } catch (err) {
                    console.error("Error saving customer:", err);
                  } finally {
                    setLoading(false);
                  }
                }}
                className="luxury-btn-primary h-10 text-xs"
              >
                Save & Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RECORD CUSTOMER LEDGER PAYMENT MODAL */}
      {showAddPaymentModal && activeLedgerCustomer && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="luxury-panel w-full max-w-sm bg-white p-6 relative space-y-4">
            <button onClick={() => setShowAddPaymentModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <X className="h-5 w-5" />
            </button>
            <div className="text-center">
              <h3 className="font-heading font-bold text-base text-slate-800">Receive Outstanding Credit</h3>
              <p className="text-xs text-slate-400">Record payment from: {activeLedgerCustomer.name}</p>
            </div>
            
            <form onSubmit={handleRecordPayment} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase text-slate-500 tracking-wider font-bold block px-1">Payment Amount (₹) *</label>
                <input required type="number" step="0.01" value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} className="w-full luxury-input font-num text-center text-sm font-bold" />
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-xs">
                <select value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)} className="w-full luxury-input font-semibold">
                  <option value="cash">Cash Mode</option>
                  <option value="upi">UPI / GPay</option>
                  <option value="bank">Bank Transfer</option>
                </select>
                <input type="text" placeholder="TXN reference" value={paymentRef} onChange={(e) => setPaymentRef(e.target.value)} className="w-full luxury-input font-num" />
              </div>

              <button type="submit" className="w-full luxury-btn-primary h-10">Confirm payment</button>
            </form>
          </div>
        </div>
      )}

      {/* ADD INVENTORY PRODUCT MODAL */}
      {showAddProductModal && (
        <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-all duration-300">
          <div 
            style={{
              borderRadius: '24px',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
            }}
            className="w-full max-w-lg bg-white/95 border border-[#0A4D8C]/10 p-7 relative space-y-5 animate-slide-up"
          >
            {/* Top gold line highlight */}
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-t-[24px]" />
            
            <button 
              onClick={() => {
                setEditingProductId(null);
                setNewProdCode('');
                setNewProdName('');
                setNewProdCategory('');
                setNewProdBrand('');
                setNewProdRate('');
                setNewProdPurchasePrice('');
                setNewProdStock('');
                setNewProdMinStock('10');
                setNewProdBranch('Branch A');
                setShowAddProductModal(false);
              }} 
              className="absolute top-5 right-5 text-slate-400 hover:text-[#0A4D8C] transition-colors p-1"
            >
              <X className="h-5 w-5" />
            </button>
            
            <form onSubmit={handleAddProduct} className="space-y-4 text-xs">
              <div className="text-center">
                <h3 className="font-heading font-extrabold text-lg text-slate-800 tracking-tight">
                  {editingProductId ? "Update Product Specifications" : "Register Product Spec"}
                </h3>
                <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-bold mt-0.5">
                  AVM Plastics Inventory Control
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-wider text-slate-400 font-extrabold block px-1">Item Number *</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="e.g. AVM-702" 
                      value={newProdCode} 
                      onChange={(e) => setNewProdCode(e.target.value)} 
                      disabled={editingProductId !== null}
                      className="w-full luxury-input font-num font-bold text-center border-slate-200 focus:border-[#D4AF37] disabled:bg-slate-50 disabled:text-slate-400" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-wider text-slate-400 font-extrabold block px-1">Category</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Garden Hose" 
                      value={newProdCategory} 
                      onChange={(e) => setNewProdCategory(e.target.value)} 
                      className="w-full luxury-input border-slate-200 focus:border-[#0A4D8C]" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-wider text-slate-400 font-extrabold block px-1">Item Name *</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="e.g. 1/2 Inch PVC Pipe" 
                      value={newProdName} 
                      onChange={(e) => setNewProdName(e.target.value)} 
                      className="w-full luxury-input border-slate-200 focus:border-[#0A4D8C] font-semibold text-slate-800" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-wider text-slate-400 font-extrabold block px-1">Tamil Translation</label>
                    <input 
                      type="text" 
                      placeholder="எ.கா. அரை அங்குல பிவிசி குழாய்" 
                      value={newProdNameTamil} 
                      onChange={(e) => setNewProdNameTamil(e.target.value)} 
                      className="w-full luxury-input border-slate-200 focus:border-[#0A4D8C]" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-wider text-slate-400 font-extrabold block px-1">Brand</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Supreme / AVM" 
                      value={newProdBrand} 
                      onChange={(e) => setNewProdBrand(e.target.value)} 
                      className="w-full luxury-input border-slate-200 focus:border-[#0A4D8C]" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-wider text-slate-400 font-extrabold block px-1">Unit Type</label>
                    <input 
                      type="text" 
                      placeholder="e.g. pcs, meter, bag" 
                      value={newProdUnitType} 
                      onChange={(e) => setNewProdUnitType(e.target.value)} 
                      className="w-full luxury-input border-slate-200 focus:border-[#0A4D8C]" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-wider text-slate-400 font-extrabold block px-1">Shop Price *</label>
                    <input 
                      required 
                      type="number" 
                      step="0.01" 
                      placeholder="₹0.00" 
                      value={newProdPurchasePrice} 
                      onChange={(e) => setNewProdPurchasePrice(e.target.value)} 
                      className="w-full luxury-input font-num text-center border-slate-200 focus:border-[#0A4D8C] font-bold text-slate-700" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-wider text-slate-400 font-extrabold block px-1">Original Price *</label>
                    <input 
                      required 
                      type="number" 
                      step="0.01" 
                      placeholder="₹0.00" 
                      value={newProdRate} 
                      onChange={(e) => setNewProdRate(e.target.value)} 
                      className="w-full luxury-input font-num text-center border-slate-200 focus:border-[#0A4D8C] font-bold text-slate-700" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-wider text-slate-400 font-extrabold block px-1">Discount Price *</label>
                    <input 
                      required 
                      type="number" 
                      step="0.01" 
                      placeholder="₹0.00" 
                      value={newProdDiscount} 
                      onChange={(e) => setNewProdDiscount(e.target.value)} 
                      className="w-full luxury-input font-num text-center border-slate-200 focus:border-[#D4AF37] font-bold text-slate-900" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 font-num">
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-wider text-slate-400 font-extrabold block px-1">Barcode / QR Code</label>
                    <input 
                      type="text" 
                      placeholder="Scan/Type Barcode" 
                      value={newProdBarcode} 
                      onChange={(e) => setNewProdBarcode(e.target.value)} 
                      className="w-full luxury-input border-slate-200 focus:border-[#0A4D8C]" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-wider text-slate-400 font-extrabold block px-1">Branch</label>
                    <select 
                      value={newProdBranch} 
                      onChange={(e) => setNewProdBranch(e.target.value)} 
                      className="w-full luxury-input text-center border-slate-200 focus:border-[#0A4D8C] font-semibold"
                    >
                      {branches.map(b => (
                        b === 'All' ? null : <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 font-num">
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-wider text-slate-400 font-extrabold block px-1">Stock Qty</label>
                    <input 
                      type="number" 
                      placeholder="0" 
                      value={newProdStock} 
                      onChange={(e) => setNewProdStock(e.target.value)} 
                      className="w-full luxury-input text-center border-slate-200 focus:border-[#0A4D8C]" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-wider text-slate-400 font-extrabold block px-1">Min Stock</label>
                    <input 
                      type="number" 
                      placeholder="10" 
                      value={newProdMinStock} 
                      onChange={(e) => setNewProdMinStock(e.target.value)} 
                      className="w-full luxury-input text-center border-slate-200 focus:border-[#0A4D8C]" 
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-wider text-slate-400 font-extrabold block px-1">Product Description</label>
                  <textarea 
                    placeholder="Provide additional details/specifications..." 
                    rows={2}
                    value={newProdDescription} 
                    onChange={(e) => setNewProdDescription(e.target.value)} 
                    className="w-full luxury-input border-slate-200 focus:border-[#0A4D8C]" 
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#0A4D8C] hover:bg-[#0A4D8C]/90 text-white font-bold h-11 rounded-xl shadow-lg transition-all duration-300 mt-2 border border-[#D4AF37]/20 tracking-wider text-xs uppercase"
              >
                {editingProductId ? "Update Product Record" : "Register Product Record"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* VIEW CUSTOMER BILLS HISTORIC MODULE */}
      {showCustBillsModal && selectedCustHistory && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="luxury-panel w-full max-w-lg bg-white p-6 relative space-y-4">
            <button 
              onClick={() => {
                setShowCustBillsModal(false);
                setSelectedCustHistory(null);
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center">
              <h3 className="font-heading font-bold text-base text-slate-800">{selectedCustHistory.name} - Purchase History</h3>
              <p className="text-xs text-slate-400 font-num">Phone: {selectedCustHistory.phone}</p>
            </div>

            <div className="overflow-x-auto max-h-80 border border-slate-100 rounded-2xl">
              <table className="w-full text-left text-xs font-num border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 font-bold border-b border-slate-100 text-[10px] uppercase">
                    <th className="p-3">Invoice No</th>
                    <th className="p-3">Date</th>
                    <th className="p-3 text-right">Amount</th>
                    <th className="p-3 text-center">Payment</th>
                  </tr>
                </thead>
                <tbody>
                  {!selectedCustHistory.purchase_history || selectedCustHistory.purchase_history.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="p-8 text-center text-slate-400 italic">No historical purchases recorded.</td>
                    </tr>
                  ) : (
                    selectedCustHistory.purchase_history.map((inv: any) => (
                      <tr key={inv.invoice_no} className="border-b border-slate-50 hover:bg-slate-50/50">
                        <td className="p-3 font-bold text-[#2563EB]">{inv.invoice_no}</td>
                        <td className="p-3 text-slate-400">{new Date(inv.created_at).toLocaleString()}</td>
                        <td className="p-3 text-right font-bold text-[#10B981]">₹{parseFloat(inv.grand_total).toFixed(2)}</td>
                        <td className="p-3 text-center font-bold text-slate-500 uppercase text-[9px]">{inv.payment_type}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ADD CUSTOMER MODAL */}
      {showAddCustomerModal && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="luxury-panel w-full max-w-sm bg-white p-6 relative space-y-4">
            <button onClick={() => setShowAddCustomerModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <X className="h-5 w-5" />
            </button>

            <form onSubmit={handleAddCustomer} className="space-y-4 text-xs">
              <div className="text-center">
                <h3 className="font-heading font-bold text-base text-slate-800">Register Wholesale Customer</h3>
              </div>
              
              <div className="space-y-3">
                <input required type="text" placeholder="Customer Name *" value={newCustName} onChange={(e) => setNewCustName(e.target.value)} className="w-full luxury-input font-bold" />
                <input required type="text" placeholder="Phone Number *" value={newCustPhone} onChange={(e) => setNewCustPhone(e.target.value)} className="w-full luxury-input font-num" />
                <input type="text" placeholder="GSTIN (Optional)" value={newCustGst} onChange={(e) => setNewCustGst(e.target.value)} className="w-full luxury-input font-num uppercase" />
                <input type="text" placeholder="Address Address" value={newCustAddress} onChange={(e) => setNewCustAddress(e.target.value)} className="w-full luxury-input" />
                <input required type="number" placeholder="Credit Limit (₹) *" value={newCustLimit} onChange={(e) => setNewCustLimit(e.target.value)} className="w-full luxury-input font-num font-bold text-center" />
              </div>

              <button type="submit" className="w-full luxury-btn-primary h-11 mt-2">Register Client Card</button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
