import BackgroundImage from "./BackgroundImage";

const BackgroundImages = () => (
  <>
    <BackgroundImage
      src="/images/figura01.svg"
      alt="Figura 01"
      className="left-0 bottom-0 h-[35%] bg-no-repeat bg-contain"
    />
    <BackgroundImage
      src="/images/figura02.svg"
      alt="Figura 02"
      className="top-0 right-0 h-auto max-w-screen-xl"
    />
    <BackgroundImage
      src="/images/isologo.svg"
      alt="Isologo"
      className="bottom-0 right-0 max-w-[30vw]"
    />
  </>
);

export default BackgroundImages;
