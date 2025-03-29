import CommonVideoSec from "./CommonVideoSec";

const VideoSec = () => {
  return (
    <section
      id="videos"
      className="flex flex-col gap-24 px-10 py-20 bg-secondary rounded-4xl"
    >
      <CommonVideoSec
        secHeading={"Seamless Authentication with Firebase"}
        paraContent={<AuthContent />}
        videoSrc="/videos/auth_demo.mov"
        cssProps="lg:flex-row"
      />
      <CommonVideoSec
        secHeading={"Effortless Video Uploads"}
        paraContent={<UploadVideos />}
        videoSrc="/videos/upload_demo.mov"
        cssProps="lg:flex-row-reverse"
      />
      <CommonVideoSec
        secHeading={"Smart Video Search"}
        paraContent={<SearchContent />}
        videoSrc="/videos/search_demo.mov"
        cssProps="lg:flex-row"
      />
      <CommonVideoSec
        secHeading={"Personalized User Profiles"}
        paraContent={<ProfileContent />}
        videoSrc="/videos/edit_profile_demo.mov"
        cssProps="lg:flex-row-reverse"
      />
    </section>
  );
};

const bodyStyle =
  "text-black lg:text-[13.5px] xl:text-[14.5px] 2xl:text-[16px]";

const AuthContent = () => {
  return (
    <div className="sm:px-5 2xl:px-20">
      <p className={`mt-2 ${bodyStyle}`}>
        Pixelverse uses <strong>Firebase Authentication</strong> for users to{" "}
        <strong>sign up, log in, and log out effortlessly</strong>, with their{" "}
        <strong>sessions managed</strong> automatically.
      </p>
      <p className={`mt-2 ${bodyStyle}`}>
        In the demo, you will see how a user can:
      </p>
      <ul className={`mt-3 list-disc list-inside ${bodyStyle}`}>
        <li>create an account</li>
        <li>sign in and access Pixelverse</li>
        <li>logout</li>
      </ul>
    </div>
  );
};

const UploadVideos = () => {
  return (
    <div className="sm:px-5 2xl:px-20">
      <p className={`mt-2 ${bodyStyle}`}>
        Pixelverse allows users to upload videos seamlessly, making them
        accessible to everyone in the app. Each video is stored securely in{" "}
        <strong>Cloudinary</strong> and played using an advanced video player
        with speed, audio, and playback controls. The added{" "}
        <strong>prompts</strong> help others discover relevant content, and
        users can easily find their uploads on their{" "}
        <strong>profile page</strong>.
      </p>
    </div>
  );
};

const SearchContent = () => {
  return (
    <div className="sm:px-5 2xl:px-20">
      <p className={`mt-2 ${bodyStyle}`}>
        Pixelverse makes finding videos effortless with{" "}
        <strong>advanced search powered by Algolia</strong>. Users can enter any
        keyword or sentence, and the search algorithm intelligently detects
        their intent to deliver the most relevant results. Each video includes a
        prompt, making it even easier to discover content quickly and
        accurately.
      </p>
    </div>
  );
};

const ProfileContent = () => {
  return (
    <div className="sm:px-5 2xl:px-20">
      <p className={`mt-2 ${bodyStyle}`}>
        Pixelverse allows users to personalize their experience by updating
        their
        <strong> usernames and display pictures</strong>. With a simple and
        intuitive interface, users can easily manage their profiles.
      </p>
    </div>
  );
};

export default VideoSec;
