const Statistics = () => {
  return (
    <section className="bg-linear-to-br from-[#632ee3] to-[#9f62f2] w-full h-102.5 flex flex-col items-center justify-center">
      <div className="max-w-360 mx-auto w-full">
        <h2 className="text-white text-4xl text-center font-bold mb-10">
          Trusted by Millions, Built for You
        </h2>

        <div className="w-full flex items-center justify-around">
          {/* Stats 1 */}
          <div className="text-center text-white space-y-4">
            <p className="md:text-[16px]">Total Downloads</p>
            <h4 className="md:text-6xl font-extrabold">29.6M</h4>
            <p className="text-[16px]">21% more than last month</p>
          </div>
          {/* Stats 2 */}
          <div className="text-center text-white space-y-4">
            <p className="text-[16px]">Total Reviews</p>
            <h4 className="md:text-6xl font-extrabold">906K</h4>
            <p className="text-[16px]">46% more than last month</p>
          </div>
          {/* Stats 3 */}
          <div className="text-center text-white space-y-4">
            <p className="text-[16px]">Active Apps</p>
            <h4 className="md:text-6xl font-extrabold">132+</h4>
            <p className="text-[16px]">31 more will Launch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
