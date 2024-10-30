import { Route, Routes } from "react-router-dom";
import "./App.css";
import { enableMapSet } from "immer";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import PsychologistsPage from "./pages/PsychologistsPage/PsychologistsPage";
import MainModal from "./components/MainModal/MainModal";
import { useBoundStore } from "./zustand/store";
import { getModalName, getUserInfo } from "./zustand/selectors";
import LogInForm from "./components/LogInForm/LogInForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import LogOutInfo from "./components/LogOutInfo/LogOutInfo";
import Reviews from "./components/Reviews/Reviews";
import AppointmentForm from "./components/AppointmentForn/AppointmentForm";
import AuthMessage from "./components/AuthMessage/AuthMessage";
import { useEffect } from "react";

function App() {
  const modalName = useBoundStore(getModalName);
  enableMapSet();
  const displayName = useBoundStore(getUserInfo).displayName;
  // useEffect(() => {
  //   if (displayName) { 

  //   }
  // }, [displayName]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/psychologists" element={<PsychologistsPage />} />
        <Route path="/psychologists/*" element={<PsychologistsPage />}>
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/favorites/*" element={<FavoritesPage />}>
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
      <MainModal>
        {(modalName === "LogIn" && <LogInForm />) ||
          (modalName === "Register" && <RegistrationForm />) ||
          (modalName === "LogOut" && <LogOutInfo />) ||
          (modalName === "Appointment" && <AppointmentForm />) ||
          (modalName === "AuthMessage" && <AuthMessage />)}
      </MainModal>
    </Layout>
  );
}

export default App;
