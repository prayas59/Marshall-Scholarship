import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import Select from "react-select";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS

const FormComponent = () => {
  const [universities, setUniversities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch universities data from API
    fetch("https://universities.hipolabs.com/search?country=United+Kingdom")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch universities");
        }
        return response.json();
      })
      .then((data) => {
        const universityOptions = data.map((university) => ({
          label: university.name,
          value: university.name,
        }));
        setUniversities(universityOptions);
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error fetching universities:", error);
      });
  }, []);

  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    university: null,
  };

  const handleSubmit = (values, actions) => {
    console.log("Form values:", values);
    actions.setSubmitting(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl mb-4 text-center font-bold">Submit Form</h2>
        {error && <div className="text-red-500">{error}</div>}
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {(
            { isSubmitting, setFieldValue, values } // Destructure setFieldValue and values from Formik context
          ) => (
            <Form className="space-y-6" name="contact" netlify>
              <div>
                <label htmlFor="firstName" className="block text-gray-700">
                  First Name:
                </label>
                <Field
                  type="text"
                  name="firstName"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700">
                  Last Name:
                </label>
                <Field
                  type="text"
                  name="lastName"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Roy"
                  required
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-gray-700">
                  Phone Number:
                </label>
                <Field
                  type="text"
                  name="phoneNumber"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="+44 20 7123 4567"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email:
                </label>
                <Field
                  type="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="johnroy@gmail.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="university" className="block text-gray-700">
                  University:
                </label>
                <Field
                  name="university"
                  as={Select}
                  options={universities}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={(option) => setFieldValue("university", option)}
                  value={values.university}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormComponent;
