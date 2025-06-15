
import React from 'react';
import Step1_ChildDetails from '../components/steps/Step1_ChildDetails';
import Step2_ServiceNeeds from '../components/steps/Step2_ServiceNeeds';
import Step3_ContactInfo from '../components/steps/Step3_ContactInfo';
import StepNavigation from '../components/StepNavigation';
import ResetFormButton from '../components/ResetFormButton';
import { useForm } from '../hooks/useForm';

function Form() {
  const {
    currentStep,
    formData,
    errors,
    submitted,
    handleChange,
    onNext,
    onBack,
    onSubmit,
    resetForm
  } = useForm();

  const steps = [
    <Step1_ChildDetails key={0} data={formData} onChange={handleChange} errors={errors} />,
    <Step2_ServiceNeeds key={1} data={formData} onChange={handleChange} errors={errors} />,
    <Step3_ContactInfo key={2} data={formData} onChange={handleChange} errors={errors} />,
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
      <div className="w-full max-w-2xl bg-white p-8 rounded shadow-md">
        {!submitted ? (
          <>
            {steps[currentStep]}
            <StepNavigation
              step={currentStep}
              totalSteps={steps.length}
              onNext={onNext}
              onBack={onBack}
              onSubmit={onSubmit}
            />
          </>
        ) : (
          
          <>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Thank You, {formData.parentName || 'Parent'}!
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Your request has been successfully submitted. We'll reach out to you soon.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
                <div className="w-48">
                  <a
                    href="/"
                    className=" w-full h-12 flex items-center justify-center text-center bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
                  >
                    Back to Home
                  </a>
                </div>

                <div className="w-48">
                  <ResetFormButton
                    // onReset={() => window.location.reload()}
                      onReset={resetForm}
                    className="w-full h-12 flex items-center justify-center bg-gray-200 text-gray-800 rounded-md shadow hover:bg-gray-300 transition"
                  />
                </div>
              </div>

            </div>
          </>

        )}
      </div>
    </div>
  );
}

export default Form;
