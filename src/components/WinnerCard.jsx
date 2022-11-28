/* eslint-disable react/prop-types */
function WinnerCard({ name, image }) {
  return (
    <div className="w-3/12  bg-green-800 border-8 border-double border-yellow-500 flex flex-col justify-center items-center backdrop-filter backdrop-blur-3xl backdrop-saturate-150 bg-black bg-opacity-40 rounded-lg min-h-[70vh] min-w-[40vh] p-4">
      <img src={image} className="rounded-full" alt={name} />
      <p className="uppercase mt-10 text-center pb-5 font-bold text-2xl text-white">
        {name}
      </p>
    </div>
  );
}

export default WinnerCard;
