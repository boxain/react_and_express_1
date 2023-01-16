import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add, submittingState }) => {
  const addItem = () => {
    submittingState.current = true;
    add((pre) => {
      return [
        {
          id:v4(),
          note,
          date,
          time,
        },
        ...pre,
      ];
    });
  };

  const [note, setNote] = useState("");
  const noteChange = (e) => {
    setNote(e.target.value);
  };

  const [date, setDate] = useState("");
  const dateChange = (e) => {
    setDate(e.target.value);
  };

  const [time, setTime] = useState("");
  const timeChange = (e) => {
    setTime(e.target.value);
  };

  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事</p>
      <input type="text" value={note} onChange={noteChange} />
      <p>日期 :</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>時間 :</p>
      <input type="time" value={time} onChange={timeChange} />
      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  );
};

export default Edit;
