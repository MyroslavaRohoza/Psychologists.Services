import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import PsychologistsPage from "./pages/PsychologistsPage/PsychologistsPage";
import MainModal from "./components/MainModal/MainModal";
import { useBoundStore } from "./zustand/store";
import { getModalName } from "./zustand/selectors";
import LogInForm from "./components/LogInForm/LogInForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import LogOutInfo from "./components/LogOutInfo/LogOutInfo";
import Reviews from "./components/Reviews/Reviews";

function App() {
  const modalName = useBoundStore(getModalName);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/psychologists" element={<PsychologistsPage />} />
        <Route path="/psychologists/*" element={<PsychologistsPage />}>
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
      <MainModal>
        {(modalName === "LogIn" && <LogInForm />) ||
          (modalName === "Register" && <RegistrationForm />) ||
          (modalName === "LogOut" && <LogOutInfo />)}
      </MainModal>
    </Layout>
  );
}

export default App;
