import { Link } from "react-router-dom";
import { CountriesArr } from "../Database/Countires";
import Header from "./Header";
import backimg from "../../public/imgs/back.png";

export default function FullStory() {
  const urlString = window.location.href;
  const url = new URL(urlString);
  const pathname = url.pathname;
  const number = Number(pathname.split("/").pop());
  const country = CountriesArr.find((item: any) => item.population === number);
  window.scrollTo(0, 0);

  return (
    <>
      <Header />
      <main>
        <div className="fullstory">
          <div className="back">
            <Link to="/">
              <img src={backimg} alt="go back" />
              Back
            </Link>
          </div>
          <div className="card">
            <img src={country.flags.svg} alt="Flag" />
            <div className="cardinfo">
              <h1>{country.name.official}</h1>
              <div className="stats">
                <div className="stat1">
                  <p
                    key={Object.values<any>(country.name.nativeName)[0].common}
                  >
                    <b>Native Name:</b>{" "}
                    {Object.values<any>(country.name.nativeName)[0].common}
                  </p>
                  <p key={country.population}>
                    <b>Population:</b> {country.population}
                  </p>
                  <p key={country.region}>
                    <b>Region:</b> {country.region}
                  </p>
                  <p key={country.subregion}>
                    <b>Sub Region:</b> {country.subregion}
                  </p>
                  <p key={country.capital}>
                    <b>Capital:</b> {country.capital}
                  </p>
                </div>
                <div className="stat1">
                  <p key={country.tld}>
                    <b>Top Level Domain:</b> {country.tld}
                  </p>
                  <p key={Object.values<any>(country.currencies)[0].name}>
                    <b>Currencies:</b>{" "}
                    {Object.values<any>(country.currencies)[0].name}
                  </p>
                  <p>
                    <b>Languages:</b>{" "}
                    {Object.values<any>(country.languages).map(
                      (item, index) => {
                        return <span key={index}>{item}</span>;
                      }
                    )}
                  </p>
                </div>
              </div>
              <div className="border">
                <p>Border Countries: </p>
                {!country.borders
                  ? "empty"
                  : country.borders.map((item: string) => (
                      <button key={item}>{item}</button>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
