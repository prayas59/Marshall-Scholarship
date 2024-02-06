import React, { useState, useEffect } from "react";
import Select from "react-select";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS
import universitiesData from "../world_universities_and_domains.json"; // Import JSON data

const FormComponent = () => {
  const [universities, setUniversities] = useState([]);
  const [selectedUniversity, setSelectedUniversity] =
    useState("Select University");
  const [selectedCountry, setSelectedCountry] = useState("Select Country");

  useEffect(() => {
    if (selectedCountry) {
      // Filter universities based on the selected country
      const filteredUniversities = universitiesData.filter(
        (university) => university.country === selectedCountry
      );
      // Extract university names from the filtered list
      const universityNames = filteredUniversities.map(
        (university) => university.name
      );
      // Set the filtered university names
      setUniversities(universityNames);
    }
  }, [selectedCountry]);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption.value);
  };
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
          // action="https://formbold.com/s/6lq7n"
          action="https://nocodeform.io/f/65c153c79ab501696dc47d48"
          // netlify
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
              <div className="flex flex-wrap">
                <select
                  name="countryCode"
                  className="rounded-l border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary mb-2 md:mb-0 md:mr-2"
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
                  className="flex-1 rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
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
                htmlFor="country"
                className="mb-2.5 block text-base text-black"
              >
                <span>Country</span>
                <span className="label-required pl-1 text-red-400">*</span>
              </label>
              <Select
                options={universitiesData.map((university) => ({
                  label: university.country,
                  value: university.country,
                }))}
                className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                onChange={handleCountryChange}
                value={{ label: selectedCountry, value: selectedCountry }}
                placeholder="Select Country"
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
                <span className="label-required pl-1 text-red-400">*</span>
              </label>

              <Select
                options={universities.map((university) => ({
                  label: university,
                  value: university,
                }))}
                className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                onChange={(selectedOption) =>
                  setSelectedUniversity(selectedOption.value)
                }
                value={{ label: selectedUniversity, value: selectedUniversity }}
                placeholder="Select University"
                required
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
