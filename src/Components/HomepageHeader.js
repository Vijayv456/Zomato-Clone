import React from "react";
import zomatoicon from "./Assets/zomatoiconwhite.avif";
import SearchBar from "./search-bar";
class HompageHeader extends React.Component {
  render() {
    return (
      <div className="homepage-header">
        <img src={zomatoicon} alt={zomatoicon} />
        <h2>Discover the best food & drinks in Chennai</h2>
        <SearchBar />
      </div>
    );
  }
}

export default HompageHeader;
