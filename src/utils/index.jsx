export function formatDate(dateStr) {
  const date = new Date(dateStr);

  const options = { day: "2-digit", month: "long", year: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-GB", options)?.format(date);

  return formattedDate;
}

export const formatAddress = (address) => {
  const {
    name,
    phoneNumber,
    addressLine1,
    addressLine2,
    city,
    state,
    postalCode,
    country,
  } = address;

  const addressParts = [
    name,
    addressLine1,
    addressLine2,
    city,
    state,
    postalCode,
    country,
    phoneNumber,
  ];

  const filteredAddressParts = addressParts?.filter(
    (part) => part && part?.trim() !== ""
  );

  return filteredAddressParts?.join(", ");
};

export const truncatedName = (name, maxCharacters) => {
  const shortName =
    name?.length > maxCharacters
      ? `${name?.substring(0, maxCharacters)}...`
      : name;

  return shortName;
};

export function calculateDateAfter(days, dateString) {
  let date = new Date(dateString);
  date?.setDate(date?.getDate() + days);

  function formatDate(date) {
      let day = date?.getDate();
      let month = date?.toLocaleString('default', { month: 'short' });
      day = day < 10 ? '0' + day : day;
      return `${day} ${month}`;
  }
  
  let formattedDate = formatDate(date);
  return formattedDate;
}
