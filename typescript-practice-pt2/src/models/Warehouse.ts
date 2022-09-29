export interface WarehouseItem {
  name: string;
  price: number;
  fiveG: boolean;
}

export interface WarehouseDiscountItem extends WarehouseItem {
  discountedPrice: number;
}
