import { useEffect, useState } from "react";
import { CountriesArr } from "../Database/Countires";
import { Link } from "react-router-dom";


export default function ShortStory({
  regioni,
  search,
}: {
  regioni: string;
  search: string;
}) {
  const [contarr, setContarr] = useState<Array<any>>([]);
  useEffect(() => {
    setContarr(
      CountriesArr.filter((item) =>
        regioni === "default" ? item.region : item.region === regioni
      )
        .filter((rame) =>
          rame.name.common.includes(
            search.charAt(0).toUpperCase() + search.slice(1)
          )
        )
        .map((item: any) => (
          <div className="box" key={item.population}>
            <Link to={`/${item.population}`}>
              <img src={item.flags.svg} alt={item.flags.alt} />
            </Link>
            <div className="info">
              <Link to={`/${item.population}`}>
                <h1>{item.name.official}</h1>
              </Link>
              <p>
                <b>Population: </b>
                {item.population}
              </p>
              <p>
                <b>Region: </b>
                {item.region}
              </p>
              <p>
                <b>Capital: </b>
                {item.capital}
              </p>
            </div>
          </div>
        ))
    );
  }, [regioni, search]);

  return (
    <>
      <div className="mainbody">{contarr}</div>
    </>
  );
}
