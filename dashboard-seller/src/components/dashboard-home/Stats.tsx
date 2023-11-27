const stats = [
  { name: "Total Subscribers", stat: "71,897" },
  { name: "Avg. Open Rate", stat: "58.16%" },
  { name: "Avg. Click Rate", stat: "24.57%" },
];

export default function Stats() {
  return (
    <div className="w-full mt-16">
      <div className="flex lg:flex-row flex-col lg:justify-between justify-start mb-8">
        <h3 className="text-3xl font-semibold leading-6 text-black font-primary">
          Stats overview
        </h3>
        <h2 className="text-colorBrown">For last 30 days</h2>
      </div>
      <dl className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden bg-white px-4 py-5 shadow sm:p-6"
          >
            <dt className="truncate text-sm font-medium text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {item.stat}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
