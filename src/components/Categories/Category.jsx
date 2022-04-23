import "./Category.css";
import { Link } from "react-router-dom";
import { UseAxios } from "../../hooks";
import { useVideos } from "../../context";
import { Loader } from "../index";
export const Category = () => {
  const { response, loading, error } = UseAxios("/api/categories");
  const { videoDispatch } = useVideos();

  const categories = response.categories || [];

  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <>
          {categories.map(({ _id, categoryName, url, description }) => (
            <div
              className="category-card"
              key={_id}
              onClick={() =>
                videoDispatch({
                  type: "FILTER_BY_CATEGORY",
                  payload: categoryName,
                })
              }
            >
              <Link to="/explore">
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
