import downloadImg from "../../../assets/icon-downloads.png";
import ratingImg from "../../../assets/icon-ratings.png";

const InstalledAppCard = ({ apps }) => {
  const { id, title, image, downloads, ratingAvg, size } = apps;

  const handleUnInstall = (id) => {
    console.log(id);
  };

  return (
    <div className="card card-side bg-white shadow-lg">
      <div className="flex items-center px-4 py-1.5 w-full">
        <figure>
          <img
            className="h-20 w-20 object-cover rounded-lg"
            src={image}
            alt={`${title} Image`}
          />
        </figure>
        <div className="card-body">
          <div className="space-y-4">
            <h2 className="card-title text-xl font-medium text-[#001931]">
              {title}
            </h2>
            {/* Stats */}
            <div className="flex items-center gap-4">
              {/* Download */}
              <div className="flex items-center gap-1 text-[16px] font-medium text-[#00D390]">
                <img className="h-4" src={downloadImg} alt="Downloads Icon" />
                {new Intl.NumberFormat("en-US", {
                  notation: "compact",
                }).format(downloads)}
              </div>
              {/* Ratings */}
              <div className="flex items-center gap-1 text-[16px] font-medium text-[#00D390]">
                <img className="h-4" src={ratingImg} alt="Star Icon" />
                {ratingAvg}
              </div>
              {/* Download Size */}
              <div className="flex items-center gap-1 text-[16px] font-medium text-[#627382]">
                {size} MB
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => handleUnInstall(id)}
          className="btn border-none shadow-none bg-[#00D390] text-white text-[16px] font-semibold"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledAppCard;
