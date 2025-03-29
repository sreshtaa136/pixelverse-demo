import React from "react";

const VideoOverlay = ({ videoSrc }) => {
  return (
    <div className="relative w-full lg:max-w-[650px] not-odd:mx-auto">
      {/* Video Overlay */}
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        controls
        className="absolute top-[3%] left-[29%] h-[93.6%] object-cover bg-[#161622] 
               rounded-[2.25vw] sm:rounded-[20px] md:rounded-[28px] lg:rounded-[24px] xl:rounded-[29px] 2xl:rounded-[37px]"
      />
      {/* iPhone Bezel Image */}
      <img
        src="/images/gradient_frame.png"
        alt="iPhone Bezel"
        className="w-full h-auto"
      />
    </div>
  );
};

export default VideoOverlay;
