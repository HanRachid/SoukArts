const tips = [
  {
    name: "1.Use natural lighting",
    description:
      "Take product photos in a well-lit area near a window to showcase accurate colors and details.",
  },
  {
    name: "2.Use a clean background",
    description:
      "Choose a plain background or a neutral surface to avoid distractions and keep the focus on the product.",
  },
  {
    name: "3.Capture multiple angles",
    description:
      "Take photos from different angles to provide a comprehensive view of the product and help customers make informed decisions.",
  },
  {
    name: "4.Show scale and size",
    description:
      "Include a recognizable object or provide measurements to give customers an idea of the product's dimensions.",
  },
];

export default function Tips() {
  return (
    <>
      <div className="w-full bg-white sm:px-6 lg:px-8 border-2">
        <div className="bg-white">
          <div className="mx-auto max-w-full sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 items-center gap-y-16 gap-x-8 lg:grid-cols-2">
              <div>
                <div className="border-b border-gray-200 pb-10">
                  <h2 className="font-medium text-gray-500">Machined Kettle</h2>
                  <p className="mt-2 text-3xl font-bold tracking-widest text-gray-900 sm:text-4xl font-secondary">
                    photos
                  </p>
                </div>

                <div className="">
                  <div className="font-medium mt-10">Tips:</div>
                  {tips.map((feature) => (
                    <div key={feature.name}>
                      <div className="my-2 text-sm font-medium text-gray-900">
                        {feature.name}
                      </div>
                      <dd className=" text-sm text-gray-500">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-feature-09-main-detail.jpg"
                    alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
                  <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/product-feature-09-detail-01.jpg"
                      alt="Detail of temperature setting button on kettle bass with digital degree readout."
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/product-feature-09-detail-02.jpg"
                      alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
