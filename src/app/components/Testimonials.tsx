"use client";

const testimonials = [
  {
    name: "Ananya Sharma",
    text: "The Ayurvedic treatments here completely transformed my energy and health. Truly authentic and holistic care.",
    role: "Patient",
  },
  {
    name: "Rahul Mehta",
    text: "A peaceful environment and caring staff. The Panchakarma therapy was a deeply healing experience.",
    role: "Patient",
  },
  {
    name: "Dr. Kavita Iyer",
    text: "Their approach to Ayurveda is rooted in tradition yet very professional. Highly recommended for true healing.",
    role: "Consultant",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-10">
          What Our Patients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl p-8 border border-green-100 hover:shadow-lg transition-all"
            >
              <p className="text-gray-700 italic mb-6">“{item.text}”</p>
              <h4 className="text-green-800 font-semibold">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
