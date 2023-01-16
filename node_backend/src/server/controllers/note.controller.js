import noteModule from "../moudles/note.module";

/* GET */
const noteGet = (req,res) => {
  noteModule.selectNote()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      return res.send(err);
    });
};

/* POST */
const noteInsert = (req,res) => {
  const insertValue = req.body;
  noteModule.insertNote(insertValue)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};


/* DELETE */
const noteDelete = (req,res) => {
  const delete_id = req.headers.id;
  noteModule.deleteNote(delete_id)
    .then((result)=>res.send(result))
    .catch((err)=>res.send(err));
};


export default {noteGet,noteInsert,noteDelete};
