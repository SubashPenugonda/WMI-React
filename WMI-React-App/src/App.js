import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import filterFactory, { selectFilter } from "react-bootstrap-table2-filter";
import "./App.css";




const { SearchBar } = Search;

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  //const [keys, setKeys] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
      fetch("http://localhost:50697/api/WMI")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          //setKeys(Object.keys(result[0]));
          result.sort((a, b) =>
            a.createdOn > b.createdOn
              ? 1
              : a.createdOn === b.createdOn
              ? a.wmi > b.wmi
                ? 1
                : -1
              : -1
          );

          let c = [];
          let k =  ["name", "wmi", "country", "createdOn", "vehicleType"];
         let selectOptions = [...new Set(result.map((item) => item.country))];

          result.forEach(
            (item) => (item.country = selectOptions.indexOf(item.country))
          );

          setItems(result);

          selectOptions = Object.assign({}, selectOptions);
          k.forEach((key) => {
            if (key === "country") {
              c.push({
                dataField: key,
                text: key,
                sort: true,
                formatter: (cell) => selectOptions[cell],
                filter: selectFilter({
                  options: selectOptions,
                }),
              });
            } else c.push({ dataField: key, text: key, sort: true });
          });

          setColumns(c);

          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);


  const getTableJsx = () => {
    return [
      <ToolkitProvider keyField="wmi" data={items} columns={columns} search>
        {(props) => (
          <div>
            <SearchBar {...props.searchProps} />
            <hr />
            <BootstrapTable
              striped
              hover
              condensed
              filter={filterFactory()}
              {...props.baseProps}
            />
          </div>
        )}
      </ToolkitProvider>,
      
    ];
  };

  const getLoadingJsx = () => {
    return <div className="loader"> </div>;
  };

  return (
    <div className="App">
      <header>WMI Data - Honda | Total: {items.length}</header>
      {isLoaded ? getTableJsx() : getLoadingJsx()}
    </div>
  );
}

export default App;
