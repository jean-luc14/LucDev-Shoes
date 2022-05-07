import React from 'react'

const Grid = (props) => {
  return (
    <div className={`wrapperGridCenter ${props.searchResults ? 'search_results_active':''}`}>
      <div className="wrapperGrids">{props.children}</div>
    </div>
  );
}

export default Grid