import { useVideos } from "../../../context";
import "./Filter.css";
export const Filter = () => {
  const { videoDispatch, videoState } = useVideos();
  const categoryFilters = [
    {
      id: 1,
      name: "ALL",
    },
    {
      id: 2,
      name: "Standup",
    },
    {
      id: 3,
      name: "Sketch",
    },
    {
      id: 4,
      name: "Improv",
    },
  ];
  return (
    <div className="filter-container">
      {categoryFilters.map((item) => (
        <div
          className={
            videoState.category === item.name
              ? `${"active-filter"} filter`
              : "filter"
          }
          key={item.id}
          onClick={() =>
            videoDispatch({ type: "FILTER_BY_CATEGORY", payload: item.name })
          }
        >
          <p className="small-text-3">{item.name}</p>
        </div>
      ))}
    </div>
  );
};
