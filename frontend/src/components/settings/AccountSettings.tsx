import {
    Button,
    Input,
    Option,
    Select,
    Textarea,
  } from "@material-tailwind/react";
export default function AccountSettings() {
  return (
    <div>
         <div>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 font-primary">
        Account
      </h1>

      <form className="divide-y-gray-200 mt-6 space-y-8 divide-y">
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
          <div className="sm:col-span-6">
            <h2 className="text-xl font-medium text-gray-900">Profile</h2>
            <p className="mt-1 text-sm text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>

          <div className="sm:col-span-3">
            <Input label="First name" />
          </div>

          <div className="sm:col-span-3">
            <Input label="Last name" />
          </div>

          <div className="sm:col-span-6">
            <label
              htmlFor="photo"
              className="block text-xl font-medium text-gray-900"
            >
              Photo
            </label>
            <div className="mt-1 flex items-center">
              <img
                className="inline-block h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
                alt=""
              />
              <div className="ml-4 flex">
                <div className="relative flex cursor-pointer items-center rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-gold-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-50 hover:bg-gray-50">
                  <label
                    htmlFor="user-photo"
                    className="pointer-events-none relative text-sm font-medium text-gray-900"
                  >
                    <span>Change</span>
                    <span className="sr-only"> user photo</span>
                  </label>
                  <input
                    id="user-photo"
                    name="user-photo"
                    type="file"
                    className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                  />
                </div>
                <button
                  type="button"
                  className="ml-3 rounded-md border border-transparent bg-transparent py-2 px-3 text-sm font-medium text-gray-900 hover:text-gray-700 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>

          <div className="sm:col-span-6">
            <Textarea label="Description" />
            <p className="mt-3 text-sm text-gray-500">
              Brief description for your profile. URLs are hyperlinked.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-6 pt-8 sm:grid-cols-6 sm:gap-x-6">
          <div className="sm:col-span-6">
            <h2 className="text-xl font-medium text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>

          <div className="sm:col-span-3">
            <Input label="Email address" />
          </div>

          <div className="sm:col-span-3">
            <Input label="Phone number" />
          </div>

          <div className="sm:col-span-3">
            {/* TODO: RAH KAYNA INPUT SELECT COUNTRIES F MATERIAL TAILWIND */}
            <Select label="Select Version">
              <Option>Maroc</Option>
              <Option>Maroc</Option>
              <Option>Maroc</Option>
              <Option>Maroc</Option>
            </Select>
          </div>

          <div className="sm:col-span-3">
          <Select label="Language">
              <Option>Maroc</Option>
              <Option>Maroc</Option>
              <Option>Maroc</Option>
              <Option>Maroc</Option>
            </Select>
          </div>
          <p className="text-sm text-gray-500 sm:col-span-6">
            This account was created on{" "}
            <time dateTime="2017-01-05T20:35:40">
              January 5, 2017, 8:35:40 PM
            </time>
            .
          </p>
        </div>

        <div className="flex justify-end pt-8">
          <Button color="brown">Save</Button>
        </div>
      </form>
    </div>
    </div>
  )
}
