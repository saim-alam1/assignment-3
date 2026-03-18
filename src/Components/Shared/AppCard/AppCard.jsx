import downloadIcon from "../../../assets/icon-downloads.png";
import starIcon from "../../../assets/icon-ratings.png";

const AppCard = ({ appData }) => {
  const { title, image, downloads, ratingAvg } = appData;

  return (
    <div className="card bg-base-100 h-108.75 w-87 shadow-sm p-4">
      <figure>
        <img className="h-79 w-full object-cover" src={image} alt="App Image" />
      </figure>
      <div className="mt-4">
        <h2 className="card-title text-xl font-medium text-[#001931]">
          {title}
        </h2>
        <div className="card-actions justify-between mt-4">
          <div className="btn border-none shadow-none bg-[#f1f5e8]">
            <img className="h-4" src={downloadIcon} alt="Download Icon" />
            {new Intl.NumberFormat("en-US", {
              notation: "compact",
            }).format(downloads)}
          </div>
          <div className="btn border-none shadow-none bg-[#FFF0E1]">
            <img className="h-4" src={starIcon} alt="Star Rating Icon" />
            {ratingAvg}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
