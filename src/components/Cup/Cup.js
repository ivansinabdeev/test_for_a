import Snow from "./confetti";
import s from "./Cup.module.css";

function Cup() {
  return (
    <>
      <div className={s.background}>
        <div className={s.confetti}>
          <div className={s.cup}></div>
        </div>
      </div>
      <Snow />
    </>
  );
}

export default Cup;
