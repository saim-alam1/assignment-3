import { Link } from "react-router";
import notFoundImg from "../../../../assets/App-Error.png";

const ErrorElement = () => {
  return (
    <div className="max-w-360 mx-auto my-20 h-170 flex flex-col items-center justify-center">
      <img src={notFoundImg} alt="Route Not Found" />
      <div className="space-y-4 text-center mt-10">
        <h4 className="text-5xl font-semibold text-[#001931]">
          OPPS!! APP NOT FOUND
        </h4>
        <p className="text-[#627382] text-xl">
          The App you are requesting is not found on our system. please try
          another apps
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
