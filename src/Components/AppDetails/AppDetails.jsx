import { useLoaderData, useParams } from "react-router";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";
import Chart from "../Chart/Chart";

const AppDetails = () => {
  const { id } = useParams();
  const appsData = useLoaderData();
  const appDetails = appsData.find((app) => app.id === parseInt(id));
  const {
    title,
    image,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    description,
  } = appDetails;
  console.log(appDetails);

  return (
    <div className="max-w-360 mx-auto my-20 mb-10 w-full">
      <div className="card lg:card-side flex items-center gap-10 w-full lg:mx-2.5">
        <div className="shadow-lg drop-shadow-2xl">
          <img
            className="h-87.5 w-87.5 md:w-full rounded-xl object-cover"
            src={image}
            alt={`${title} Image`}
          />
        </div>
        {/* Texts */}
        <div className="space-y-2 w-full flex flex-col items-center lg:items-start">
          <div className="text-center lg:text-left space-y-2">
            <h2 className="text-3xl font-bold text-[#001931]">{title}</h2>
            <p className="text-xl text-[#627382]">
              Developed by{" "}
              <span className="bg-linear-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent font-semibold">
                {companyName}
              </span>
            </p>
          </div>
          <hr className="w-11/12 border-[#00193120] my-7" />
          {/* Stats */}
          <div className="flex items-center justify-center md:justify-start gap-8 md:gap-14">
            {/* Download Stats */}
            <div className="flex flex-col items-center lg:items-start space-y-2">
              <img
                src={downloadIcon}
                alt="Download Image icon"
                className="h-10"
              />
              <p className="text-[16px] mt-2">Downloads</p>
              <p className="text-[40px] font-extrabold text-[#001931] mt-0 leading-none">
                {new Intl.NumberFormat("en-US", {
                  notation: "compact",
                }).format(downloads)}
              </p>
            </div>
            {/* Ratings Stats */}
            <div className="flex flex-col items-center lg:items-start space-y-2">
              <img src={ratingIcon} alt="Rating Image icon" className="h-10" />
              <p className="text-[16px] mt-2">Average Ratings</p>
              <p className="text-[40px] font-extrabold text-[#001931] mt-0 leading-none">
                {ratingAvg}
              </p>
            </div>
            {/* Review Stats */}
            <div className="flex flex-col items-center lg:items-start space-y-2">
              <img src={reviewIcon} alt="Review Image icon" className="h-10" />
              <p className="text-[16px] mt-2">Total Reviews</p>
              <p className="text-[40px] font-extrabold text-[#001931] mt-0 leading-none">
                {new Intl.NumberFormat("en-US", {
                  notation: "compact",
                }).format(reviews)}
              </p>
            </div>
          </div>
          <button className="btn bg-[#00D390] border-none shadow-none py-6 px-5 text-white text-xl font-semibold mt-8">
            Install Now (291 MB)
          </button>
        </div>
      </div>
      <hr className="w-full border-[#00193120] my-7" />

      <div className="w-ful">
        <h4 className="text-2xl font-semibold text-[#001931] text-center lg:text-left lg:mx-2.5">
          Ratings
        </h4>
        <Chart ratings={appDetails.ratings} />
      </div>
      <hr className="w-full border-[#00193120] my-7" />
      <div className="space-y-4 mt-10 mb-20">
        <h4 className="text-2xl font-semibold text-[#001931] text-center lg:text-left lg:mx-2.5">
          Description
        </h4>
        <p className="text-[#627382] text-xl text-center lg:text-left lg:mx-2.5">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
