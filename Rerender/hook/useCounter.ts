
import { useEffect, useState } from "react";

const useCounter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const inverval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
    }, [1000]);

    return null
};

export default useCounter;
