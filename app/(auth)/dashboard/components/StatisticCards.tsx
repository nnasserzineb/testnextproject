import React from "react";

const StatisticCards = () => {
    return (
        <><h1 className=" ml-3 mt-2 mb-2 text-xl font-semibold tracking-tight text-gray-600 ">
       Statistic Cards
    </h1>
    <section className="text-gray-600 body-font bg-white flex justify-center items-center">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 text-center">
    <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
        <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
          <div>
            <h2 className="text-gray-900 text-lg font-bold">Total Completed Orders</h2>
            <h3 className="mt-2 text-xl font-bold text-green-500 text-left"> 55 +2%</h3>
            <p className="text-sm font-semibold text-gray-400">Last Transaction</p>
            <button className="text-sm mt-6 px-4 py-2 bg-green-400  text-white rounded-lg  tracking-wider hover:bg-green-500 outline-none">View in Table</button>
          </div>
          <div
            className="bg-gradient-to-tr from-green-500 to-green-500 w-24 h-24  rounded-full shadow-2xl shadow-green-300 border-white  border-dashed border-2  flex justify-center items-center ">
            <div>
              <h1 className="text-white text-xl">Complete</h1>
            </div>
          </div>
        </div>

      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
        <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
          <div>
            <h2 className="text-gray-900 text-lg font-bold">Total In Progress Orders</h2>
            <h3 className="mt-2 text-xl font-bold text-yellow-500 text-left"> 40 + 8%</h3>
            <p className="text-sm font-semibold text-gray-400">Last Transaction</p>
            <button className="text-sm mt-6 px-4 py-2 bg-yellow-400 text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">View in Table</button>
          </div>
          <div
            className="bg-gradient-to-tr from-yellow-500 to-yellow-400 w-24 h-24 rounded-full shadow-2xl shadow-yellow-300  border-white  border-dashed border-2  flex justify-center items-center ">
            <div>
              <h1 className="text-white text-xl">In <br/>Progress</h1>
            </div>
          </div>
        </div>

      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
        <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
          <div>
            <h2 className="text-gray-900 text-lg font-bold">Total Canceled Orders</h2>
            <h3 className="mt-2 text-xl font-bold text-orange-500 text-left">+1%</h3>
            <p className="text-sm font-semibold text-gray-400">Last Transaction</p>
            <button className="text-sm mt-6 px-4 py-2 bg-orange-400  text-white rounded-lg  tracking-wider hover:bg-orange-500 outline-none">View in Table</button>
          </div>
          <div
            className="bg-gradient-to-tr from-orange-500 to-orange-400 w-24 h-24  rounded-full shadow-2xl shadow-orange-300  border-white  border-dashed border-2  flex justify-center items-center ">
            <div>
              <h1 className="text-white text-xl">Cancel</h1>
            </div>
          </div>
        </div>

      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
        <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
          <div>
            <h2 className="text-gray-900 text-lg font-bold">Total Product Offerings</h2>
            <h3 className="mt-2 text-xl font-bold text-red-500 text-left">15 +4%</h3>
            <p className="text-sm font-semibold text-gray-400">Last Transaction</p>
            <button className="text-sm mt-6 px-4 py-2 bg-red-400  text-white rounded-lg  tracking-wider hover:bg-red-500 outline-none">View in Table</button>
          </div>
          <div
            className="bg-gradient-to-tr from-red-500 to-red-400 w-24 h-24  rounded-full shadow-2xl shadow-red-300  border-white  border-dashed border-2  flex justify-center items-center ">
            <div>
              <h1 className="text-white text-xl">Publish</h1>
            </div>
          </div>
        </div>

      </div>

      
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
        <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
          <div>
            <h2 className="text-gray-900 text-lg font-bold">Total Retired Product Offerings</h2>
            <h3 className="mt-2 text-xl font-bold text-cyan-500 text-left">4 -3%</h3>
            <p className="text-sm font-semibold text-gray-400">Last Transaction</p>
            <button className="text-sm mt-6 px-4 py-2 bg-cyan-400  text-white rounded-lg  tracking-wider hover:bg-cyan-500 outline-none">View in Table</button>
          </div>
          <div
            className="bg-gradient-to-tr from-cyan-500 to-cyan-400 w-24 h-24  rounded-full shadow-2xl shadow-cyan-300  border-white  border-dashed border-2  flex justify-center items-center ">
            <div>
              <h1 className="text-white text-xl">Retired</h1>
            </div>
          </div>
        </div>

      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
        <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
          <div>
            <h2 className="text-gray-900 text-lg font-bold">Total In Draft Product Offerings</h2>
            <h3 className="mt-2 text-xl font-bold text-indigo-500 text-left">5 +5%</h3>
            <p className="text-sm font-semibold text-gray-400">Last Transaction</p>
            <button className="text-sm mt-6 px-4 py-2 bg-indigo-400 text-white rounded-lg  tracking-wider hover:bg-indigo-500 outline-none">View in Table</button>
          </div>
          <div
            className="bg-gradient-to-tr from-indigo-500 to-indigo-400 w-24 h-24  rounded-full shadow-2xl shadow-[#304FFE] border-white  border-dashed border-2  flex justify-center items-center ">
            <div>
              <h1 className="text-white text-xl">Draft</h1>
            </div>
          </div>
        </div>
</div>
      </div>
      
    </div>
</section>
        </>
            );
};

export default StatisticCards;
