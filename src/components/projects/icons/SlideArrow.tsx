interface Props {
  slideArrow: boolean;
}

const SlideArrow: React.FC<Props> = ({ slideArrow }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`icon icon-tabler icon-tabler-arrow-up-right ${
        slideArrow ? "translate-x-[0.15rem]" : "translate-x-0"
      } transition-transform delay-75 ease-linear`}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <line x1="17" y1="7" x2="7" y2="17"></line>
      <polyline points="8 7 17 7 17 16"></polyline>
    </svg>
  );
};

export default SlideArrow;
