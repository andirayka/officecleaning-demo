// Default Unsuccessful response
type UnsuccessfulResponse = {
  success: false;
  message: string;
};

// Auth Check
type PhoneAvailability = {
  success: boolean;
  message: string;
  next_process: string;
};

// Login Response from OTP confirmation
type LoginResponse = {
  success: boolean;
  data: User;
  token: string;
};

// User response from Confirm OTP
type User = {
  address: string;
  bank_pelapakbesar_account_name: string;
  bank_pelapakbesar_account_number: string;
  bank_pelapakbesar_name?: string;
  created_at: Date;
  email: string;
  fullname?: string;
  id: number;
  loan_performance_percent: number;
  loan_quota_amount: number;
  loyalty_level: string;
  loyalty_level_logo: string;
  otp: null;
  phone: string;
  photo?: null;
  role: string;
  updated_at: Date;
  user_level: null;
  warehouse_bigpress: {
    address: string;
    created_at: string;
    id: number;
    name: string;
    updated_at: string;
  };
  warehouse_bigpress_id?: number;
  warehouse_pelapakbesar_address?: string;
  warehouse_pelapakbesar_latitude: string;
  warehouse_pelapakbesar_longitude: string;
  warehouse_pelapakbesar_map_name: string;
  warehouse_pelapakbesar_phone: string;
  warehouse_pelapakbesar_photo: null;
};

// List Format
type ListFormat<T> = {
  current_page: number;
  data: T[];
  first_page_url: string;
  from: null;
  last_page: number;
  last_page_url: string;
  links: {
    active: boolean;
    label: string;
    url: null | string;
  }[];
  next_page_url: null;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: null;
  total: number;
};

// Pricing
type Pricing = {
  id: number;
  warehouse_id: number;
  material_name: string;
  price: number;
  kg_per_truck: number;
  kg_per_pickup: number;
  created_at: Date;
  updated_at: Date;
};

// Warehouse
type Warehouse = {
  id: number;
  name: string;
  address: string;
  created_at: Date;
  updated_at: Date;
};

// Inbox
type Inbox = {
  id: number;
  title: string;
  content: string;
  author?: string;
  content_type?: string;
  content_id?: string;
  created_at: string;
  updated_at: string;
  is_read: boolean;
};
type InboxDetail = {
  id: number;
  title: string;
  author: string;
  content: string;
  date: string;
  created_at: string;
  updated_at: string;
  is_new: boolean;
  content_short: string;
};

// Sale Overview
type SaleOverview = {
  amount_total: number;
  destination_warehouse_name: string;
  info: string;
  material_name: string;
  quantity: string;
};

// Sale Checkout
type SaleSummary = {
  material_name: string;
  quantity: string;
  info: string;
  destination_warehouse_name: string;
  destination_warehouse_address: string;
  amount_total: number;
  transport_plat_number: string;
  delivery_at: string;
  code: string;
};

// History list item
type History = {
  id: number;
  user_id: number;
  warehouse_bigpress_id: number;
  material_name: string;
  estimation_quantity: number;
  transport_type: string;
  transport_plat_number: string;
  weight_gross: number;
  weight_transport: number;
  weight_net: number;
  weight_discount: number;
  weight_discount_percent: number;
  weight_final: number;
  amount_total: number;
  amount_bonus: number;
  amount_grand_total: number;
  delivery_at: string;
  received_at: null;
  completed_at: null;
  created_at: string;
  updated_at: string;
  code: string;
  material_price: string;
  material_kg_per_truck: string;
  material_kg_per_pickup: string;
  cancelled_at: string;
  status: string;
  discount_loan: number;
  transfer_image: string;
};

// Delivery list item
type Delivery = {
  amount_bonus: number;
  amount_grand_total: number;
  amount_total: number;
  cancelled_at: null | string;
  code: string;
  completed_at: null;
  created_at: string;
  delivery_at: string;
  estimation_quantity: number;
  id: number;
  material_kg_per_pickup: string;
  material_kg_per_truck: string;
  material_name: string;
  material_price: string;
  received_at: null;
  status: string;
  transport_plat_number: string;
  transport_type: string;
  updated_at: string;
  user_id: number;
  warehouse_bigpress_id: number;
  weight_discount: number;
  weight_discount_percent: number;
  weight_final: number;
  weight_gross: number;
  weight_net: number;
  weight_transport: number;
};

// Bill Info
type BillInfo = {
  user: {
    loan_quota_amount_max: number;
    loan_quota_amount_available: number;
    loan_quota_amount_usage: number;
    loan_performance_percent: number;
  };
  bon?: {
    installment_qty_total: number;
    amount_monthly: number;
    amount_remaining_total: number;
    installment_qty_remaining: number;
    date_last_payment: string;
    date_next_payment: string;
  };
};

// Bill History
type BillHistory = {
  amount_approved_total: number;
  amount_monthly: number;
  amount_payment_total: number;
  amount_remaining_total: number;
  amount_request_total: number;
  created_at: string;
  date_approved: null;
  date_last_payment: null;
  date_next_payment: string;
  date_rejected: null;
  date_request: string;
  id: number;
  installment_qty_remaining: number;
  installment_qty_total: number;
  status: string;
  updated_at: string;
  user_id: number;
};
