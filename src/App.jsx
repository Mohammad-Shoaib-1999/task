import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Form from "./components/Form";
import ResponsePage from "./components/ResponsePage";
import { FormProvider } from "./context/FormContext";

function App() {
  return (
    <FormProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
          <div className="mb-8">
            <Link to="/form">
              <button className="px-4 py-2 mx-2 bg-blue-500 text-white rounded-md">
                Form Page
              </button>
            </Link>
            <Link to="/response">
              <button className="px-4 py-2 mx-2 bg-green-500 text-white rounded-md">
                Response Page
              </button>
            </Link>
          </div>

          <Routes>
            <Route path="/form" element={<Form />} />
            <Route path="/response" element={<ResponsePage />} />
          </Routes>
        </div>
      </Router>
    </FormProvider>
  );
}

export default App;
