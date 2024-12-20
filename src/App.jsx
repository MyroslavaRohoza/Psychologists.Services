import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { enableMapSet } from "immer";
import Layout from "./components/Layout/Layout";
import MainModal from "./components/MainModal/MainModal";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));
const PsychologistsPage = lazy(() =>
  import("./pages/PsychologistsPage/PsychologistsPage")
);
const Reviews = lazy(() => import("./components/Reviews/Reviews"));
const AuthMessage = lazy(() => import("./components/AuthMessage/AuthMessage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
import { useBoundStore } from "./zustand/store";
import { getModalName } from "./zustand/selectors";
import LogInForm from "./components/LogInForm/LogInForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import LogOutInfo from "./components/LogOutInfo/LogOutInfo";
import AppointmentForm from "./components/AppointmentForn/AppointmentForm";
import Loader from "./components/Loader/Loader";

function App() {
  const modalName = useBoundStore(getModalName);
  
  enableMapSet();

  const chooseModal = (modalName) => {
    switch (modalName) {
      case "LogIn":
        return <LogInForm />;
      case "Register":
        return <RegistrationForm />;
      case "LogOut":
        return <LogOutInfo />;
      case "AuthMessage":
        return <AuthMessage />;
      case "Appointment":
        return <AppointmentForm />;
      default:
        return null;
    }
  };

  return (
    <Suspense fallback={<Loader color="var(--hover-green)" size={40} />}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites/*" element={<FavoritesPage />}>
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/psychologists/*" element={<PsychologistsPage />}>
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <MainModal>{chooseModal(modalName)}</MainModal>
      </Layout>
    </Suspense>
  );
}

export default App;
