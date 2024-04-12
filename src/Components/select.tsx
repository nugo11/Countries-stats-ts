import { useState } from "react";
import ShortStory from "./ShortStroy";

export default function SelectOpt() {
  const [regioni, setRegioni] = useState("default");
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="mainhead">
        <div className="inputimg">
          <input
            type="text"
            placeholder="Search for a country…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          value={regioni}
          onChange={(event) => setRegioni(event.target.value)}
        >
          <option value="default">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <ShortStory regioni={regioni} search={search} />
    </>
  );
}
