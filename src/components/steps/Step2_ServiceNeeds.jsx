import React from 'react';

const supportOptions = [
  'Speech Therapy',
  'Occupational Therapy',
  'Behavioral Therapy',
  'Special Education Tutor',
  'Other',
];

const frequencyOptions = [
  'Once a week',
  'Twice a week',
  'Daily',
  'Flexible',
];

function Step2_ServiceNeeds({ data, onChange, errors = {} }) {
  const handleCheckboxChange = (value) => {
    const current = data.supportTypes || [];
    if (current.includes(value)) {
      onChange('supportTypes', current.filter((item) => item !== value));
    } else {
      onChange('supportTypes', [...current, value]);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Step 2: Service Needs</h2>

      {/* Support Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Type of Support Needed <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {supportOptions.map((support, idx) => (
            <label key={idx} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={support}
                checked={data.supportTypes.includes(support)}
                onChange={() => handleCheckboxChange(support)}
                className="accent-blue-600"
              />
              <span>{support}</span>
            </label>
          ))}
        </div>
        {errors.supportTypes && (
          <p className="text-red-500 text-sm mt-1">{errors.supportTypes}</p>
        )}
      </div>

      {/* Frequency */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Preferred Frequency <span className="text-red-500">*</span>
        </label>
        <select
          name="frequency"
          value={data.frequency}
          onChange={(e) => onChange('frequency', e.target.value)}
          className="block w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring focus:border-blue-400"
        >
          <option value="">Select Frequency</option>
          {frequencyOptions.map((freq, idx) => (
            <option key={idx} value={freq}>
              {freq}
            </option>
          ))}
        </select>
        {errors.frequency && (
          <p className="text-red-500 text-sm mt-1">{errors.frequency}</p>
        )}
      </div>

      {/* Specific Requirements */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Any Specific Requirements
        </label>
        <textarea
          name="requirements"
          value={data.requirements}
          onChange={(e) => onChange('requirements', e.target.value)}
          className="block w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring focus:border-blue-400"
          rows={4}
          placeholder="Describe any specific needs or conditions..."
        />
      </div>
    </div>
  );
}

export default Step2_ServiceNeeds;
