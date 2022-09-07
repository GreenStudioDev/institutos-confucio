

export const InstituteCard = ({ name, city, year, place, cooperation}) => {
    return (
      <>
          <div id="listings" className="listings">
              <h6>{name}</h6>
              <h6>{city}</h6>
              <div>{year}</div>
              <div>{place}</div>
              <div>Cooperación: {cooperation}</div>
              {/* <div>website</div>
              <div>email_1</div>
              <div>email_2</div>
              <div>address</div>
              <div>phone</div>
              <div>extension</div>
              <div>phone_2</div>
              <div>agreement_1</div>
              <div>agreement_2</div>
              <div>local_director</div>
              <div>local_director_email</div>
              <div>local_director_profile</div>
              <div>chinese_director</div>
              <div>chinese_director_email</div>
              <div>chinese_director_profile</div>
              <img src= "https://fundacionandresbello.org/wp-content/uploads/2022/08/AR_IC_UNIVERSIDAD_PLATA.jpg" alt="logo instituto" /> */}
          </div>
      </>
    );
  };
  