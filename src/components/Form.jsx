import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../context/FormContext";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    category: "",
    interests: [],
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // State to manage submission status
  const [confirmationMessage, setConfirmationMessage] = useState(""); // State to store confirmation message
  const { setSubmittedData } = useContext(FormContext);
  const navigate = useNavigate();

  const validateForm = () => {
    let newErrors = {};

    // Name validation (required and should be alphabetic)
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name should contain only letters and spaces.";
    }

    // Gender validation (required)
    if (!formData.gender) {
      newErrors.gender = "Gender is required.";
    }

    // Category validation (required)
    if (!formData.category) {
      newErrors.category = "Category is required.";
    }

    // Interests validation (at least one interest must be selected)
    if (formData.interests.length === 0) {
      newErrors.interests = "Please select at least one interest.";
    }

    // Terms and Conditions validation (must be accepted)
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "You must accept the terms and conditions.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleInterestsChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      interests: checked
        ? [...prevData.interests, value]
        : prevData.interests.filter((interest) => interest !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true); // Disable the submit button
      setSubmittedData(formData);
      setConfirmationMessage("Your data has been successfully submitted!");
      navigate("/response");
    } else {
      setIsSubmitting(false); // Re-enable the submit button if validation fails
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      gender: "",
      category: "",
      interests: [],
      termsAccepted: false,
    });
    setErrors({});
    setConfirmationMessage(""); // Clear the confirmation message
  };

  return (
    <form className="max-w-md mx-auto p-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border rounded-md"
          required
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Gender</label>
        <div className="mt-1 flex">
          <label className="mr-4">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
              className="mr-2"
              required
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
              className="mr-2"
              required
            />
            Female
          </label>
        </div>
        {errors.gender && (
          <p className="text-red-500 text-sm">{errors.gender}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border rounded-md"
          required
        >
          <option value="">Select Category</option>
          <option value="student">Student</option>
          <option value="professional">Professional</option>
          <option value="other">Other</option>
        </select>
        {errors.category && (
          <p className="text-red-500 text-sm">{errors.category}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Interests</label>
        <div className="mt-1">
          <label className="block">
            <input
              type="checkbox"
              value="sports"
              checked={formData.interests.includes("sports")}
              onChange={handleInterestsChange}
              className="mr-2"
            />
            Sports
          </label>
          <label className="block">
            <input
              type="checkbox"
              value="music"
              checked={formData.interests.includes("music")}
              onChange={handleInterestsChange}
              className="mr-2"
            />
            Music
          </label>
          <label className="block">
            <input
              type="checkbox"
              value="reading"
              checked={formData.interests.includes("reading")}
              onChange={handleInterestsChange}
              className="mr-2"
            />
            Reading
          </label>
        </div>
        {errors.interests && (
          <p className="text-red-500 text-sm">{errors.interests}</p>
        )}
      </div>

      <div className="mb-4">
        <label>
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            className="mr-2"
            required
          />
          I accept the terms and conditions
        </label>
        {errors.termsAccepted && (
          <p className="text-red-500 text-sm">{errors.termsAccepted}</p>
        )}
      </div>

      {confirmationMessage && (
        <p className="text-green-500 text-sm mb-4">{confirmationMessage}</p>
      )}

      <div className="flex justify-between">
        <button
          type="submit"
          className={`w-full mr-2 py-2 px-4 text-white rounded-md ${
            isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
          }`}
          disabled={isSubmitting}
        >
          Submit
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="w-full ml-2 py-2 px-4 bg-gray-500 text-white rounded-md"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default Form;
