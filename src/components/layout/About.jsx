import React from 'react';

function About() {
  return (
    <section className="bg-white py-25 " id='about'>
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-800">About Us</h2>
          <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
            At Habot Connect DMCC, we bridge the gap between parents and trusted learning support providers.
            Our mission is to simplify access to essential services like speech therapy, occupational therapy, and specialized tutoring — all tailored to your child’s unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-600">Why Choose Us?</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Vetted, experienced professionals you can trust.</li>
              <li>Personalized support tailored to each child’s development goals.</li>
              <li>Easy-to-use service request form with a smooth process.</li>
              <li>Responsive team that cares about outcomes.</li>
            </ul>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80
"
              alt="Children learning"
              className="rounded-lg shadow-lg object-cover w-full h-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
