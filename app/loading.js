const Loading = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gray-50'>
      <div className='animate-spin rounded-full border-t-4 border-blue-500 border-solid h-16 w-16 mb-6' />
      <h2 className='text-xl font-semibold text-gray-700'>
        Loading, please wait...
      </h2>
    </div>
  );
};

export default Loading;
