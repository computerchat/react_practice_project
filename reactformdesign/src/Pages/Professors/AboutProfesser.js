import CardFour from "../../Components/CardFour";
import CardFive from "../../Components/CardFive";
import CustomSidebar from "../../SideBar/CustomSidebar";
import CardSix from "../../Components/CardSix";
import CardSevan from "../../Components/CardSevan";

export default function AboutProfesser() {
  return (
    <>
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-lg-2 col-md-3 col-sm-4 col-2"> 
            <CustomSidebar />
          </div>

          <div className="col-lg-10 col-md-9 col-sm-8 col-10"> 
            <div className="container p-0 m-0">
              <h1 className="text-start fs-2 fw-bold my-5">Professor Profile</h1>
              <div className="row">
                <div className="col-lg-4"> 
                  <div className="row">
                    <div className="col-12">
                      <CardFour
                        fullName="John Doe"
                        subject="Jr. Professor"
                        followers="1,200"
                        following="750"
                        friends="11,172"
                        profileImage="../professerProfile.jpg"
                      />
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-12">
                      <CardSix
                        about="About"
                        description="Hello I am John Deo a Professor in xyz College Surat. I love to work with all my college staff and seniour professors."
                        Gender="Female"
                        Operation="30+"
                        Degree="B.A., M.A., P.H.D."
                        Designation="Jr. Professor"
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
                    fullName="John Deo"
                    mobile="(123) 456 7890"
                    email="johndeo@example.com"
                    location="India"
                    aboutMeOne="Completed my graduation in Arts from the well known and renowned institution of India – SARDAR PATEL ARTS COLLEGE, BARODA in 2000-01, which was affiliated to M.S. University. I ranker in University exams from the same university from 1996-01."
                    aboutMeTwo="Worked as Professor and Head of the department at Sarda Collage, Rajkot, Gujarat from 2003-2015."
                    aboutMeThree="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                    ed="Education"
                    education={[
                      "B.A., Gujarat University, Ahmedabad, India.",
                      "M.A., Gujarat University, Ahmedabad, India.",
                      "P.H.D., Shaurashtra University, Rajkot",
                    ]}
                    exp="Experience"
                    experience={[
                      "One year experience as Jr. Professor from April-2009 to March-2010 at B. J. Arts College, Ahmedabad.",
                      "Three year experience as Jr. Professor at V.S. Arts & Commerce Collage from April - 2008 to April - 2011.",
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    ]}
                    conf="Conferences, Courses & Workshop Attended"
                    conferences={[
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    ]}
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
