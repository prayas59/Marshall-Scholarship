// components/FormBoldForm.js
import React from "react";

const FormBoldForm = () => {
  return (
    <div className="text-black">
      <link rel="stylesheet" href="https://cdn.formbold.com/formbold.css" />
      <br />

      <div className="formbold-builder-form themeOne">
        <form
          encType="multipart/form-data"
          action="https://formbold.com/s/6lq7n"
          method="POST"
          className="mx-auto w-full max-w-[570px] rounded-[10px] border border-stroke bg-white p-10 themeOne"
        >
          <div className="mb-4">
            <label className="mb-2.5 block text-base text-black">
              <span>Name</span>
              <span className="label-required pl-1 text-red-400">*</span>
            </label>
            <input
              type="text"
              className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
              name="text_input_C61942F8-B0AB-4D9D-B691-8BCE3E62DF9E"
              placeholder="John Roy"
              required=""
              value=""
            />
          </div>
          <div className="mb-4">
            <label className="mb-2.5 block text-base text-black">
              <span>WhatsApp Phone Number</span>
              <span className="label-required pl-1 text-red-400">*</span>
            </label>
            <input
              type="tel"
              className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
              name="phone_input_CE3F3928-A99D-4D88-BF0C-E729285DB836"
              placeholder="+44 20 7123 4567"
              required=""
              value=""
            />
          </div>
          <div className="mb-4">
            <label className="mb-2.5 block text-base text-black">
              <span>E-Mail</span>
              <span className="label-required pl-1 text-red-400">*</span>
            </label>
            <input
              type="email"
              className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
              name="email_input_6616E84A-2371-42AD-8924-1B9377253F2B"
              placeholder="Enter Email Address"
              required=""
              value=""
            />
          </div>
          <div className="mb-4">
            <label className="mb-2.5 block text-base text-black">
              <span>University Name</span>
              <span className="label-required pl-1 text-red-400">*</span>
            </label>
            <input
              type="text"
              className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
              name="text_input_D4B648E0-514D-453B-A233-18DD740713FD"
              placeholder="University Name"
              required=""
              value=""
            />
          </div>
          <div className="btn-toolbar flex items-center space-x-3">
            <input
              type="submit"
              className="inline-flex cursor-pointer items-center justify-center rounded border border-primary bg-primary px-8 py-2 text-base font-medium text-white hover:bg-opacity-90"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormBoldForm;
