import ProfilePicture from "../../assets/profile-picture/image.jpg";

const EndNote = () => {
  return (
    <>
      <hr className="w-full mx-auto tablet:mt-14 laptop:mt-5 border-0 h-[0.1px] bg-darkGray rounded-sm" />
      <div className="end-note my-10 text-standardGray font-manrope text-sm text-center w-full max-w-[210px] mx-auto">
        <img
          src={ProfilePicture}
          alt="A picture of mine, taken in front of a mirror"
          className="w-full max-w-[45px] rounded-full mx-auto mb-3"
        />
        <p>Feel free to DM me on the above-mentioned social handles</p>
      </div>
      <hr className="w-full mx-auto mb-10 border-0 h-[0.1px] bg-darkGray rounded-sm" />
    </>
  );
};

export default EndNote;
