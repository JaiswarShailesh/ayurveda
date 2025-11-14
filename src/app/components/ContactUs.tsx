"use client";

export default function ContactUs() {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-20 text-green-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-green-800">
            Get In Touch
          </h2>
          <p className="text-green-700 max-w-2xl mx-auto">
            Have questions or wish to book a consultation? We’d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <form className="bg-green-50 p-8 rounded-2xl shadow-md space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-green-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-green-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <input
              type="text"
              placeholder="Phone Number"
              className="border border-green-200 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="border border-green-200 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg w-full transition-all"
            >
              Send Message
            </button>
          </form>

          {/* Map Section */}
          <div className="rounded-2xl overflow-hidden shadow-md h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2030182997295!2d-122.41941548468352!3d37.774929779759434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d8b3b5f8b%3A0xe6e2c2f59cf11c0!2sAyurveda%20Clinic!5e0!3m2!1sen!2sin!4v1697048331832!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
