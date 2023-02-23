import { FixedSizeList as List } from "react-window";
import { useState } from "react";
import * as faker from "faker";

export const AppComVirtualizador = () => {
  const [data, setData] = useState<String[]>(() =>
    Array.from({ length: 10000 }, faker.address.city)
  );
  const reverse = () => {
    setData((data) => data.slice().reverse());
  };

  return (
    <div>
      <button onClick={reverse}>Reverse com virtualizador</button>
      <List
        innerElementType="ul"
        itemCount={data.length}
        itemSize={20}
        height={300}
        width={400}
      >
        {({ index, style }) => {
          return (
            <li style={style} key={index}>
              {data[index]}
            </li>
          );
        }}
      </List>
    </div>
  );
};