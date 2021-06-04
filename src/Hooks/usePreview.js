import useStatValue from "../Context/StateProvider";

const usePreview = () => {
  const [, dispatch] = useStatValue();
  const cancel = () => {
    dispatch({ type: "TOGGLE" });
  };
  return { cancel };
};

export default usePreview;
