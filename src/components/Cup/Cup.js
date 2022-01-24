import s from "./Cup.module.css";

function Cup() {
  return (
    <div className={s.background}>
      <div className={s.cup}></div>
      <div className={s.confetti}></div>
    </div>
  );
}

export default Cup;
