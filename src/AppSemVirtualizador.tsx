import { useState } from "react";
import * as faker from "faker";

export const AppSemVirtualizador = () => {
  const [data, setData] = useState<String[]>(() =>
    Array.from({ length: 10000 }, faker.address.city)
  );

  const reverse = () => {
    setData((data) => data.slice().reverse());
  };

  return (
    <div>
      <button onClick={reverse}>Reverse sem o virtualizador</button>
      <ul style={{ width: "400px", height: "300px", overflowY: "scroll" }}>
        {data.map((city, i) => (
          <li style={{ height: "20px" }} key= {`${i} + ${city}`}>{city}</li>
        ))}
      </ul>
    </div>
  );
};
