import "./Category.css";
import PulseLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { UseAxios } from "../../hooks";
export const Category = () => {
  const { response, loading, error } = UseAxios("/api/categories");

  const categories = response.categories || [];
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <>
      {loading ? (
        <PulseLoader
          color={"#FFF"}
          loading={loading}
          css={override}
          size={15}
          margin={3}
        />
      ) : (
        <>
          {categories.map(({ _id, categoryName, url, description }) => (
            <div className="category-card" key={_id}>
              <Link to={`/explore/${categoryName}`}>
                <img
                  src={url}
                  alt={categoryName}
                  className="resp-img category-img "
                />
                <h3 className="headline-3 text-center m-tb-1">
                  {categoryName}
                </h3>
                <p className="small-text-3">{description}</p>
              </Link>
            </div>
          ))}
        </>
      )}
    </>
  );
};
