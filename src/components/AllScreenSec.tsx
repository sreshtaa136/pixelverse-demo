import Image from "next/image";

const AllScreenSec = () => {
  return (
    <section className="bg-secondary rounded-4xl h-full overflow-hidden mb-20 p-10">
      <img
        src="/images/all_screens.png"
        alt="all-screens-display"
        className="object-fit hidden sm:hidden md:hidden lg:hidden xl:block"
      />
      <img
        src="/images/images/all_screens_lg.png"
        alt="all-screens-display"
        className="object-fit hidden sm:hidden md:hidden lg:block xl:hidden"
      />
      <img
        src="/images/images/all_screens_md.png"
        alt="all-screens-display"
        className="object-fit hidden sm:hidden md:block lg:hidden xl:hidden"
      />
      <img
        src="/images/images/all_screens_md.png"
        alt="all-screens-display"
        className="object-fit hidden sm:block md:hidden lg:hidden xl:hidden"
      />
    </section>
  );
};
export default AllScreenSec;
