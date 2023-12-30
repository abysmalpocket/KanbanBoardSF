import css from "./Header.module.css";
import UserBurger from "../userburger/UserBurger";

const Header = () => {
  return (
    <header className={css.header}>
      <h1 className={css.title}>My Awesome Kanban Board</h1>
      <UserBurger />
    </header>
  );
};

export default Header;
