import React, { memo } from "react";
import { Books } from "../components/Books";
import Pagination from "../components/Pagiination";

const Home = memo(() => {
  return (
    <div className="background_header">
      <div className="content_books">
        <Books />
      </div>
      <Pagination />
    </div>
  );
});

export default Home;
