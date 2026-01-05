import React from "react";
const App = () => {
  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <div className="h-screen lg:flex  text-white bg-black  ">
      <form
        onSubmit={(e) => {
          SubmitHandler(e);
        }}
        className="flex w-full flex-col lg:W-2/3 font-medium gap-5 p-10 "
        action=""
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>
        <input
          className="px-5 py-2 border-2 outline-none rounded"
          type="text"
          placeholder="Enter Note Heading"
        />
        <textarea
          className="px-5 py-2 h-20 border-2 outline-none rounded"
          type="text"
          placeholder="Write Details"
        />
        <button className="bg-white rounded px-5 py-2 outline-none text-black">
          Add Note
        </button>
      </form>
      <div className=" lg:w-2/1 lg:border-l-2 flex flex-col  h-full overflow-auto  p-10 ">
        <h1 className="text-4xl font-bold">Your Notes</h1>
        <div className=" w-full flex gap-4 flex-wrap mt-5 ">
          <div className="h-42 w-52 bg-white rounded-2xl "></div>
          <div className="h-42 w-52 bg-white rounded-2xl "></div>
          <div className="h-42 w-52 bg-white rounded-2xl "></div>
          <div className="h-42 w-52 bg-white rounded-2xl "></div>
       
        </div>
      </div>
    </div>
  );
};

export default App;
