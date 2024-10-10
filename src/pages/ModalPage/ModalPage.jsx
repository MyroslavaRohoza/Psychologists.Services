import React from "react";
import MainModal from "../../components/MainModal/MainModal";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const ModalPage = () => {
  return (
    <div>
      <MainModal>

        <RegistrationForm />
      </MainModal>
    </div>
  );
};

export default ModalPage;
