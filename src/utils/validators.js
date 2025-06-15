

export function validateStep1(data) {
  const errors = {};
  if (!data.age || isNaN(data.age) || data.age < 1) {
    errors.age = 'Please enter a valid age.';
  }
  if (!data.diagnosis) {
    errors.diagnosis = 'Diagnosis is required.';
  }
  if (!data.schoolType) {
    errors.schoolType = 'Please select a school type.';
  }
  return errors;
}

export function validateStep2(data) {
  const errors = {};
  if (!data.supportTypes || data.supportTypes.length === 0) {
    errors.supportTypes = 'Please select at least one support type.';
  }
  if (!data.frequency) {
    errors.frequency = 'Please select a preferred frequency.';
  }
  return errors;
}


export const validateStep3 = (data) => {
  const errors = {};

  if (!data.parentName.trim()) {
    errors.parentName = 'Full name is required.';
  }

  if (!data.email) {
    errors.email = 'Email is required.';
  } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.email = 'Enter a valid email address.';
  }

  if (!data.phone) {
    errors.phone = 'Phone number is required.';
  } else if (!/^\d{10,15}$/.test(data.phone)) {
    errors.phone = 'Enter a valid phone number (10–15 digits).';
  }

  return errors;
};