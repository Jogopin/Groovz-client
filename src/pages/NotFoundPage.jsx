export default function NotFoundPage({errorMessage}) {


  return (
    <div className="flex flex-col h-full items-center justify-center flex-grow">
      <h1 className="uppercase tracking-widest text-gray-500 ">404 | Not Found</h1>
      {errorMessage ? <p className="text-sm text-red-700 tracking-widest">{errorMessage}</p>  : <></>}
    </div>
  );
}
