import React from "react";

const FormBoldForm = () => {
  return (
    <div className="text-black">
      <link rel="stylesheet" href="https://cdn.formbold.com/formbold.css" />
      <br />
      <div className="formbold-builder-form themeOne">
        <form
          method="POST"
          action="https://formbold.com/s/6lq7n"
          className="mx-auto w-full max-w-[570px] rounded-[10px] border border-stroke bg-white p-10 themeOne"
        >
          {/* Convert HTML input fields to React equivalents */}
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
              required
            />
          </div>
          <div className="mb-4">
            <label className="mb-2.5 block text-base text-black">
              <span>WhatsApp Phone Number</span>
              <span className="label-required pl-1 text-red-400">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
              placeholder="+44 20 7123 4567"
              required
            />
          </div>
          <div className="mb-4">
            <label className="mb-2.5 block text-base text-black">
              <span>E-Mail</span>
              <span className="label-required pl-1 text-red-400">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
              placeholder="Enter Email Address"
              required
            />
          </div>
          <div className="mb-4">
            <label className="mb-2.5 block text-base text-black">
              <span>University Name</span>
              <span className="label-required pl-1 text-red-400">*</span>
            </label>
            <input
              type="text"
              name="university"
              className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
              placeholder="University Name"
              required
            />
          </div>
          {/* ... other input fields ... */}

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
