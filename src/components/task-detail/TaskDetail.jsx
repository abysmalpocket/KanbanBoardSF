import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import css from "./TaskDetail.module.css";
import { useState } from 'react'

const TaskDetail = (props) => {
  const match = useRouteMatch();
  const { taskId } = match.params;
  const { tasks, setTasks } = props;
  const [descriptionEditInput, setDescriptionEditInput] = useState(false)

  const task = tasks.find((task) => tasks.id === taskId);

  const toggleDescriptionEditInput = () => {
    setDescriptionEditInput(!descriptionEditInput)
 }

 const handleChange = (event) => {
  const updateTasks = task.map(tasks => {
     if(tasks.id === taskId) {
        return {...tasks, description: event.target.value}
     }
     return tasks
  })
  setTasks(updateTasks)
}
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <h2 className={css.title}>{tasks.title}</h2>
      </div>
      {!descriptionEditInput ? (
                     <div>
                        <p>
                           {tasks.description || 'This task has no description'}
                        </p>
                     </div>
                  ) : 
                  (
                     <form action="task" className={css.form}>
                        <textarea type="text" className={css.input} rows={4} value={tasks.description} onChange={handleChange}/>
                     </form>
                  )}
                  <div className={css.pageButton}>
                     <button className={css.btn} onClick={toggleDescriptionEditInput}> {!descriptionEditInput ? ("Редактировать") : ("Сохранить")} </button>
                  </div>
    </div>
  );
};

export default TaskDetail;
