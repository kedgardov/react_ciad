const capitalizeFirstLetter = (string) => {
  return (string.charAt(0).toUpperCase() + string.slice(1));
};

export const createTab = (tabName,handleFunction) => {
    return (
      <li className="nav-item">
        <button className="nav-link"
            id={tabName}
            type="button"
           onClick={() => handleFunction(tabName)}
        >
          {capitalizeFirstLetter(tabName)}
        </button>
      </li>
    );
  };
