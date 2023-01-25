import ProfilePicture from "../../assets/profile-picture/image.jpg";

const EndNote = () => {
  return (
    <div className="end-note text-standardGray font-manrope text-sm text-center w-full max-w-[210px] laptop:max-w-[240px] laptop:text-base mx-auto my-8">
      <img
        src={ProfilePicture}
        alt="A picture of mine, taken in front of a mirror"
        className="w-full max-w-[45px] rounded-full mx-auto mb-3 laptop:max-w-[50px]"
      />
      <p>Feel free to DM me on the above-mentioned social handles</p>
    </div>
  );
};

export default EndNote;
