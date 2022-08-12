import React, { useEffect, useState } from "react";
import axios from "axios";
type Props = {};

export default function App({}: Props) {
  const [data, setData] = useState<string[]>();

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      const response = await axios("http://localhost:4000/feed");
      setData(response.data);
    } catch (e) {
      setData([]);
    }
  };

  return <div>{JSON.stringify(data)}</div>;
}
