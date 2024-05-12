import React from "react";

const SuccessNotification = () => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 px-4 py-2 bg-green-500 text-white text-center rounded shadow-lg z-50">
      ✔ Form başarıyla gönderilmiştir.
    </div>
  );
};

export default SuccessNotification;