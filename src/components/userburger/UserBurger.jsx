import { useEffect, useState } from "react";
import UserAvatar from "../userburger/user-avatar.png";
import css from "../userburger/Burger.module.css";

function useDelayUnmount(isMounted, delayTime) {
  const [showDiv, setShowDiv] = useState(false);
  useEffect(() => {
    let timeoutId;
    if (isMounted && !showDiv) {
      setShowDiv(true);
    } else if (!isMounted && showDiv) {
      timeoutId = setTimeout(() => setShowDiv(false), delayTime);
    }
    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, showDiv]);
  return showDiv;
}

function UserBurger() {
  const [isMounted, setIsMounted] = useState(false);
  const showDiv = useDelayUnmount(isMounted, 250);

  return (
    <div className={css.login_wrapper} onClick={() => setIsMounted(!isMounted)}>
      <img src={UserAvatar} alt="user avatar" className={css.user_avatar} />
      <img
        className={css.icon.isopen}
        src="./img/arrowBottom.svg"
        alt="arrow__bott"
      />
      {showDiv && (
        <div className={css.login_dropdown}>
          <button className={css.login_dropdown_button}>Profile</button>
          <button className={css.login_dropdown_button}>Log Out</button>
        </div>
      )}
    </div>
  );
}

export default UserBurger;
