import PulseLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/react";
export const Loader = ({ loading }) => {
  const override = css`
    display: block;
    margin: 0 auto;
  `;
  return (
    <>
      <PulseLoader
        color={"#FFF"}
        loading={loading}
        css={override}
        size={15}
        margin={3}
      />
    </>
  );
};
