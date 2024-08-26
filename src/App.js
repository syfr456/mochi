import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';


// Sample product data
// const sampleProducts = [
//   {
//     id: 1,
//     name: 'Mochi Daifuku Strawberry',
//     description: 'Chewy mochi filled with sweet red bean paste and a hint of fresh strawberry flavor.',
//     price: '$2.99',
//     image: 'path/to/strawberry_mochi.jpg',
//   },
//   {
//     id: 2,
//     name: 'Mochi Matcha Green Tea',
//     description: 'Soft mochi with a creamy matcha green tea filling, perfect for green tea lovers.',
//     price: '$3.49',
//     image: 'path/to/matcha_mochi.jpg',
//   },
//   {
//     id: 3,
//     name: 'Mochi Red Bean',
//     description: 'Traditional mochi with a smooth and sweet red bean paste filling.',
//     price: '$2.49',
//     image: 'path/to/red_bean_mochi.jpg',
//   },
//   {
//     id: 4,
//     name: 'Mochi Mango',
//     description: 'A tropical twist on mochi with a sweet and tangy mango filling.',
//     price: '$3.99',
//     image: 'path/to/mango_mochi.jpg',
//   },
//   {
//     id: 5,
//     name: 'Mochi Chocolate',
//     description: 'Decadent mochi with a rich chocolate ganache center, a treat for chocolate lovers.',
//     price: '$4.49',
//     image: 'path/to/chocolate_mochi.jpg',
//   },
//   {
//     id: 6,
//     name: 'Mochi Taro',
//     description: 'A delightful mochi with a creamy taro filling, offering a unique flavor experience.',
//     price: '$3.29',
//     image: 'path/to/taro_mochi.jpg',
//   },
//   {
//     id: 7,
//     name: 'Mochi Coconut',
//     description: 'Mochi infused with coconut milk and filled with a sweet coconut filling.',
//     price: '$3.79',
//     image: 'path/to/coconut_mochi.jpg',
//   },
//   {
//     id: 8,
//     name: 'Mochi Sesame',
//     description: 'Soft mochi coated with toasted sesame seeds and filled with a sweet sesame paste.',
//     price: '$2.99',
//     image: 'path/to/sesame_mochi.jpg',
//   },
  
// ];

function App() {
  // const [products] = useState(sampleProducts);

  return (
    <div className="App">
      <Header />
      {/* <Banner />
      <FilterBar />
      <ProductList products={products} /> */}
      <Footer />
    </div>
  );
}

export default App;
