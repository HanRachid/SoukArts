import { useState } from "react";

export default function ProfileSettings() {
  const [isChecked, setIsChecked] = useState(false);
  const [day, setDay] = useState(""); // Day state
  const [month, setMonth] = useState(""); // Month state
  const [year, setYear] = useState(""); // Year state
  const [gender, setGender] = useState("");
  const handleDayChange = (e) => {
    setDay(e.target.value);
  };
  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };
  return (
    <section className="flex flex-col">
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Your Profile
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="title"
                        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-gold-500 focus:ring-gold-500 sm:text-sm"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="title"
                      className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-gold-500 focus:ring-gold-500 sm:text-sm"
                      placeholder="Your city"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Help find your customers
                  </p>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Birthday
                  </label>
                  <select id="day" value={day} onChange={handleDayChange}>
                    <option value="">Day</option>
                    {Array.from({ length: 31 }, (_, index) => (
                      <option key={index + 1} value={index + 1}>
                        {index + 1}
                      </option>
                    ))}
                  </select>
                  <select id="month" value={month} onChange={handleMonthChange}>
                    <option value="">Month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                  <select id="year" value={year} onChange={handleYearChange}>
                    <option value="">Year</option>
                    {Array.from({ length: 34 }, (_, index) => (
                      <option key={index} value={1990 + index}>
                        {1990 + index}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your Photo
                  </label>
                  <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer rounded-md bg-white font-medium text-gold-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-gold-500 focus-within:ring-offset-2 hover:text-gold-500">
                          <span>Upload a picture</span>
                          <input
                            type="file"
                            name="image"
                            className="sr-only"
                            multiple
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Gender:
                  </label>
                  <div>
                    <label>
                      <input
                        className="border-2"
                        type="radio"
                        name="gender"
                        value="woman"
                        checked={gender === "woman"}
                        onChange={handleGenderChange}
                      />
                      Woman
                    </label>
                    <label style={{ marginLeft: "10px" }}>
                      <input
                        type="radio"
                        name="gender"
                        value="man"
                        checked={gender === "man"}
                        onChange={handleGenderChange}
                      />
                      Man
                    </label>
                    <label style={{ marginLeft: "10px" }}>
                      <input
                        type="radio"
                        name="gender"
                        value="other"
                        checked={gender === "other"}
                        onChange={handleGenderChange}
                      />
                      Other
                    </label>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="propos"
                    className="block text-sm font-medium text-gray-700"
                  >
                    A propos:
                  </label>
                  <div>
                    <textarea />
                  </div>
                  <small className="mt-2 text-sm text-gray-500">
                    Let people know about you.
                  </small>
                </div>

                <div>
                  <label
                    htmlFor="propos"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Matériaux favoris
                  </label>
                  <div>
                    <textarea />
                  </div>
                  <small className="mt-2 text-sm text-gray-500">
                    You can share 13 materials maximum that you like. Separate
                    each material with a semicolon.
                  </small>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {/* {productValues.photos.map((photo, index) => (
                    <div key={index} className="group relative">
                      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-32">
                        <button
                          onClick={() => {
                            setProductValues({
                              ...productValues,
                              photos: productValues.photos.filter(
                                (photo, indexPhoto) => indexPhoto !== index
                              ),
                            });
                          }}
                        >
                          X
                        </button>
                        <img
                          src={photo.url}
                          alt=""
                          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      </div>
                    </div>
                  ))} */}
                  <div className="block text-sm font-medium text-gray-700">
                    <label htmlFor="">Show on your profile</label>
                    <input
                      type="checkbox"
                      id="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      className="block text-sm font-medium text-gray-700"
                    />
                    Boutique
                    <input
                      type="checkbox"
                      id="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      className="block text-sm font-medium text-gray-700"
                    />
                    Articles favoris
                    <input
                      type="checkbox"
                      id="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      className="block text-sm font-medium text-gray-700"
                    />
                    Boutiques favorites
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Shiping Address
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Please enter you shipping address
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6">
                      <label className="block text-sm font-medium text-gray-700">
                        Country
                      </label>
                      <input
                        name="coutry"
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6">
                      <label className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        name="FullName"
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6">
                      <label className="block text-sm font-medium text-gray-700">
                        Address
                      </label>
                      <input
                        name="Address"
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6">
                      <label className="block text-sm font-medium text-gray-700">
                        Address 2
                      </label>
                      <input
                        name="address2"
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6">
                      <label className="block text-sm font-medium text-gray-700">
                        Code postal
                      </label>
                      <input
                        name="codepostal"
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6">
                      <label className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-gold-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gold-700 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
