import { Formik, Form, Field } from "formik";
const EditTask = ({task,index,addTask,isUpdate,setUpdate}) => {
  return (
    <div>
      <Formik
              initialValues={
                { taskname: task }
              }
              onSubmit={(value, { resetForm }) => {
                if (value.taskname.trim()) {
                  addTask(value,isUpdate,index,setUpdate);
                  resetForm();
                }
              }}
            >
              <Form className="flex my-4 border-1 border-violet-600 rounded-xs">
                <div>
                  <label htmlFor="taskname"></label>
                  <Field
                    className="min-h-8 text-white text-lg min-w-90 p-3 outline-0"
                    name="taskname"
                  />
                </div>
                <button type="submit" className="bg-violet-600 p-3 min-w-30 text-lg ">
                  Add
                </button>
              </Form>
            </Formik>
    </div>
  )
}

export default EditTask
