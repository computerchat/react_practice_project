import CardFour from "../../Components/CardFour";
import CardFive from "../../Components/CardFive";
import CustomSidebar from "../../SideBar/CustomSidebar";
import CardSix from "../../Components/CardSix";
import CardSevan from "../../Components/CardSevan";
export default function AboutStudent() {
  return (
    <>
     <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-lg-2 col-md-3 col-sm-4 col-2 ">
            <CustomSidebar />
          </div>

          <div className="col-lg-10 col-md-9 col-sm-8 col-10 ">
          <div className="container p-0 m-0">
          <h1 className="text-start fs-2 fw-bold my-5">Professor Profile</h1>
          <div className="row">
                <div className="col-lg-4">
                <div className="row">
                    <div className="col-12">
                  <CardFour
                    fullName="Sarah Smith"
                    followers="1,200"
                    following="750"
                    friends="11,172"
                    profileImage="../studentProfile.jpg"
                  />
                   </div>
                  </div>
                  
                  <div className="row mt-5">
                    <div className="col-12">
                  <CardSix
                  about="About me"
                  description = "Hello I am Sarah Smith a student in Sanjivni College Surat. I love to study with all my class friends and professors."
                  Gender = "Female"
                  Operation = "30+"
                  Degree = "B.A., M.A., P.H.D."
                  Designation ="Jr. Professor"
                  />
                 </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-12">
                  <CardSevan
                  adress="Address"
                  fullAdress="456, Pragri flat, varacha road, Surat
                  Gujarat, India."
                  />
                  </div>
                  </div>
                </div>
                
                <div className="col-lg-8">
                  <CardFive
                    fullName="Sarah Smith"
                    mobile="(123) 456 7890"
                    email="test@example.com"
                    location="India"
                    aboutMeOne="Open after rule place He earth earth good called days unto which wherein day doesn't said day image signs fish days forth for evening whose his make his bearing years gathering good brought without."
                    aboutMeTwo="Years living creepeth. Form them yielding behold greater divided void was fowl earth in. Spirit Bring grass they're you have shall years so morning. Grass gathering won't heaven set greater darkness forth abundantly he."
                    aboutMeThree="Isn't hath, forth. Brought sea subdue, from divided replenish creature after creeping abundantly fly is cattle fill were years years may darkness blessed which land creepeth good moving good. Life living you're."
                    ed="Education"
                    education={[
                      "Schooling at sarvoday vidhyalay, Mumbai",
                      "Betchler In Arts in Bhagvati College Hariyana",
                    ]}
                    certificate="Certificates"
                    certificateDes={["1st Prise in Music competition",
                    "1st Prise in Acting & Drama",
                "Gold Medal in Betchler in Arts"]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
