import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Retailer/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ModelSearch from "./Pages/Retailer/ModelSearch";
import VinSearch from "./Pages/VinSearch";
import Parts from "./Pages/Parts";
import My404Component from "./Pages/My404Component";
import FigureSearch from "./Pages/FigureSearch";
import Illustarion from "./Pages/Illustarion";
import Accessories from "./Pages/Accessories";
import Products from "./Pages/Products";
import Favorites from "./Pages/Favorites";
import LoginDetails from "./Pages/LoginDetails";
import OrderDetails from "./Pages/OrderDetails";
import DetailedParts from "./Pages/DetailedParts";
import Profile from "./Pages/Profile";
import Cart from "./Pages/Cart";

function Layout({ children }) {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/login";

  return (
    <div className="flex flex-col min-h-[100dvh] justify-between">
      {!hideHeaderFooter && <Header />}
      {children}
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

const routes = [
  { path: "/login", element: <Login /> },
  { path: "/", element: <Home /> },
  { path: "/model-search", element: <ModelSearch /> },
  { path: "/vin-search", element: <VinSearch /> },
  { path: "/parts", element: <Parts /> },
  { path: "/parts/details", element: <DetailedParts /> },
  { path: "/figure-search", element: <FigureSearch /> },
  { path: "/illu", element: <Illustarion /> },
  { path: "/accessories", element: <Accessories /> },
  { path: "/shop-products", element: <Products /> },
  { path: "/favorite", element: <Favorites /> },
  { path: "/profile", element: <Profile /> },
  { path: "/order-details", element: <OrderDetails /> },
  { path: "/login-details", element: <LoginDetails /> },
  { path: "/cart", element: <Cart /> },
  { path: "*", element: <My404Component /> },
];

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
