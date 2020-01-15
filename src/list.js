import React, { useState, Fragment } from "react";
import Teaser from "./teaser";

const List = ({ items, loadMore }) => {
  const [loadedItems, loadMoreItems] = useState(loadMore);
  let listItems = items;
  if (loadMore) {
    listItems = listItems.filter((x, i) => i < loadedItems);
  }
  return (
    <Fragment>
      <ul data-testid="list-container">
        {listItems.map((l, i) => (
          <Teaser key={i} {...l} />
        ))}
      </ul>
      {loadMore && loadedItems != items.length && (
        <button
          onClick={() => loadMoreItems(loadedItems + loadMore)}
          data-testid="show-more"
        >
          Load more
        </button>
      )}
    </Fragment>
  );
};

export default List;
