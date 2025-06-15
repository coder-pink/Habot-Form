import React from 'react';

function Step3_ContactInfo({ data, onChange, errors = {} }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Step 3: Contact Information</h2>

      {/* Parent Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Parent's Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="parentName"
          value={data.parentName}
          onChange={(e) => onChange('parentName', e.target.value)}
          className="block w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring focus:border-blue-400"
        />
        {errors.parentName && (
          <p className="text-red-500 text-sm mt-1">{errors.parentName}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={(e) => onChange('email', e.target.value)}
          className="block w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring focus:border-blue-400"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={data.phone}
          onChange={(e) => onChange('phone', e.target.value)}
          className="block w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring focus:border-blue-400"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}
      </div>
    </div>
  );
}

export default Step3_ContactInfo;
