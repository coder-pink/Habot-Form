import React from 'react';

const diagnosisOptions = [
  'Autism Spectrum Disorder',
  'ADHD',
  'Dyslexia',
  'Speech Delay',
  'Other',
];

const schoolTypes = ['Mainstream', 'Special Education', 'Homeschool'];

function Step1_ChildDetails({ data, onChange, errors }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-2">Step 1: Child Details</h2>

      {/* Age */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Child's Age</label>
        <input
          type="number"
          name="age"
          value={data.age}
          onChange={(e) => onChange('age', e.target.value)}
          className={`mt-1 block w-full rounded border p-2 ${
            errors.age ? 'border-red-500' : 'border-gray-300'
          }`}
          min="1"
        />
        {errors.age && <p className="text-sm text-red-500 mt-1">{errors.age}</p>}
      </div>

      {/* Diagnosis */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Diagnosis</label>
        <select
          name="diagnosis"
          value={data.diagnosis}
          onChange={(e) => onChange('diagnosis', e.target.value)}
          className={`mt-1 block w-full rounded border p-2 ${
            errors.diagnosis ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Select Diagnosis</option>
          {diagnosisOptions.map((diag, idx) => (
            <option key={idx} value={diag}>
              {diag}
            </option>
          ))}
        </select>
        {errors.diagnosis && (
          <p className="text-sm text-red-500 mt-1">{errors.diagnosis}</p>
        )}
      </div>

      {/* School Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Current School Type</label>
        <div className="mt-2 space-y-1">
          {schoolTypes.map((type, idx) => (
            <label key={idx} className="flex items-center space-x-2">
              <input
                type="radio"
                name="schoolType"
                value={type}
                checked={data.schoolType === type}
                onChange={(e) => onChange('schoolType', e.target.value)}
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
        {errors.schoolType && (
          <p className="text-sm text-red-500 mt-1">{errors.schoolType}</p>
        )}
      </div>
    </div>
  );
}

export default Step1_ChildDetails;
