import { useLoaderData, useParams } from "react-router";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";

const AppDetails = () => {
  const { id } = useParams();
  const appsData = useLoaderData();
  const appDetails = appsData.find((app) => app.id === parseInt(id));
  console.log(appDetails);
  const { title, image, companyName, downloads, ratingAvg, reviews } =
    appDetails;

  return (
    <div className="max-w-360 mx-auto my-20 mb-10 w-full">
      <div className="card lg:card-side flex items-center gap-10 w-full">
        <div className="shadow-sm drop-shadow-2xl">
          <img
            className="h-87.5 w-87.5 rounded-xl object-cover"
            src={image}
            alt={`${title} Image`}
          />
        </div>
        {/* Texts */}
        <div className="space-y-2 w-full">
          <h2 className="card-title text-3xl font-bold text-[#001931]">
            {title}
          </h2>
          <p className="text-xl text-[#627382]">
            Developed by{" "}
            <span className="bg-linear-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent font-semibold">
              {companyName}
            </span>
          </p>
          <hr className="w-full border-[#00193120] my-7" />
          {/* Stats */}
          <div className="flex items-center gap-14">
            {/* Download Stats */}
            <div>
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
            <div>
              <img src={ratingIcon} alt="Rating Image icon" className="h-10" />
              <p className="text-[16px] mt-2">Average Ratings</p>
              <p className="text-[40px] font-extrabold text-[#001931] mt-0 leading-none">
                {ratingAvg}
              </p>
            </div>
            {/* Review Stats */}
            <div>
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
    </div>
  );
};

export default AppDetails;
