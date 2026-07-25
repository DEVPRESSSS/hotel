const TESTIMONIALS = [
  {
    id: 1,
    name: "Montemor, Jerald R.",
    feedback: "Nice Hotel",
    rating: 5,
  },
   {
    id: 2,
    name: "Montemor, Jerald R.",
    feedback: "Nice Hotel",
    rating: 5,
  },
    {
    id: 3,
    name: "Montemor, Jerald R.",
    feedback: "Nice Hotel",
    rating: 5,
  },
];

function getInitials(name) {
  return name
    .split(/[\s,]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function FeedbackPage() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">

        {/* Section intro */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            What our customers say
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ id, name, feedback, rating }) => (
            <div
              key={id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100
                         hover:shadow-md hover:-translate-y-1 transition-all duration-200
                         flex flex-col items-center text-center"
            >
              {/* Rounded profile avatar */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full
                              bg-teal-100 text-teal-800 font-semibold text-lg mb-4">
                {getInitials(name)}
              </div>

              <h3 className="font-semibold text-gray-900 text-lg">{name}</h3>

              {/* Star rating */}
              <div className="flex gap-0.5 mt-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 20 20"
                    fill={i < rating ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="1"
                    className="w-4 h-4"
                  >
                    <path d="M10 1.5l2.6 5.3 5.9.8-4.3 4.1 1 5.8L10 14.8l-5.2 2.7 1-5.8-4.3-4.1 5.9-.8L10 1.5z" />
                  </svg>
                ))}
              </div>

              <p className="mt-3 text-sm text-gray-500">"{feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}