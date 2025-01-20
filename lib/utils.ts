import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

export function splitCurrency(price: string) {
  if (price.includes(".")) {
    const priceArray = price.split(".");
    return {
      wholePrice: priceArray[0],
      fractionalPrice: priceArray[1],
    };
  }

  return {
    wholePrice: price,
    fractionalPrice: "00",
  };
}

export function formatNumberWithDecimal(num: number): string {
  const [int, decimal] = num.toString().split(".");

  return decimal ? `${int}.${decimal.padEnd(2, "0")}` : `${int}.00`;
}
