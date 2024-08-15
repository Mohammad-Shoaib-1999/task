import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";

const ResponsePage = () => {
  const { submittedData } = useContext(FormContext);

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Form Submission</h2>
      {submittedData ? (
        <div>
          <div className="mb-4">
            {" "}
            <p>
              <strong>Name:</strong> {submittedData.name}
            </p>
          </div>
          <div className="mb-4">
            <p>
              <strong>Gender:</strong> {submittedData.gender}
            </p>
          </div>{" "}
          <div className="mb-4">
            {" "}
            <p>
              <strong>Category:</strong> {submittedData.category}
            </p>
          </div>{" "}
          <div className="mb-4">
            {" "}
            <p>
              <strong>Interests:</strong> {submittedData.interests.join(", ")}
            </p>
          </div>{" "}
          <div className="mb-4">
            {" "}
            <p>
              <strong>Terms Accepted:</strong>{" "}
              {submittedData.termsAccepted ? "Yes" : "No"}
            </p>
          </div>
        </div>
      ) : (
        <p>No data submitted yet.</p>
      )}
    </div>
  );
};

export default ResponsePage;
