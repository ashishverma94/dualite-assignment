const images = [
  {
    heading: `Walnut Grace Chair`,
    name: `Chair`,
    price: `3500`,
    image: `https://s3-alpha-sig.figma.com/img/f402/4f67/3518716677159e44abb4071e76a70e01?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AhqRjk03btpZKtOOv8K6H3zSOc0ZZarBsGOfY0SP~5ujKJGDIaTacN6F3rfhgxvjk4sEmYKXMSTi9Hf-8dRkDQCRWMgROTPCiqVsBX1arm6CDspCLKkKs4DwmHahb3cC~YFNlat9br1G6y4t-QCOPIbTZ6tV~o7RkZr4GBiOZNN2pxXPTK49g4VF4mjvUHob3C3hE1ilgU3rxrvmNNWqE5cOcvHRAe6dvOzemdfrX7GiFen8qd2l26VxYW23grACOb3mc5bwFu~Xsfiqc7df~GsptVQ0Nz2PRLBEyRrq4NxE9l0Z4Qsc5KJ2psQU2N3RnkOvjOU8baG4z6UQ14DIKQ__`,
  },
  {
    heading: `Minimalist Storgae Buffet`,
    name: `Chair`,
    price: `3500`,
    image: `https://s3-alpha-sig.figma.com/img/10ac/89d3/fb0c907a88ed1d2c351e63890b33d472?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GZaFD3Yc7FK~~secaWJqoJ47uBoyhBYchsyMP-qOHL2~7IW1XfcW3QCgZLmcqgeByXZgZ32CtlM6vYKUqnfVWYp0WaOXoIvcvYcOKOOGb1VQdey~3qWxvFht4OFvMAL8wx6hu5piyb82j8L7~4~dtvTMu~Ok92PM0d04RnoUL5Ay8V-LFfA2mebZCx~eT1mAKtzifrR6vhvtxhQ2tEzblZe6IgiDXhxNhl9ZlWcoquBG-bs0zsOOnh4kAzIOSut~aEVJ6JzsLH3HDdk0smyV-NfS4PKzuzbTQrG30BRjlrCkQxHAWztD7rAxAux-aXLpdB33LCxB55qPZ6PTPkfuqg__`,
  },
  {
    heading: `Relaxation Couch`,
    name: `Chair`,
    price: `3500`,
    image: `https://s3-alpha-sig.figma.com/img/aa85/e0dc/4e571351285a8a9b77fcb3b27a080f73?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KRNu-G5p~6wx2UT59jP6m3faehEYl8QA7e2UPXX68eLfjlKzT0A8bxaOiuu-CbqEkyzIvvEAplp9QyO3zeiL3mZJ38mvkWm6I6i~u7wj~hBZy~bFqqvmObDjGVbO~H~vHMGxOLSAu4Iy4MZMUJHfUHWPJJf90ja7pTEMYM2J3ahsYCkiSnv5fsTJVWzc-eJ98TwhQbGkw6hCKMZMzbEyDxm8JTfrMSALHaLJZmktadil4B71l-QuafFaYPR3xezg1be6~IQ1HsIk4WRMtDGqS3mgwZeNw8sNVlJmTFNvxh0a7rPxUB9JiIaquGz8sdKiap80rB~gcPci3-85qR-oJw__`,
  },
  {
    heading: `Swivel Chair`,
    name: `Chair`,
    price: `3500`,
    image: `https://s3-alpha-sig.figma.com/img/a01d/dbbf/60a9f662968ca1d650f16cec8a636c72?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oQtTjkTh2BcpiCL241x7swAutt0yFNBlwESOke2ipdkqyeT5pe7LHueWTvA6v~wGcrnO2x1uwT94Mm4lWUS5HRDbw4NAb1kPZvW0YGxJk3~LzAi5MON0efmzm~qC3y62ZURlDF~ROWY1b4hFUF-dTKWIzdVG60OW3w42SIIt8BiUVuTjHfWwgF2n-bkA2sFkKRBv500uavEwyMz1QFG0OBP6DteDPT9lX6RtK5yvyw45w6~mX~e0rDdKlxqRn-TIh2q1KDg9h8a8zcwUMq50mYpTb6Xq5fJQ10YpkWjhTrKZ6kt5oknfPKvGY1foyRGMpt5FLc2KmxDMdJIW5zhBtg__`,
  },
  {
    heading: `Folding chair`,
    name: `Chair`,
    price: `3500`,
    image: `https://s3-alpha-sig.figma.com/img/8fe3/f333/87e81964f112789fcc3a0f3eb5de1bda?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nyApMdLrw9sfSuiRFnPlEGJgJ5QYGvWONZ18WLSFuXQX7Gn8bS15OorNDLmiiWMFUz66oezt4~MtavGpNQbdIJOeFlq5fwF8qB0YZjpmtZ5d6jkwCquJ3MS1WxX5TT-yb4K3sN~2qv3wPWFAzjf4Ym8u9klqR-vMkWDgGoCxnUWzwHsuuZdCRwmpm5U~q3jbecwSylCoNtlIwlo8yaxsB-DyNm2DLLmMpOw4b8leTxelOku53GpGUTM5bWNyzNSMLcChINAa6E7ykPBR6~fMONlYuCcyjnPy2yrURYSDFv3AiHWBO5-42Wz6AHRygFygTFLX-mYFlTmDa~SChGC0Lg__`,
  },
  {
    name: `Chair`,
    price: `3500`,
    heading: `Blush Chaise Lounge`,
    image: `https://s3-alpha-sig.figma.com/img/b86b/b915/7555405c14f97284cf657930e3e1137d?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pvX3TPz1pTC9Xci8YJ28J4pHF3~LJq06dMc4viaT08Gy~x~J7~Jsl7Gx~YFLjMY3bc9SnZ0tdmlrGhyNtTKs2jttPubepnteTu6tP-ESdqvQpFVff1kuNOaLkqJ3ZSlCu4muR5bWrWci~muWJrmrkLCZawAQp0TVEWTzZSCbGNc-PdfFzPEezeuGB~9Ix~sj5qLNLZaikI8iSVA-d8vQ0I6m24lFjkD3r~2tcYkeIy~ljfOQ8qqchBTFcRW4gUFVqpn5IzSsCV9HX-ijMI5DVEFbdzgW7hk3eJN5mgyVLF3TD9F3-IZZUl2N~d4FHSCnlQ-zL-2gk1NIgAYg8S8KVw__`,
  },
  {
    name: `Chair`,
    price: `3500`,
    heading: `Modern Sofa`,
    image: `https://s3-alpha-sig.figma.com/img/5d0b/55cc/17668a9c3e5ffa34f4c0f230bfac992d?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kka1FePU6jEmo2L~pQ~KKMZTvMzWz0IiEtVvreatAtKiQek78Wauk7XNST~kGM7X8bw-zXCzkF1rHMg-8R2Q8W-2vW~AvioQLNB1sZFLXRQWzHnfh5xtiLBtWO8-hBB5j98YHytQKVMMZaC65y40jmRcXD3Ua7Acyxcg3UDnPDO9ue-uOqjd87e79WAKxgVV2lcbXvO6gZu19aoGa7HEvQ0Ut3cTzekkDGq~jdaEPKi4UedspvV7aQbl5aGkwMh4Tzz7KBJjzllJNyYmysCqEGUMF7xRDSEOd0zsN-1efBrIjlj2XD~YlXWr82nbSbKgQf5s9YI6P2roaSxWn~G2gQ__`,
  },
  {
    name: `Chair`,
    price: `3500`,
    heading: `Tray Table`,
    image: `https://s3-alpha-sig.figma.com/img/5671/6b53/4f574434ac15a4fcac7ab28c92f8d87f?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IMGd-EwdyhRgf9G~aVo4ZG~kUubs9kRIW2dOibYoIKwbkQhggFMUgWWv7zD8hpxze3EqPfK~zd5-sy-aPKWpRqk8IHpBhBGD3NTSGmSz46lHk2sf5-5wjtLjumobCP~J-DaFCx8vfjoJJlOAqPuudswMABG23gm6prUdX4d~H9lezFCFbMaob-U5poA759Gtissivw8HY-K-CrHNfQfT7O07RtFtVHttrRWEwZ0hC58NNDCwYHT21KN2gCj6uQdGlhCo5H8hgyM3qhMagoZSkwigRg9Wh-8mdsRw2hGbTCqqeexIF1CkNBWHrHpRXTscS83IteuZ7VJMbzvKafW-1A__`,
  },
];
export default images;
