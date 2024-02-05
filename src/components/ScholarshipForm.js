import React from "react";
// import Select from "react-select";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS

const FormComponent = () => {
  // const [universities, setUniversities] = useState([]);
  // const [error, setError] = useState(null);
  // const [selectedUniversity, setSelectedUniversity] = useState(null);

  // useEffect(() => {
  //   // Fetch universities data from API
  //   fetch("https://universities.hipolabs.com/search?country=United+Kingdom")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch universities");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const universityOptions = data.map((university) => ({
  //         label: university.name,
  //         value: university.name,
  //       }));
  //       setUniversities(universityOptions);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //       console.error("Error fetching universities:", error);
  //     });
  // }, []);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl mb-4 text-center font-bold">Submit Form</h2>
        {/* {error && <div className="text-red-500">{error}</div>} */}
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Your Role:{" "}
              <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select>
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>

        {/* 
        <form
          action="post"
          className="space-y-6"
          name="contact"
          data-netlify="true"
        >
          <p>
            <label htmlFor="firstName" className="block text-gray-700">
              First Name:
            </label>
            <input
              type="text"
              name="firstName"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="John"
              required
            />
          </p>
          <p>
            <label htmlFor="lastName" className="block text-gray-700">
              Last Name:
            </label>
            <input
              type="text"
              name="lastName"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Roy"
              required
            />
          </p>
          <p>
            <label htmlFor="phoneNumber" className="block text-gray-700">
              Phone Number:
            </label>
            <input
              type="text"
              name="phoneNumber"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="+44 20 7123 4567"
              required
            />
          </p>
          <p>
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="johnroy@gmail.com"
              required
            />
          </p>
          <p>
            <label htmlFor="university" className="block text-gray-700">
              University:
            </label>
            <Select
              options={universities}
              className="mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              onChange={setSelectedUniversity}
              value={selectedUniversity}
            />
          </p>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Submit
          </button>
        </form> */}
      </div>
    </div>
  );
};

export default FormComponent;
