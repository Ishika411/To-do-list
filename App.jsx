import { useState } from "react";
import "./App.css";
import { Formik, Form, Field } from "formik";
import TaskCard from "./assets/components/TaskCard";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [arr, setArr] = useState([]);

  const addTask = (value, isUpdate, index, setUpdate) => {
    let v = arr.filter((val) => {
      return val.taskname === value.taskname.toUpperCase();
    });
    if (v.length === 0) {
      if (isUpdate) {
        if (arr[index] === value);
        let newCrr = [...arr];
        newCrr[index] = {
          taskname: value.taskname.toUpperCase(),
          completed: false,
        };
        setArr(newCrr);
        setUpdate(false);
        toast.success("Task edited successfully");
      } else {
        let newArr = [
          ...arr,
          { taskname: value.taskname.toUpperCase(), completed: false },
        ];
        setArr(newArr);
      }
    } else {
      toast.info("Task already exists");
      setUpdate(false);
    }
  };

  const toggleTask = (index) => {
    const updatedArr = arr.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setArr(updatedArr);
  };

  const deleteTask = (index) => {
    let newBrr = [];
    arr.filter((value, i) => {
      if (i !== index) {
        newBrr.push(value);
      }
    });
    setArr(newBrr);
    toast.success("Task removed");
  };

  return (
    <div className="bg-gray-600 w-[40rem] rounded-md my-10 mx-auto py-10">
      <div className="flex flex-col items-center max-h-[490px] overflow-y-auto space-y-4 hide-scrollbar">
        <h1 className="text-4xl font-bold my-3">
          Add your today's tasks <span className="text-white">here</span>
        </h1>
        <ToastContainer />
        <Formik
          initialValues={{ taskname: "" }}
          onSubmit={(value, { resetForm }) => {
            if (value.taskname.trim()) {
              addTask(value);
              resetForm();
            } else {
              toast.warning("Please add a task before submitting");
            }
          }}
        >
          <Form className="flex my-4 border-1 border-violet-600 rounded-xs">
            <div>
              <label htmlFor="taskname"></label>
              <Field
                className="min-h-8 text-white text-lg min-w-90 p-3 outline-0"
                placeholder="What's on your mind today?"
                name="taskname"
              />
            </div>
            <button
              type="submit"
              className="bg-violet-600 p-3 min-w-30 text-lg "
            >
              Add
            </button>
          </Form>
        </Formik>
        {arr.map((value, i) => {
          return (
            <TaskCard
              key={i}
              index={i}
              taskname={value.taskname}
              completed={value.completed}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
              addTask={addTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
