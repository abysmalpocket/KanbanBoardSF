import css from "./Footer.module.css";
import { LIST_TYPES } from "../../config.js";

const Footer = (props) => {
  const { tasks } = props;

  const backlogTasks = tasks.filter(
    (task) => task.status === LIST_TYPES.BACKLOG
  );
  const countBacklog = backlogTasks.length;

  const finishedTasks = tasks.filter(
    (task) => task.status === LIST_TYPES.FINISHED
  );
  const countFinished = finishedTasks.length;

  return (
    <footer className={css.footer}>
      <div className={css.left1}>
        <div>
          <p>
            {!countBacklog
              ? "No active tasks"
              : `Active tasks: ${countBacklog}`}
          </p>
        </div>
        <div>
          <p>
            {!countFinished
              ? "No completed tasks"
              : `Finished tasks: ${countFinished}`}
          </p>
        </div>
      </div>
      <div className={css.counts} />
      <div className={css.copy}>
        <p>Kanban Board by Denis, 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
