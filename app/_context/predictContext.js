"use client";
import { createContext, useContext, useState } from "react";

const initialPredictState = {
  cancer_percentage: 0,
  cancer_type: "",
  cancer_photo: null,
};

const PredictContext = createContext(initialPredictState);

export const PredictProvider = ({ children }) => {
  const [predict, setPredict] = useState(initialPredictState);

  return (
    <PredictContext.Provider value={{ predict, setPredict }}>
      {children}
    </PredictContext.Provider>
  );
};

export function usePredict() {
  const context = useContext(PredictContext);

  if (!context) {
    throw new Error("usePredict must be used within a PredictProvider");
  }
  return context;
}
