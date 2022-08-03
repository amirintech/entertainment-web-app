import data from "../assets/data.json";
import List from "../components/List/List";

export default function TVSeries() {
  const TVSeries = data.filter(
    (media) => media.category.toLocaleLowerCase() === "tv series"
  );

  console.log(TVSeries);
  return (
    <div className="tv-series">
      <List title="TV Series" movies={TVSeries} />
    </div>
  );
}
