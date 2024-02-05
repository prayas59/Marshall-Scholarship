import React, { useState, useEffect } from "react";
import Select from "react-select";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS

const FormComponent = () => {
  const [universities, setUniversities] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  useEffect(() => {
    // Fetch universities data from API with HTTP endpoint
    fetch("http://universities.hipolabs.com/search?country=United+Kingdom")
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
        // setError(error.message);
        console.error("Error fetching universities:", error);
      });
  }, []);

  return (
    <div>
      <div class="max-w-lg mx-auto mt-6 p-6 bg-red-500 rounded-lg shadow-lg">
        <p class="text-xl text-center font-bold  bg-blue px-4 py-2 rounded">
          Fill out your details for Scholarship eligibility process
        </p>
      </div>
      <link rel="stylesheet" href="https://cdn.formbold.com/formbold.css" />
      <br />
      <div className=" formbold-builder-form themeOne ">
        <form
          name="contact"
          encType="multipart/form-data"
          method="POST"
          className="mx-auto p-2 w-full max-w-[570px] rounded-[10px] border border-stroke bg-white div-10 themeOne"
          action="https://formbold.com/s/6lq7n"
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
                <span className="label-required pl-1 text-red-400">*</span>
              </label>
              <div className="flex">
                <select
                  name="countryCode"
                  className="rounded-l border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                >
                  {/* Add your country codes here */}
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+49">+49</option>
                  <option value="+61">+61</option>
                  <option value="+64">+64</option>
                  <option value="+91">+91</option>
                  {/* Add more options as needed */}
                </select>
                <input
                  type="text"
                  name="phoneNumber"
                  className="flex-1 rounded-r border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                  placeholder="20 7123 4567"
                  required
                />
              </div>
            </div>
          </div>
          <div className="SortableItem fb-builder-item">
            <div className="">
              <label
                htmlFor="email"
                className="mb-2.5 block text-base text-black"
              >
                <span>Email Id </span>
                <span class=" text-red-400">&#40;Optional&#41;</span>
              </label>
              <input
                type="text"
                name="email"
                className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                placeholder="johnroy@gmail.com"
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
