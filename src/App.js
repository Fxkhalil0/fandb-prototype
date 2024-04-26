import './App.css';
import MenuPage from './Pages/MenuPage/MenuPage';
import TablePage from './Pages/TablePage/TablePage';
import { Store } from "./redux/Store";
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<TablePage  />} path="/" />
          <Route index element={<MenuPage />} path="/menu/:id" />
          </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
