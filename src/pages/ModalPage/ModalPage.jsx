import React from "react";
import MainModal from "../../components/MainModal/MainModal";
import LogInForm from "../../components/LogInForm/LogInForm";

const ModalPage = () => {
  return (
    <div>
      <MainModal>
        <LogInForm />
      </MainModal>
    </div>
  );
};

export default ModalPage;
