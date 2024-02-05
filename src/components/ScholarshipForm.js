import React, { useState, useEffect } from "react";
import Select from "react-select";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS

const FormComponent = () => {
  const [universities, setUniversities] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  useEffect(() => {
    // Fetch universities data from Netlify Function
    fetch("/.netlify/functions/fetchUniversities")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch universities");
        }
        return response.json();
      })
      .then((data) => {
        setUniversities(data);
      })
      .catch((error) => {
        console.error("Error fetching universities:", error);
      });
  }, []);

  return (
    <div>
      <link rel="stylesheet" href="https://cdn.formbold.com/formbold.css" />
      <br />
      <div className=" formbold-builder-form themeOne ">
        <form
          name="contact"
          enctype="multipart/form-data"
          method="POST"
          className="mx-auto w-full max-w-[570px] rounded-[10px] border border-stroke bg-white div-10 themeOne"
          action="https://formbold.com/s/6lq7n"
          onSubmit="submit"
        >
          <div className="SortableItem fb-builder-item">
            <div className="">
              <label
                htmlFor="firstName"
                className="mb-2.5 block text-base text-black"
              >
                <span>First Name:</span>
                <span class="label-required pl-1 text-red-400">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                placeholder="John"
                required
              />
            </div>
          </div>
          <div className="SortableItem fb-builder-item">
            <div className="">
              <label
                htmlFor="lastName"
                className="mb-2.5 block text-base text-black"
              >
                <span>Last Name:</span>
                <span class="label-required pl-1 text-red-400">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                placeholder="Roy"
                required
              />
            </div>
          </div>
          <div className="SortableItem fb-builder-item">
            <div className="">
              <label
                htmlFor="phoneNumber"
                className="mb-2.5 block text-base text-black"
              >
                <span>Phone Number:</span>
                <span class="label-required pl-1 text-red-400">*</span>
              </label>
              <input
                type="text"
                name="phoneNumber"
                className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                placeholder="+44 20 7123 4567"
                required
              />
            </div>
          </div>
          <div className="SortableItem fb-builder-item">
            <div className="">
              <label
                htmlFor="email"
                className="mb-2.5 block text-base text-black"
              >
                <span>Email Id:</span>
                <span class="label-required pl-1 text-red-400">*</span>
              </label>
              <input
                type="text"
                name="email"
                className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                placeholder="johnroy@gmail.com"
                required
              />
            </div>
          </div>
          <div className="SortableItem fb-builder-item">
            <div className="">
              <label
                htmlFor="university"
                className="mb-2.5 block text-base text-black"
              >
                <span>University</span>
                <span class="label-required pl-1 text-red-400">*</span>
              </label>
              <Select
                options={universities}
                name="univ"
                className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                onChange={setSelectedUniversity}
                value={selectedUniversity}
              />
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex cursor-pointer items-center justify-center rounded border border-primary bg-primary px-8 py-2 text-base font-medium text-white hover:bg-opacity-90"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
