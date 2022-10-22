import "../App.css";
import { InstituteCard } from ".";
import { institutesjson } from "../helpers";
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { getFlag } from "../helpers/getFlag";
import { getListData } from "../helpers/getListData";

export const InstitutesList = () => {
  const institutes = institutesjson;

  let obj = getListData()
  console.log("🚀 ~ file: InstitutesList.jsx ~ line 20 ~ InstitutesList ~ obj", obj)

  const countriesCompleteArray = institutes.features.map((institute) => {
    return institute.properties.country_name;
  });
  let countriesArray = [];
  const [open, setOpen] = useState(false);

  const [selectedInstitute, setSelectedInstitute] = useState("");

  const activeDropdown = (country, key) => {
    console.log(key);
    setSelectedInstitute(country);
    setOpen(!open);
  };

  //Remove duplicates from countriesCompleteArray
  for (let i = 0; i < countriesCompleteArray.length; i++) {
    if (!countriesArray.includes(countriesCompleteArray[i])) {
      countriesArray.push(countriesCompleteArray[i]);
    }
  }

  let key = 0;
  return (
    <>
      <List>
        {countriesArray.map((country) => {
          return (
            <ListItem key={key++} onClick={() => activeDropdown(country, key)}>
              <ListItemIcon>
                <img
                  key={`flag-${key++}`}
                  src={getFlag(country)}
                  alt={`bandera de ${country}`}
                  style={{ width: 50 }}
                />
              </ListItemIcon>
              <ListItemText key={`country-${key++}`} primary={country} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          );
        })}
      </List>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List>
          <ListItem>
            <div className="listings">
              {institutes.features
                .map((institute) => {
                  return (
                    <InstituteCard
                      key={institute.properties.id}
                      name={
                        institute.properties.type +
                        " " +
                        institute.properties.place
                      }
                      city={institute.properties.city_name}
                      year={institute.properties.year}
                      place={institute.properties.place}
                      cooperation={institute.properties.cooperation}
                      address={institute.properties.address}
                      country={institute.properties.country_name}
                      website={institute.properties.website}
                      email_1={institute.properties.email_1}
                      email_2={institute.properties.email_2}
                      phone={institute.properties.phone}
                      extension={institute.properties.extension}
                      phone_2={institute.properties.phone_2}
                      agreement_1={institute.properties.agreement_1}
                      agreement_2={institute.properties.agreement_2}
                      local_director={institute.properties.local_director}
                      local_director_email={
                        institute.properties.local_director_email
                      }
                      local_director_profile={
                        institute.properties.local_director_profile
                      }
                      chinese_director={institute.properties.chinese_director}
                      chinese_director_profile={
                        institute.properties.chinese_director_profile
                      }
                      chinese_director_email={
                        institute.properties.chinese_director_email
                      }
                      logo={institute.properties.logo}
                      coordinates={institute.geometry.coordinates}
                    />
                  );
                })
                .filter(
                  (institute) => institute.props.country === selectedInstitute
                )}
            </div>
          </ListItem>
        </List>
      </Collapse>
    </>
  );
};
