import "./App.css";
import { useState } from "react";

function App() {
  const [details, setdetails] = useState([]);

  const data = [
    {
      id: "101",
      name: "Arjuna N R",
      age: "25",
      degree: "MCA",
      phone: "9448427178",
    },
    {
      id: "102",
      name: "Karthik",
      age: "25",
      degree: "BSc",
      phone: "776018528",
    },
    {
      id: "103",
      name: "Surya",
      age: "25",
      degree: "CA",
      phone: "5484549874",
    },
    {
      id: "104",
      name: "Prakash",
      age: "25",
      degree: "MBBS",
      phone: "8277182904",
    },
    {
      id: "105",
      name: "Aruna N R",
      age: "25",
      degree: "BE",
      phone: "9448427178",
    },
  ];

  const [userdata, setuserdata] = useState(data);

  const click_onclik = (id) => {
    userdata.pop(data.filter((f) => f.id === id));
    setuserdata([...userdata]);
    setdetails(data.filter((f) => f.id === id));
  };

  const coloumn = ["Id", "Name", "Age", "Degree", "Phone"];
  return (
    <div className="App">
      <>
        <div className="home--page">
          <table border="1">
            <thead>
              <tr>
                {coloumn.map((hd, index) => {
                  return <th key={index}>{hd}</th>;
                })}
              </tr>
            </thead>

            <tbody>
              {userdata.map((hd, index) => {
                return (
                  <tr key={index} onClick={() => click_onclik(hd.id)}>
                    <td>{hd.id}</td>
                    <td>{hd.name}</td>
                    <td>{hd.age}</td>
                    <td>{hd.degree}</td>
                    <td>{hd.phone}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {details.length > 0 && (
            <div className="details--card">
              <ul>
                {details.map((d, i) => {
                  return (
                    <span key={i}>
                      <li>{d.name}</li>
                      <li>{d.age}</li>
                      <li>{d.phone}</li>
                      <li>{d.degree}</li>
                    </span>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </>
    </div>
  );
}

export default App;
