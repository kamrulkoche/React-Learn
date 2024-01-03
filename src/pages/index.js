import { useState, useCallback, useMemo } from "react";
import Title from "./Component/Title";
import ShowCount from "./Component/ShowCount";
import Button from "./Component/Button";

export default function Home() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);
  const incrementByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);

  const isEventOrOdd = () => {
    return count1 % 2 === 0;
  };
  return (
    <>
      <div>
        <Title />
        <ShowCount count={count1} title="Counter 1" />
        <span>{isEventOrOdd() ? "Event" : "Odd"}</span>
        <Button handleClick={incrementByOne}> Increment by One</Button>
        <hr />
        <ShowCount count={count2} title="Counter 2" />
        <Button handleClick={incrementByFive}> Increment by Five</Button>
      </div>
    </>
  );
}
