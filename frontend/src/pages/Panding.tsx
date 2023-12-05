
import { useNavigate } from "react-router-dom";

function Panding() {
  const navigate = useNavigate();

  // Replace this function with actual confirmation logic
  const checkConfirmation = () => {
    // Simulate confirmation logic
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-20">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
        {/* Custom CSS Spinner */}
        <div className="border-t-4 border-b-4 border-colorGold rounded-full w-12 h-12 mb-4 mx-auto animate-spin"></div>

        <h2 className="text-xl font-semibold text-gray-800 font-secondary">Waiting for Confirmation</h2>
        <p className="text-gray-600 mt-2 font-secondary mb-10">Your seller profile is almost ready! Please wait while we confirm your details.</p>


        <button
          type="submit"
          className="w-full bg-colorGold py-2.5 rounded-bl-xl rounded-tr-xl text-gray-50 font-semibold font-secondary hover:scale-[1.02] transition-all duration-100 hover:bg-opacity-90"
          onClick={checkConfirmation}
        >
          Check Confirmation
        </button>

      </div>
    </div>
  );
}

export default Panding;
