import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Showcase from './components/showcase/Showcase';
import Detailer from './components/detailer/Detailer';
import Cart from './components/cart/Cart';

export const productData = createContext();
export const cartData = createContext();

function App() {
  const products = {
    '0001': {
      id: '0001',
      img: 'https://rukminim2.flixcart.com/image/416/416/xif0q/television/f/c/j/-original-imah54hennjpfrs2.jpeg?q=70&crop=false',
      title: "realme TechLife CineSonic Q ",
      price: "₹22,490",
      baseprice: 22490,
      Description: 'This is a detailed description for realme TechLife CineSonic Q. It is an excellent product that meets all your needs and expectations.'
    },
    '0002': {
      id: '0002',
      img: 'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/p/r/z/enco-buds-2-oppo-original-imagh9frfp7gxdb3.jpeg?q=70&crop=false',
      title: "OPPO Enco Buds 2",
      price: "₹1,299",
      baseprice: 1299,
      Description: 'This is a detailed description for OPPO Enco Buds 2. It is an excellent product that meets all your needs and expectations.'
    },
    '0003': {
      id: '0003',
      img: 'https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/w/x/h/-original-imahfa7xspmxemvj.jpeg?q=70&crop=false',
      title: "SAMSUNG Galaxy Watch6 LTE",
      price: "₹18,999",
      baseprice: 18999,
      Description: 'This is a detailed description for SAMSUNG Galaxy Watch6 LTE. It is an excellent product that meets all your needs and expectations.'
    },
    '0004': {
      id: '0004',
      img: 'https://rukminim2.flixcart.com/image/416/416/khavrm80/gamepad/9/n/m/microsoft-xbox-wireless-controller-original-imafxc8hdf7hheds.jpeg?q=70&crop=false',
      title: "MICROSOFT S/X Wireless Controller",
      price: "₹18,999",
      baseprice: 18999,
      Description: 'This is a detailed description for MICROSOFT S/X Wireless Controller. It is an excellent product that meets all your needs and expectations.'
    }
  };

  const [prod, setProd] = useState(products);
  const [cartFile, setcartFile] = useState({}); // Move this state inside App

  return (
    <>
      <productData.Provider value={prod}>
        <cartData.Provider value={{ cartFile, setcartFile }}> {/* Pass both cartFile and setcartFile */}
          <Router>
            <Header />
            <Routes>
              <Route path='/' element={<Showcase />}></Route>
              <Route path='/:id' element={<Detailer />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
            </Routes>
          </Router>
        </cartData.Provider>
      </productData.Provider>
    </>
  );
}

export default App;
