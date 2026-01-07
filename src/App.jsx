import  { useState } from "react";
import { X } from "lucide-react";
const App = () => {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [task, setTask] = useState([]);

  const SubmitHandler = (e) => {
    e.preventDefault();

    const CopyTask = [...task];
    CopyTask.push({ Title, Description });
    setTask(CopyTask);

    setTitle("");
    setDescription("");
  };

  const DeleteNote = (idx) => {
    const Copytask = [...task];
    Copytask.splice(idx, 1);

    setTask(Copytask);
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
        {/* First Input For Heading */}
        <input
          className="px-5 py-2 border-2 outline-none rounded"
          type="text"
          value={Title}
          placeholder="Enter Note Heading"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        {/* Description Input */}
        <textarea
          className="px-5 py-2 h-20 border-2 outline-none rounded"
          type="text"
          value={Description}
          placeholder="Write Details"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button className="bg-white active:scale-95 rounded px-5 py-2 outline-none text-black">
          Add Note
        </button>
      </form>
      <div className=" lg:w-2/1 lg:border-l-2 flex flex-col  h-full overflow-auto  p-10 ">
        <h1 className="text-4xl font-bold">Your Notes</h1>
        <div className=" w-full flex gap-4 flex-wrap mt-5 ">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="text-black p-6 relative flex justify-between items-center  w-full bg-white rounded-2xl "
              >
                <div className="content">
                  <h3 className="2xl leading-tight  font-bold   ">
                    {elem.Title}
                  </h3>
                  <p className="text-xl text-gray-500 font-semibold mt-2">
                    "{elem.Description}"
                  </p>
                </div>
                <div className="cancleBtn">
                  <button
                    onClick={() => {
                      DeleteNote(idx);
                    }}
                    className="text-red-400 outline-none"
                  >
                    <X />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
