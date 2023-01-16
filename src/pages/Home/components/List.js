import Item from "./Item";

const List = ({ listData, deleteData, deleteId }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { id , note = "無", date = "無", time = "無" } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
            deleteId={deleteId}
          />
        );
      })}
    </div>
  );
};

export default List;
