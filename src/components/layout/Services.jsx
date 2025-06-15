import React from 'react';
import { FaChalkboardTeacher, FaHandsHelping, FaUserMd } from 'react-icons/fa';

const services = [
  {
    title: 'Speech Therapy',
    description: 'Support your child’s communication skills with certified professionals.',
    icon: <FaUserMd className="text-blue-500 text-3xl mb-4" />
  },
  {
    title: 'Occupational Therapy',
    description: 'Enhance fine motor skills and daily functioning through expert help.',
    icon: <FaHandsHelping className="text-teal-500 text-3xl mb-4" />
  },
  {
    title: 'Special Education Tutors',
    description: 'Personalized tutoring based on your child’s specific learning needs.',
    icon: <FaChalkboardTeacher className="text-indigo-500 text-3xl mb-4" />
  }
];

function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-10">Our Core Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 text-left border-t-4 border-blue-400 hover:border-blue-600"
            >
              <div className="flex flex-col items-start">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
