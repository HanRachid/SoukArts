import {
    Button,
    Input,
    Option,
    Select,
    Textarea,
  } from "@material-tailwind/react";
   const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target?.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const formData = new FormData();
        const localUrl = URL.createObjectURL(file);
        formData.append('file', file);
        formData.append('cloud_name', 'dmgfba0uv');
        formData.append('upload_preset', 'olz6hm0s');

        setProductValues({
          ...productValues,
          formData: [...productValues.formData, formData],
        });
        setBrowsedImages([...browsedImages, localUrl]);
      }
    }
  };

export default function StoreSettings() {
  return (
    <div>
         <div>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 font-primary">
        Store
      </h1>

      <form className="divide-y-gray-200 mt-6 space-y-8 divide-y">
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
          <div className="sm:col-span-6">
            <h2 className="text-xl font-medium text-gray-900">Store Details</h2>
            <p className="mt-1 text-sm text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>

          <div className="sm:col-span-3">
            <Input label="Store name" />
          </div>

          <div className="sm:col-span-3">
            <Input label="Store Contact Email" />
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
              Brief description for your store. URLs are hyperlinked.
            </p>
          </div>

          <label className='text-xl font-medium text-gray-900'>
                    Banner
                  </label>
                  <div className='mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6'>
                    <div className='space-y-1 text-center'>
                      <svg
                        className='mx-auto h-12 w-12 text-gray-400'
                        stroke='currentColor'
                        fill='none'
                        viewBox='0 0 48 48'
                        aria-hidden='true'
                      >
                        <path
                          d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                      <div className='flex text-sm text-gray-600'>
                        <label className='relative cursor-pointer rounded-md bg-white font-medium text-gold-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-gold-500 focus-within:ring-offset-2 hover:text-gold-500'>
                          <span>Upload a file</span>
                          <input
                            type='file'
                            name='image'
                            className='sr-only'
                            multiple
                            onChange={handleFileUpload}
                          />
                        </label>
                        <p className='pl-1'>or drag and drop</p>
                      </div>
                      <p className='text-xs text-gray-500'>
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                  
        </div>
        <h2 className="text-xl font-medium text-gray-900 pt-10">
        Optional Settings
            </h2>
            
            <div className="sm:col-span-3">
            <Input label="Slogan" />
          </div>

          <div className="sm:col-span-3">
            <Input label="About" />
          </div>
          <Textarea label="Announcements" />
          <div className="flex justify-end pt-8">
          <Button color="brown">Save</Button>
        </div>
            
      </form>
    </div>
    </div>
  )
}
