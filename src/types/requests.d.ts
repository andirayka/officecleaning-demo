// Phone Check
type PhoneCheckReq = {
  phone: string;
};

// Password Check
type PasswordCheckReq = {
  phone: string;
  password: string;
};

// Confirm Auth
type ConfirmAuthReq = {
  phone: string;
  password: string;
  otp: number;
  fcm_token: string;
};

// Update Password
type UpdatePasswordReq = {
  new_password: string;
  rewrite_new_password: string;
  otp: number;
};

// Pricing
type PricingReq = {
  warehouse_bigpress_id: number;
};

// Sale Overview
type SaleOverviewReq = {
  warehouse_bigpress_id: number;
  material_name: string;
  estimation_quantity: number;
  transport_type: string; // 'truck' | 'pickup'
};
// Sale Checkout
type SaleCheckoutReq = {
  warehouse_bigpress_id: number;
  material_name: string;
  estimation_quantity: number;
  transport_type: string; // 'truck' | 'pickup'
  transport_plat_number: string; //add comma without spacing for multiple plat number
  delivery_at: string;
};

// Update Profile
type UpdateProfileReq = {
  fullname: string;
  email: string;
  address: string;
  photo: any;
  warehouse_pelapakbesar_address: string;
  warehouse_pelapakbesar_phone: string;
  warehouse_pelapakbesar_latitude: number;
  warehouse_pelapakbesar_longitude: number;
  warehouse_pelapakbesar_map_name: string;
  warehouse_pelapakbesar_photo: any;
  bank_pelapakbesar_name: string;
  bank_pelapakbesar_account_number: string;
  bank_pelapakbesar_account_name: string;
  warehouse_bigpress_id: number;
};

// Sale History List
type SaleHistoryListReq = {
  page: number;
  more_than_kg?: number;
  less_than_kg?: number;
  date_start?: string;
  date_end?: string;
};

// Sale History List
type DeliveryListReq = {
  page: number;
};

// Bill history
type BillHistoryReq = {
  page: number;
  date_start?: string;
  date_end?: string;
};

// Bill Request
type BillRequestReq = {
  amount_request_total: number;
  amount_monthly: number;
  installment_qty_total: number;
};
