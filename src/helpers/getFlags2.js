export function getFlags2(countryName) {
  let countryNameEng = countryName.trim().split(" ").join("%20");
  if (countryNameEng === "Surinam") {
    countryNameEng = "sr";
  } else if (countryNameEng === "Bahamas") {
    countryNameEng = "bs";
  } else if (countryNameEng === "Brasil") {
    countryNameEng = "br";
  } else if (countryNameEng === "Granada") {
    countryNameEng = "gd";
  } else if (countryNameEng === "Haití") {
    countryNameEng = "ht";
  } else if (countryNameEng === "México") {
    countryNameEng = "mx";
  } else if (countryNameEng === "Trinidad%20y%20Tobago") {
    countryNameEng = "tt";
  } else if (countryNameEng === "Panamá") {
    countryNameEng = "pa";
  } else if (countryNameEng === "Perú") {
    countryNameEng = "pe";
  } else if (countryNameEng === "República%20Dominicana") {
    countryNameEng = "do";
  } else if (countryNameEng === "Argentina") {
    countryNameEng = "ar";
  } else if (countryNameEng === "Barbados") {
    countryNameEng = "bb";
  } else if (countryNameEng === "Bolivia") {
    countryNameEng = "bo";
  } else if (countryNameEng === "Chile") {
    countryNameEng = "cl";
  } else if (countryNameEng === "Colombia") {
    countryNameEng = "co";
  } else if (countryNameEng === "Costa%20Rica") {
    countryNameEng = "cr";
  } else if (countryNameEng === "Cuba") {
    countryNameEng = "cu";
  } else if (countryNameEng === "Ecuador") {
    countryNameEng = "ec";
  } else if (countryNameEng === "El%20Salvador") {
    countryNameEng = "sv";
  } else if (countryNameEng === "Granada") {
    countryNameEng = "gd";
  } else if (countryNameEng === "Guyana") {
    countryNameEng = "gy";
  } else if (countryNameEng === "Jamaica") {
    countryNameEng = "jm";
  } else if (countryNameEng === "Uruguay") {
    countryNameEng = "uy";
  } else if (countryNameEng === "Venezuela") {
    countryNameEng = "ve";
  }

  const apiFlags = "https://flagcdn.com/56x42/";
  const flagUrl = `${apiFlags}${countryNameEng}.png`;
  return flagUrl;
}
