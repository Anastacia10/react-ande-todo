import stl from "./pages.module.css";

const ErrorPage = () => {
  return (
    <div className={stl.pageContainer}>
      <div className={stl.errorContainer}>
        <p className={stl.message}>Error 404: Sorry, but page was not found</p>
      </div>
    </div>
  );
};

export default ErrorPage;
