import { MagnifyingGlass } from "react-loader-spinner";

const Loading = () => {
  return (
    <div>
      <MagnifyingGlass visible={true} height="80" width="80" ariaLabel="MagnifyingGlass-loading" wrapperClass="MagnifyingGlass-wrapper" glassColor="#c0efff" color="#e15b64" />
    </div>
  );
};

export default Loading;
