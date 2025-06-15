
import { useState, useEffect } from 'react';
import {
  validateStep1,
  validateStep2,
  validateStep3
} from '../utils/validators';

const defaultFormData = {
  age: '',
  diagnosis: '',
  schoolType: '',
  supportTypes: [],
  frequency: '',
  requirements: '',
  parentName: '',
  email: '',
  phone: '',
};

export const useForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(() => {
    return localStorage.getItem('habotFormSubmitted') === 'true';
  });

  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('habotForm');
    return saved ? JSON.parse(saved) :  defaultFormData;
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    localStorage.setItem('habotForm', JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem('habotFormSubmitted', submitted);
  }, [submitted]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateCurrentStep = () => {
    let stepErrors = {};
    if (currentStep === 0) stepErrors = validateStep1(formData);
    else if (currentStep === 1) stepErrors = validateStep2(formData);
    else if (currentStep === 2) stepErrors = validateStep3(formData);

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const onNext = () => {
    if (validateCurrentStep()) setCurrentStep((prev) => prev + 1);
  };

  const onBack = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const onSubmit = () => {
    if (validateCurrentStep()) {
      console.log('Submitted Data:', formData);
      localStorage.setItem('habotFormSubmitted', 'true');
      localStorage.removeItem('habotForm');
      setSubmitted(true);
    }
  };

   const resetForm = () => {
    setFormData(defaultFormData);
    setErrors({});
    setCurrentStep(0);
    setSubmitted(false);
    localStorage.removeItem('habotForm');
    localStorage.removeItem('habotFormSubmitted');
  };

  return {
    currentStep,
    formData,
    errors,
    submitted,
    handleChange,
    onNext,
    onBack,
    onSubmit,
    resetForm,
  };
};
