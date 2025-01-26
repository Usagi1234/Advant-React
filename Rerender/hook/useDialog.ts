import { useEffect, useState } from "react";
import useCounter from "./useCounter";

const useToggleDialog = () => {
  const [visible, setVisible] = useState(false);

  useCounter();

  return {
    isVisible: visible,
    show: () => setVisible(true),
    hide: () => setVisible(false),
  };
};

export default useToggleDialog;
