import React from 'react';

function StepNavigation({ step, totalSteps, onNext, onBack, onSubmit }) {
  const isFirst = step === 0;
  const isLast = step === totalSteps - 1;

  return (
    <div className="mt-8 flex justify-between">
      {/* Back Button */}
      <button
        type="button"
        onClick={onBack}
        disabled={isFirst}
        className={`px-4 py-2 rounded ${
          isFirst ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-500 hover:bg-gray-600'
        } text-white`}
      >
        Previous
      </button>

      {/* Next or Submit */}
      {!isLast ? (
        <button
          type="button"
          onClick={onNext}
          className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white"
        >
          Next
        </button>
      ) : (
        <button
          type="button"
          onClick={onSubmit}
          className="px-4 py-2 rounded bg-green-600 hover:bg-green-700 text-white"
        >
          Submit
        </button>
      )}
    </div>
  );
}

export default StepNavigation;
