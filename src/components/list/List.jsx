import { useEffect, useState, useRef } from "react";
import { LIST_TYPES } from "../../config";
import css from "./List.module.css";
import { Link } from "react-router-dom";
import FormAddNewTask from "../input/FormAddNewTask";
import SelectForAddTask from "../select/Select";

function getRandomInt(max) {
  return Math.round(Math.random() * max);
}

const List = (props) => {
  const { title, type, tasks, setTasks, listTasks } = props;
  const [isInputVisible, setInputVisible] = useState(false);
  const [isReadySelectVisible, setIsReadySelectVisible] = useState(false);
  const [isInProgressSelectVisible, setIsInProgressSelectVisible] =
    useState(false);
  const [isFinishedSelectVisible, setIsFinishedSelectVisible] = useState(false);
  const [backlogTasks, setBacklogTasks] = useState([]);
  const [readyTasks, setReadyTasks] = useState([]);
  const [InProgressTasks, setInProgressTasks] = useState([]);
  const [changedReadyValue, setChangedReadyValue] = useState("");
  const prevArrayRef = useRef([]);

  useEffect(() => {
    const newBacklog = tasks.filter(
      (task) => task.status === LIST_TYPES.BACKLOG
    );
    const newReady = tasks.filter((task) => task.status === LIST_TYPES.READY);
    const newInProgress = tasks.filter(
      (task) => task.status === LIST_TYPES.IN_PROGRESS
    );
    if (InProgressTasks.length === 0) {
      setInProgressTasks(newInProgress);
    }
    if (
      prevArrayRef.current.join() !== tasks.join() &&
      InProgressTasks.length
    ) {
      setInProgressTasks(newInProgress);
    }
    if (readyTasks.length === 0) {
      setReadyTasks(newReady);
    }
    if (prevArrayRef.current.join() !== tasks.join() && readyTasks.length) {
      setReadyTasks(newReady);
    }
    if (backlogTasks.length === 0) {
      setBacklogTasks(newBacklog);
    }
    if (prevArrayRef.current.join() !== tasks.join() && backlogTasks.length) {
      setBacklogTasks(newBacklog);
    }

    prevArrayRef.current = tasks;
  }, [tasks]);

  const handlerChange = () => {
    if (type === LIST_TYPES.BACKLOG) {
      setInputVisible(!isInputVisible);
    }
    if (type === LIST_TYPES.READY) {
      setIsReadySelectVisible(!isReadySelectVisible);
    }
    if (type === LIST_TYPES.IN_PROGRESS) {
      setIsInProgressSelectVisible(!isInProgressSelectVisible);
    }
    if (type === LIST_TYPES.FINISHED) {
      setIsFinishedSelectVisible(!isFinishedSelectVisible);
    }
  };

  const createdBacklogTask = (value) => {
    const newTasks = [
      ...tasks,
      {
        id: `37302620${getRandomInt(10)}83060905`,
        title: value,
        description: "no desc",
        created: "2021-09-27T11:11:42.182Z",
        status: "backlog",
      },
    ];
    setTasks(newTasks);
  };

  const changeTask = (value) => {
    setChangedReadyValue(value);
    const newTasks = tasks.map((task) => {
      if (task.title === value) {
        return { ...task, status: "ready" };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className={css.list}>
      <h2 className={css.listTitle}>{title}</h2>
      {listTasks.map((task) => {
        return (
          <Link to={`/tasks/${listTasks.id}`} className={css.taskLink}>
            <div key={task.id} className={css.task}>
              {task.title}
            </div>
          </Link>
        );
      })}
      {type === LIST_TYPES.BACKLOG && isInputVisible && (
        <div>
          <FormAddNewTask
            createdBacklogTask={createdBacklogTask}
            setInputVisible={setInputVisible}
          />
        </div>
      )}
      {type === LIST_TYPES.READY && isReadySelectVisible && (
        <SelectForAddTask
          tasks={backlogTasks}
          changedReadyValue={changedReadyValue}
          changeTask={changeTask}
        />
      )}
      {type === LIST_TYPES.IN_PROGRESS && isInProgressSelectVisible && (
        <SelectForAddTask
          tasks={readyTasks}
          changedReadyValue={changedReadyValue}
          changeTask={changeTask}
        />
      )}
      {type === LIST_TYPES.FINISHED && isFinishedSelectVisible && (
        <SelectForAddTask
          tasks={InProgressTasks}
          changedReadyValue={changedReadyValue}
          changeTask={changeTask}
        />
      )}

      {isInputVisible ||
        isReadySelectVisible ||
        isInProgressSelectVisible ||
        isFinishedSelectVisible || (
          <div>
            <button className={css.addButton} onClick={handlerChange}>
              <img src="./img/Plus.svg" alt="Plus" />
              Add card
            </button>
          </div>
        )}
    </div>
  );
};

export default List;
