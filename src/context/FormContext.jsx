import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <FormContext.Provider value={{ submittedData, setSubmittedData }}>
      {children}
    </FormContext.Provider>
  );
};
