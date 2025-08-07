import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import EditTask from "./EditTask";
const TaskCard = ({
  index,
  taskname,
  completed,
  toggleTask,
  deleteTask,
  addTask,
}) => {
  const [isUpdate, setUpdate] = useState(false);
  return (
    isUpdate ? (
      <EditTask
        task={taskname}
        index={index}
        addTask={addTask}
        isUpdate={isUpdate}
        setUpdate={setUpdate}
      />
    ) : (
      <div className="flex items-center justify-between bg-violet-600 m-2 p-4 min-w-[30rem] rounded-xs">
        <p
          onClick={() => {
            toggleTask(index);
          }}
          className={`text-xl cursor-pointer ${completed ? "line-through" : ""}`}
        >
          {taskname}
        </p>
        <div className="flex text-2xl gap-2">
          <FaEdit
            onClick={() => {
              setUpdate(true);
              // console.log(isUpdate);
            }}
          />
          <MdDelete
            onClick={() => {
              deleteTask(index);
            }}
          />
        </div>
      </div>
    )
  );
};

export default TaskCard;
