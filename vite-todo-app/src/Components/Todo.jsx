import { useState } from "react";
import { Table } from "antd";
import Swal from "sweetalert2";

const Todo = () => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    status: "",
  });

  const [data, setData] = useState([]);

  const ontodoChange = (e, name) => {
    setTodo({ ...todo, [name]: e.target.value });
  };
  console.log(todo);

  const onButtonClick = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });

    setData([...data, todo]);
  };

  console.log(data);

  const columns = [
    {
      title: "title",
      dataIndex: "title",
    },
    {
      title: "description",
      dataIndex: "description",
    },
    {
      title: "status",
      dataIndex: "status",
    },
  ];

  return (
    <>
      <div className="bg-gray-200 w-full h-screen flex items-center justify-center">
        <div className="w-96 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">TODO LIST</h2>

          <div className="mb-4">
            <input
              className="border-2 border-black w-full p-3 placeholder-gray-500 rounded-lg"
              type="text"
              placeholder="Title"
              onChange={(e) => {
                ontodoChange(e, "title");
              }}
              // value={Todo.title}
            />
          </div>

          <div className="mb-4">
            <input
              className="border-2 border-black w-full p-3 placeholder-gray-500 rounded-lg"
              type="text"
              placeholder="Description"
              onChange={(e) => {
                ontodoChange(e, "description");
              }}
              // value={Todo.description}
            />
          </div>

          <div className="mb-4">
            <select
              className="border-2 border-black w-full p-3 rounded-lg"
              onChange={(e) => {
                ontodoChange(e, "status");
              }}
            >
              <option value={"incompleted"}>Incomplete</option>
              <option value={"completed"}>Complete</option>
            </select>
          </div>

          <button
            className="bg-red-600 text-white p-3 rounded-lg w-full"
            onClick={onButtonClick}
          >
            Create
          </button>
        </div>
        {/* {data.map((item) => {
          return <p>{item.title}</p>;
        })}
        {data.map((item) => {
          return <p>{item.description}</p>;
        })}
        {data.map((item) => {
          return <p>{item.status}</p>;
        })} */}

        <div className=" p-20">
          <Table dataSource={data} columns={columns} />
        </div>
      </div>
    </>
  );
};

export default Todo;
