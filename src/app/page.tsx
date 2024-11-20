import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Assignment
        </h1>
        <p className="text-xl text-gray-700 text-center font-semibold mb-6">
          Assignment class-10 Sunday 2 to 5.
        </p>

        <div className="flex flex-wrap justify-center gap-8">

          <div className="bg-gray-200 p-6 text-center rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/3">
          <img
           src="./rolex.png" 
           alt="Watch-1" 
           className="w-[240px] h-[160px] object-cover rounded-md mb-4"
           />
           <h2 className="text-2xl font-semibold text-gray-800 mb-1">Rolex</h2>
           <p className="text-lg font-bold text-blue-600">$130</p>
           <button className="w-full mt-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800 transition">Buy Now</button>
          </div>

          <div className="bg-gray-200 p-6 text-center rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/3">
          <img
           src="./omega.png" 
           alt="Watch-1" 
           className="w-[240px] h-[160px] object-cover rounded-md mb-4"
           />
           <h2 className="text-2xl font-semibold text-gray-800 mb-1">Omega</h2>
           <p className="text-lg font-bold text-blue-600">$100</p>
           <button className="w-full mt-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800 transition">Buy Now</button>
          </div>

          <div className="bg-gray-200 p-6 text-center rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/3">
          <img
           src="./seiko.png" 
           alt="Watch-1" 
           className="w-[240px] h-[160px] object-cover rounded-md mb-4"
           />
           <h2 className="text-2xl font-semibold text-gray-800 mb-1">Seiko</h2>
           <p className="text-lg font-bold text-blue-600">$110</p>
           <button className="w-full mt-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800 transition">Buy Now</button>
          </div>

        </div>
      </div>
    </div>
  );
}
