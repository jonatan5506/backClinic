import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import PrivateRoute from "./components/PrivateRoute"; // Importar PrivateRoute
import BuscaMedico from "./pages/BuscaMedico/buscaMedico";

export default function App() {
  const isAuthenticated = localStorage.getItem('token'); // Verifica se o usuário está autenticado

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Rotas públicas */}
          <Route
            path="/signin"
            element={isAuthenticated ? <Navigate to="/dashboard" /> : <SignIn />}
          />
          <Route
            path="/signup"
            element={isAuthenticated ? <Navigate to="/dashboard" /> : <SignUp />}
          />

          {/* Redirecionar a rota raiz para /signin se não autenticado, ou para /dashboard se autenticado */}
          <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/signin" />} />

          {/* Rotas protegidas */}
          <Route element={<PrivateRoute />}>
            <Route element={<AppLayout />}>
              <Route path="/dashboard" element={<Home />} /> {/* Alterado para /dashboard */}
              <Route path="/buscamedico" element={<BuscaMedico />} />

              {/* Outras Páginas */}
              <Route path="/profile" element={<UserProfiles />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/blank" element={<Blank />} />

              {/* Formulários */}
              <Route path="/form-elements" element={<FormElements />} />

              {/* Tabelas */}
              <Route path="/basic-tables" element={<BasicTables />} />

              {/* Elementos de UI */}
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/avatars" element={<Avatars />} />
              <Route path="/badge" element={<Badges />} />
              <Route path="/buttons" element={<Buttons />} />
              <Route path="/images" element={<Images />} />
              <Route path="/videos" element={<Videos />} />

              {/* Gráficos */}
              <Route path="/line-chart" element={<LineChart />} />
              <Route path="/bar-chart" element={<BarChart />} />
            </Route>
          </Route>

          {/* Rota de fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
