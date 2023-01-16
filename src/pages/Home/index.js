import { useState, useEffect, useRef } from "react";
import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";
import { API_GET_DATA } from "../../global/constants";


/* 查找 */
function fetchData(setData) {
  fetch(API_GET_DATA,{method:"GET"})
    .then((response)=>{ 
      console.log(response);
      return response.json();

    })
    .then((res)=>{
      console.log(res)
      setData(res);
    })
    .catch((err)=>{console.log(err);})
}


/* 新增 */
async function fetchSetData(data) {
  await fetch(API_GET_DATA, {
    // 修改後端資料
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data[0]), //  convert a js value to a JSON string
  });
}


/* 刪除 */
async function deleteData(delete_id) {
  console.log(delete_id);
  await fetch(API_GET_DATA, {
    // 修改後端資料
    method: "DELETE",
    headers: {
      "id": delete_id,
    },
  });
}



const Home = () => {
  const [data, setData] = useState([]);
  const submittingState = useRef(false);
  const [delete_id, setDelete_id] = useState(0);

  useEffect(() => {
    fetchData(setData);
  }, []);

  useEffect(() => {
    if (!submittingState.current) {
      return;
    }
    fetchSetData(data).then(() => (submittingState.current = false));
  }, [data]);


  useEffect(() => {
    deleteData(delete_id);
  }, [delete_id]);


  return (
    <div className="app">
      <Edit add={setData} submittingState={submittingState} />
      <List
        listData={data}
        deleteData={setData}
        deleteId = {setDelete_id}
      />
    </div>
  );
};

export default Home;
