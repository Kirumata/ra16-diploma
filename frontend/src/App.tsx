import './App.css'
import About from './components/About/About'
import Cart from './components/Cart/Cart'
import Catalog from './components/Catalog/Catalog'
import Contacts from './components/Contacts/Contacts'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Header from './components/Header/Header'
import Item from './components/Item/Item'
import MainPage from './components/MainPage/MainPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer'
import Banner from './components/Banner/Banner'
import { useEffect, useState } from 'react'
import type { CategoriesBlock, ItemData } from './types'
import ItemsPanel from './components/Catalog/ItemsPanel'
import Categories from './components/Catalog/Categories'

function App() {

  const [offset, setOffset] = useState(0);
  const [topSales, setTopSales] = useState<ItemData[]>();
  const [categories, setCategories] = useState<CategoriesBlock>({
    selectedId: 0,
    categoriesList: [{ id: 0, title: "Все" }]
  });
  const [currentItems, setCurrentItems] = useState<ItemData[]>();

  async function getTopSales() {
    let response = await fetch('http://localhost:7070/api/top-sales');
    let data = await response.json();
    setTopSales(data);
  };

  async function getCategories() {
    let response = await fetch('http://localhost:7070/api/categories');
    let data = await response.json();
    setCategories({ selectedId: 0, categoriesList: categories.categoriesList.concat(data) });
  };

  async function getCurrentItems() {
    let response = await fetch(`http://localhost:7070/api/items?categoryId=${categories.selectedId}&offset=${offset} `);
    let data = await response.json();
    if (currentItems && offset > 0) {
      setCurrentItems(currentItems.concat(data));
    }
    else {
      setCurrentItems(data);
    }

  };

  async function getMore() {
    setOffset(offset + 6);
    getCurrentItems();
  };

  useEffect(() => {
    getTopSales();
    getCategories();
    getCurrentItems();
  }, []);
  /*
    useEffect(() => {
      console.log(categories);
    }, [categories]);
  */

  useEffect(() => {
    getCurrentItems();
  }, [categories]);
  return (
    <>
      <Header />
      <Banner />
      {topSales && <ItemsPanel items={topSales} />}
      {categories && <Categories
        cats={categories}
        onChangeCat={(newId) => setCategories({ selectedId: newId, categoriesList: categories.categoriesList })} />}
      {currentItems && <ItemsPanel items={currentItems} />}
      <button onClick={() => getMore()}>Ещё</button>
      <BrowserRouter>
        <div>
          <div className="page">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/catalog.html" element={<Catalog />} />
              <Route path="/about.html" element={<About />} />
              <Route path=" /catalog/:id.html" element={<Item />} />
              <Route path="/cart.html" element={<Cart />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path="/contacts.html" element={<Contacts />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
