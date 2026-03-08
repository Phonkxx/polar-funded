/**
 * POLAR FUNDED - WooCommerce Config
 */
const PolarWC = {
  WC_BASE_URL: 'https://polar-funded.com',
  WC_CONSUMER_KEY: 'ck_e939626e858f8d66c7b07b4fa39f530b9868fc99',
  WC_CONSUMER_SECRET: 'cs_3a638be16c95b618fbd955b61f8dfd589f74237c',
  PRODUCTS: {
    instant: { 5000: {id:66,price:59}, 10000:{id:67,price:89}, 25000:{id:68,price:149}, 50000:{id:69,price:247}, 100000:{id:70,price:397}, 200000:{id:71,price:697} },
    '1step': { 5000:{id:74,price:38}, 10000:{id:75,price:65}, 25000:{id:76,price:139}, 50000:{id:77,price:209}, 100000:{id:78,price:329}, 200000:{id:79,price:549} },
    '2step': { 5000:{id:82,price:29}, 10000:{id:83,price:55}, 25000:{id:84,price:119}, 50000:{id:85,price:189}, 100000:{id:86,price:299}, 200000:{id:87,price:499} },
    '3step': { 5000:{id:18,price:27}, 10000:{id:18,price:44}, 25000:{id:18,price:94}, 50000:{id:18,price:149}, 100000:{id:18,price:249}, 200000:{id:18,price:419} }
  }
};
window.PolarWC=PolarWC;