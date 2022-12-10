import { useState } from "react";
import data from "./data/data.json";

function App() {
  const [tableData, setTableData] = useState([...data]);
  const [popup, setPopup] = useState(false);
  const [clickIndex, setClickIndex] = useState(null);

  const clickHandler = () => {
    setPopup(!popup);
    console.log("clicked");
  };

  const dscSort = () => {
    setTableData(
      [...tableData]?.sort((a, b) => {
        const firstA = a.first_name.toUpperCase();
        const firstB = b.first_name.toUpperCase();
        if (firstA > firstB) {
          return -1;
        } else if (firstA < firstB) {
          return 1;
        }
        return 0;
      })
    );
  };

  const ascSort = () => {
    setTableData(
      [...tableData]?.sort((a, b) => {
        const firstA = a.first_name.toUpperCase();
        const firstB = b.first_name.toUpperCase();
        if (firstA > firstB) {
          return 1;
        } else if (firstA < firstB) {
          return -1;
        }
        return 0;
      })
    );
  };

  return (
    <div className="App w-full min-h-[100vh] flex justify-center items-center">
      <div className="App w-full min-h-[100vh]">
        <div className="overflow-x-scroll">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>id</th>
                <th className="relative">
                  First Name
                  <i
                    className={
                      popup
                        ? "fa-regular fa-circle-xmark cursor-pointer"
                        : "fa-solid fa-ellipsis-vertical cursor-pointer px-1"
                    }
                    onClick={clickHandler}
                  ></i>
                  <div
                    className={
                      popup
                        ? "w-[150px] h-[150px] bg-slate-300 absolute bottom-[-150px] z-50 flex flex-col justify-center items-center gap-2 p-3 rounded-sm shadow-sm"
                        : "hidden w-50px h-[50px] bg-slate-300 absolute bottom-[-40px]"
                    }
                  >
                    <p
                      className="btn btn-sm bg-blue-500"
                      onClick={() => setTableData(data)}
                    >
                      Unsorted
                    </p>
                    <p className="btn btn-sm bg-blue-500" onClick={ascSort}>
                      ASCEND
                    </p>
                    <p className="btn btn-sm bg-blue-500" onClick={dscSort}>
                      DESCEND
                    </p>
                  </div>
                </th>
                <th>Last Name</th>
                <th>email</th>
                <th>gender</th>
                <th>ip_address</th>
                <th>airport code</th>
                <th>time</th>
                <th>status</th>
                <th>mobile</th>
                <th>area</th>
                <th>show</th>
                <th>edit</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr
                  key={index}
                  className={
                    clickIndex === item.id
                      ? "active cursor-pointer"
                      : "cursor-pointer"
                  }
                  onClick={() => {
                    setClickIndex(item.id);
                    console.log(clickIndex);
                  }}
                >
                  <th>{item.id}</th>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.gender}</td>
                  <td>{item.ip_address}</td>
                  <td>{item["airport code"]}</td>
                  <td>{item.time}</td>
                  <td className={item.status ? "bg-green-500" : "bg-red-500"}>
                    {item.status ? "true" : "false"}
                  </td>
                  <td>{item.mobile}</td>
                  <td>{item.area}</td>
                  <td>{item.show ? "true" : "false"}</td>
                  <td>{item.edit ? "true" : "false"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
