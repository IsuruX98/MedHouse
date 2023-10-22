import React, { useEffect, useState } from "react";
import { MongoClient } from "mongodb";

const Room = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const uri =
          "mongodb+srv://cs50tharindu:CXE0jvEDEdfppIHE@cluster0.g3vaocn.mongodb.net/Buildings?retryWrites=true&w=majority";
        const client = new MongoClient(uri);
        await client.connect();
        const db = client.db("Buildings");
        const collectionBlockAB = db.collection("BlockA_Boys");
        const result = await collectionBlockAB.find().toArray();
        setData(result);
      } catch (error) {
        console.error("Error connecting to MongoDB", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Rooms</h1>
      <table>
        <thead>
          <tr>
            <th>Room ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
            {data.map((item) => (
                <tr key={item.id}>
                    <td>{item.room_id}</td>
                    <td>{item.status}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Room;
