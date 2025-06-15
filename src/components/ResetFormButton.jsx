
function ResetFormButton({ onReset, className = '' }) {
  const handleReset = () => {
    localStorage.removeItem('habotForm');
    localStorage.removeItem('habotFormSubmitted');
    onReset();
  };

  return (
    <button
      onClick={handleReset}
      className={`px-4 py-2  bg-gray-300 text-gray-800 font-bold rounded shadow hover:bg-gray-300  transition ${className}`}
    >
      Reset Form
    </button>
  );
}

export default ResetFormButton;
