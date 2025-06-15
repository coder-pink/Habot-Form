import React from 'react';

function ResetFormButton({ onReset, className = '' }) {
  return (
    <button
      onClick={onReset}
      className={`w-full px-4 py-2 bg-gray-300 text-gray-800 font-semibold rounded-md shadow hover:bg-gray-400 transition duration-200 ${className}`}
    >
      Reset Form
    </button>
  );
}

export default ResetFormButton;
