export function getFlag (countryName) {   
  let countryNameEng = countryName.trim().split(' ').join('%20') 
    if (countryNameEng === 'Surinam') {
      countryNameEng = 'Suriname'
    } else if (countryNameEng === 'Bahamas') {
      countryNameEng = 'bhs'
    } 
    else if (countryNameEng === 'Brasil') {
      countryNameEng = 'Brazil'
    }
     else if (countryNameEng === 'Granada') {
      countryNameEng = 'Grenada'
    } else if (countryNameEng === 'Haití') {
      countryNameEng = 'Haiti'
    } else if (countryNameEng === 'México') {
      countryNameEng = 'Mexico'
    } else if (countryNameEng === 'Trinidad%20y%20Tobago') {
      countryNameEng = 'tt'
    } else if (countryNameEng === 'Panamá') {
      countryNameEng = 'Panama'
    } else if (countryNameEng === 'Perú') {
      countryNameEng = 'Peru'
    } else if (countryNameEng === 'República%20Dominicana') {
        countryNameEng = 'dom'
    }
  
    const apiFlags = 'https://countryflagsapi.com/png/'
    const flagUrl = `${apiFlags}${countryNameEng}`
    return flagUrl
  }