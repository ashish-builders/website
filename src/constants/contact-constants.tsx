export const streetAddress = "Opp. Govt Hospital, Ramnagar Road" as const;
export const addressLocality = "Kashipur" as const;
export const addressRegion = "Uttarakhand" as const;

export const postalCode = "244713" as const;

export const address = [streetAddress, addressLocality, addressRegion].join(
  ", "
);
export const phoneNumber = "+918057977777" as const;
export const email = "info@ashishbuilders.com" as const;

export const geo = {
  latitude: 29.214432650899482,
  longitude: 78.96371788787881,
} as const;

export const country = "India" as const;

export const countryCode = "IN" as const;
