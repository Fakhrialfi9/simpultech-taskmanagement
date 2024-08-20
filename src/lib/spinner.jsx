import spinnerStyle from "../assets/style/lib/spinner.module.css";

const Spinner = () => {
  return (
    <div className={spinnerStyle.spinnerContainer}>
      <div className={spinnerStyle.spinner}></div>
      <h5>Loading Task List...</h5>
    </div>
  );
};

export default Spinner;
