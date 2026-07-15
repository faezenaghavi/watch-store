export function formatPrice(price: number, locale: string = "en"): string {
  if (locale === "fa") {
    const faDigits = ["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];
    const formatted = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
    const faFormatted = formatted.replace(/\d/g, (d) => faDigits[+d]);
    return `${faFormatted} تومان`;
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price);
}

export function formatDiscount(price: number, originalPrice: number): number {
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}

export function formatDate(date: string, locale: string = "en"): string {
  return new Date(date).toLocaleDateString(
    locale === "fa" ? "fa-IR" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );
}