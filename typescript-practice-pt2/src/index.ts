import { WarehouseItem, WarehouseDiscountItem } from "./models/Warehouse";

let detroitWarehouse: WarehouseItem[] = [
  {
    name: "iPhone SE",
    price: 399,
    fiveG: false,
  },
  {
    name: "iPhone XR",
    price: 499,
    fiveG: false,
  },
  {
    name: "iPhone 11",
    price: 599,
    fiveG: false,
  },
  {
    name: "iPhone 12 Mini",
    price: 729,
    fiveG: true,
  },
  {
    name: "iPhone 12",
    price: 829,
    fiveG: true,
  },
  {
    name: "iPhone 12 Pro",
    price: 999,
    fiveG: true,
  },
  {
    name: "iPhone 12 Max",
    price: 1099,
    fiveG: true,
  },
  {
    name: "Pixel 4a",
    price: 349,
    fiveG: false,
  },
  {
    name: "Pixel 5",
    price: 699,
    fiveG: true,
  },
];

let newyorkWarehouse: WarehouseItem[] = [
  {
    name: "iPhone SE",
    price: 399,
    fiveG: false,
  },
  {
    name: "Pixel 5",
    price: 699,
    fiveG: true,
  },
  {
    name: "Pixel 4a 5G",
    price: 499,
    fiveG: true,
  },
  {
    name: "Pixel 4a 5G",
    price: 499,
    fiveG: true,
  },
  {
    name: "Pixel 4a 5G",
    price: 499,
    fiveG: true,
  },
  {
    name: "Pixel 4a",
    price: 349,
    fiveG: false,
  },
  {
    name: "Pixel 4a",
    price: 349,
    fiveG: false,
  },
  {
    name: "Galaxy S10",
    price: 750,
    fiveG: false,
  },
  {
    name: "Galaxy S10+",
    price: 1500,
    fiveG: true,
  },
];

let chicagoWarehouse: WarehouseItem[] = [
  {
    name: "Galaxy S10",
    price: 750,
    fiveG: false,
  },
  {
    name: "Galaxy S10+",
    price: 1500,
    fiveG: true,
  },
  {
    name: "Galaxy S10+",
    price: 1500,
    fiveG: true,
  },
  {
    name: "Galaxy S10+",
    price: 1500,
    fiveG: true,
  },
  {
    name: "iPhone 12",
    price: 829,
    fiveG: true,
  },
  {
    name: "iPhone 12 Pro",
    price: 999,
    fiveG: true,
  },
  {
    name: "iPhone 12 Max",
    price: 1099,
    fiveG: true,
  },
  {
    name: "Pixel 4a",
    price: 349,
    fiveG: false,
  },
  {
    name: "Pixel 5",
    price: 699,
    fiveG: true,
  },
];

const addPhone = (
  array: WarehouseItem[],
  name: string,
  price: number,
  fiveG: boolean
): void => {
  array.push({ name, price, fiveG });
};

const deletePhoneByIndex = (array: WarehouseItem[], index: number): void => {
  array.splice(index, 1);
};

const deletePhoneByName = (array: WarehouseItem[], name: string): void => {
  array.splice(
    array.findIndex((item) => item.name === name),
    1
  );
};

const filter5G = (
  array: WarehouseItem[],
  filter5G: boolean
): WarehouseItem[] => {
  return array.filter((item) => item.fiveG === filter5G);
};

const filterPriceLessThan = (
  array: WarehouseItem[],
  price: number
): WarehouseItem[] | [] => {
  return array.filter((item) => item.price < price);
};

const filterPriceGreaterThan = (
  array: WarehouseItem[],
  price: number
): WarehouseItem[] | [] => {
  return array.filter((item) => item.price > price);
};

const findPhoneByName = (
  array: WarehouseItem[],
  name: string
): WarehouseItem | undefined => {
  return array.find((item) => (item.name = name));
};

const calcAverageCost = (array: WarehouseItem[]): number => {
  return array.reduce((pv, cv) => pv + cv.price, 0) / array.length;
};

const doWeHaveA5GPhone = (array: WarehouseItem[]): boolean =>
  array.some((item) => item.fiveG);

const phoneFlashSale = (
  array: WarehouseItem[],
  percentage: number
): WarehouseDiscountItem[] => {
  return array.map((item) => {
    return {
      ...item,
      discountedPrice: item.price - (item.price * percentage) / 100,
    };
  });
};

const phoneFlashSaleV2 = (
  array: WarehouseItem[],
  name: string,
  percentage: number
): WarehouseDiscountItem[] => {
  return array
    .filter((item) => item.name === name)
    .map((item) => {
      return {
        ...item,
        discountedPrice: item.price - (item.price * percentage) / 100,
      };
    });
};

console.log("phones list :: ", chicagoWarehouse);

console.log("Add phone :: ", addPhone(chicagoWarehouse, "test", 399, false));

console.log("phones list :: ", chicagoWarehouse);

console.log(
  "phones deletion by index ::",
  deletePhoneByIndex(chicagoWarehouse, 2)
);

console.log("phones list :: ", chicagoWarehouse);

console.log(
  "delete phone by Name :: ",
  deletePhoneByName(chicagoWarehouse, "iPhone 12")
);

console.log("phones list :: ", chicagoWarehouse);

console.log("filter by 5G :: ", filter5G(chicagoWarehouse, true));

console.log(
  "Phones less than :: ",
  filterPriceLessThan(chicagoWarehouse, 1000)
);

console.log(
  "Phones greater than :: ",
  filterPriceGreaterThan(chicagoWarehouse, 1000)
);

console.log(
  "Find phone by Name :: ",
  findPhoneByName(chicagoWarehouse, "iPhone 12")
);

console.log("Average Cost :: ", calcAverageCost(chicagoWarehouse));

console.log("5G Phones :: ", doWeHaveA5GPhone(chicagoWarehouse));

console.log("phone flash sale  :: ", phoneFlashSale(chicagoWarehouse, 10));

console.log(
  "phone flash sale v2 :: ",
  phoneFlashSaleV2(chicagoWarehouse, "iPhone 12 Pro", 10)
);
