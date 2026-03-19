import { Link } from "react-router";
import errorImg from "../../../../assets/error-404.png";

const ErrorElement = () => {
  return (
    <div className="max-w-360 mx-auto my-20 h-full flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-center">
        <img className="w-11/12" src={errorImg} alt="Route Image" />
      </div>
      <div className="space-y-4 text-center mt-10">
        <h4 className="text-3xl md:text-5xl font-semibold text-[#001931]">
          Oops, page not found!
        </h4>
        <p className="text-[#627382] text-xl">
          The page you are looking for is not available.
        </p>
      </div>
      <Link
        to={-1}
        className="text-[16px] font-semibold btn border-none shadow-none bg-linear-to-br from-[#632ee3] to-[#9f62f2] text-white py-5 px-10 mt-4"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default ErrorElement;
