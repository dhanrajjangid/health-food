

export const products = [
    { id: 1, name: 'Product 1', price: 20, image: "https://images.pexels.com/photos/6640013/pexels-photo-6640013.jpeg" },
    { id: 2, name: 'Product 2', price: 30, image: "https://images.pexels.com/photos/4974496/pexels-photo-4974496.jpeg" },
    { id: 3, name: 'Product 3', price: 15, image:  "https://images.pexels.com/photos/6467618/pexels-photo-6467618.jpeg"},
    { id: 4, name: 'Product 4', price: 15, image:  "https://images.pexels.com/photos/266621/pexels-photo-266621.jpeg" },
    { id: 5, name: 'Product 5', price: 15, image:  "https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg" },
    { id: 6, name: 'Product 6', price: 15, image:  "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg" },
    { id: 7, name: 'Product 7', price: 15, image:  "https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg" },
    { id: 8, name: 'Product 8', price: 15, image:  "https://images.pexels.com/photos/291738/pexels-photo-291738.jpeg" },
    { id: 9, name: 'Product 9', price: 15, image:  "https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg" },
    { id: 10, name: 'Product 10', price: 15, image:  "https://images.pexels.com/photos/1566435/pexels-photo-1566435.jpeg" }
  ];

export const fakeOrderData = {
  orderId: '#346-987680002',
  deliveryDate: '15 May, at 13:00 PM',
  total: 'IDR 225,000',
  status: 'Shipped',
  items: [
    {
      id: 1,
      name: 'Corduroy Pants',
      seller: 'Amanda',
      qty: 1,
      imgSrc: 'corduroy_pants.jpg',
    },
    {
      id: 2,
      name: 'Cotton Shirts',
      seller: 'Amanda',
      qty: 1,
      imgSrc: 'cotton_shirts.jpg',
    },
  ],
  paymentMode: 'VISA Classic',
  shippingAddress: 'Amanda Ramadita, Casa Andara Residence, 16540, Jakarta, Indonesia',
  summary: [
    { label: `Items (${2}):`, value: 'IDR 440,000' },
    { label: 'Postage and Packing:', value: 'IDR 10,000' },
    { label: 'Tax:', value: 'IDR 6,500' },
    { label: 'Total:', value: 'IDR 456,500', isBold: true },
  ],
};
