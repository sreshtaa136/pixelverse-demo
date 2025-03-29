import VideoOverlay from "./VideoOverlay";

const CommonVideoSec = ({
  secHeading,
  paraContent,
  videoSrc,
  cssProps = "",
  headingcss = "",
}) => {
  return (
    <article
      className={`flex flex-col-reverse justify-between items-center gap-18 sm:px-15 2xl:px-10 ${cssProps}`}
    >
      <div className="sm:w-full">
        <h1
          id="videoSection"
          className={`sm:text-md xl:text-lg 2xl:text-2xl font-bold text-gray-900 sm:block mb-3 sm:px-5 2xl:px-20`}
        >
          {secHeading}
        </h1>
        {paraContent}
        {/* <p className="hidden sm:block">{paraContent}</p> */}
      </div>
      <VideoOverlay videoSrc={videoSrc} />
    </article>
  );
};
export default CommonVideoSec;
