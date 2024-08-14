const Button: React.FC = () => {
  const router = useRouter();

  const goBack = () => {
    router.push('/login');
  };

  return (
    <div className="mt-6 text-center">
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={goBack}
      >
        Back
      </button>
    </div>
  );
};

export default Button;