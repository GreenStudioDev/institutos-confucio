import "../App.css";
import { useContext, useState } from "react";
import { mapContext } from "../context";
import {
  Collapse,
  List,
  ListItem,
  // ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { getListData } from "../helpers/getListData";
import { getFlag } from "../helpers";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export const InstituteCardCopy = () => {
  const { map } = useContext(mapContext);

  const [open, setOpen] = useState(false);
  console.log("🚀 ~ file: InstituteCardCopy.jsx ~ line 20 ~ InstituteCardCopy ~ open", open)

  const handleClick = (i) => {
    setOpen(i)
    console.log("🚀 ~ file: InstituteCardCopy.jsx ~ line 24 ~ handleClick ~ i", i)
    if(i === open) {
      setOpen(23)
    } setOpen(i)
  };

  const DataList = getListData();

  return (
    <List>
      {DataList.map((country, i) => {
        let countryName = country.countriesInstitutes.name;
        return (
          <>
            <ListItem button key={`li-${i}`} onClick={() => handleClick(i)}>
              <ListItemIcon key={`lii-${i}`}>
                <img
                  key={`img-key-${i}`}
                  src={getFlag(countryName)}
                  alt={`bandera de ${countryName}`}
                  style={{ width: 50 }}
                />
              </ListItemIcon>
              <ListItemText key={`lit-${i}`} primary={countryName} />
              {open === i ? (
                <ExpandLess key={`icon1-${i}`} />
              ) : (
                <ExpandMore key={`icon2-${i}`} />
              )}
            </ListItem>
            <Collapse
              key={`collpse-${i}`}
              in={open === i }
              timeout="auto"
              unmountOnExit
            >
              <List key={`listcol-${i}`}>
                <ListItem key={i} sx={{ flexDirection: "column" }} >
                  {country.countriesInstitutes.institutes.map((items, ix) => {
                    const onClick = () => {
                      map.flyTo({
                        center: items.institute.institute_coords,
                        zoom: 15,
                        pitch: 63,
                        bearing: 80,
                      });
                    };
                    return (
                      <div
                        key={`licont-${ix}`}
                        className="item"
                        onClick={onClick}
                      >
                        <div key={`licontName-${ix}`} className="title">
                          {items.institute.institute_name}
                        </div>
                        <div key={`licontAdd-${ix}`}>
                          {items.institute.institute_address}
                        </div>
                        <div key={`licontCity-${ix}`}>
                          {items.institute.institute_city}
                        </div>
                      </div>
                    );
                  })}
                </ListItem>
              </List>
            </Collapse>
          </>
        );
      })}
    </List>
  );
};
