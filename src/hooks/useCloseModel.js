import { useEffect } from "react";

function useCloseModel(ref, close) {
  useEffect(
    function () {
      function handelClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          console.log("ClickOut");
          close();
        }
      }
      document.addEventListener("click", handelClick, true);

      return () => document.removeEventListener("click", handelClick, true);
    },
    [close, ref]
  );
}

export default useCloseModel;
