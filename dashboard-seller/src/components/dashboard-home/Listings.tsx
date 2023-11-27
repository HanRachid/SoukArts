const listingsData = [
  {
    id: 1,
    title: "Active Listings",
    count: 0,
  },
  {
    id: 2,
    title: "Expired",
    count: 0,
  },
  {
    id: 3,
    title: "Sold out",
    count: 0,
  },
];

export default function Listings() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-semibold leading-6 text-black font-primary">
        Your Shop's Checklist
      </h2>
      <div className="overflow-hidden bg-white border mt-8">
        <ul role="list" className="divide-y divide-gray-200">
          <li>
            <div className="block hover:bg-gray-50/20">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div className="truncate">
                    <div className="flex text-sm">
                      <p className="truncate font-semibold text-black text-xl">
                        Listings
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                    <div className="text-colorBlack underline">
                      View all listings
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          {listingsData.map((data) => (
            <li key={data.id}>
              <div className="block hover:bg-gray-50/20">
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                    <div className="truncate">
                      <div className="flex text-sm">
                        <p className="truncate font-medium text-colorBlack">
                          {data.title}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                      <div className="text-colorBlack">{data.count}</div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
