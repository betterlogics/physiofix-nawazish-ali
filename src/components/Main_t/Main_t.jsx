import React from "react";
import "./Main_t.css";
import {useNavigate} from 'react-router-dom'

function Main_t() {

  const navigate = useNavigate();
    const gototest = ()=>{
    navigate('/blog')
  }
  return (
   
  

    <div className="main_testh">
      <h1>TESTIMONIALS</h1>
      <p>
        CLINT LOVE AND{" "}
        <a href="#" className="hh_a">
          GOOGLE REVIEWS
        </a>
      </p>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card card_bg mt-5">
              <div className="card-body">
                <p className="left">
                  <span>
                    The Physio Fix is one of a kind! Not only is the clinic
                    super clean, but the entire staff is friendly and
                    knowledgeable. I have taken Stacie’s handstand clinic, in
                    which she gave a ton of mobility exercises, drills, and
                    actually getting up in a handstand. I am currently doing her
                    Strong Like Stacie 16 week workout program. What I love
                    about this program is that she breaks down every exercise
                    programmed on her app. She also gives modifications which
                    can be super helpful. The workouts are challenging, but in
                    the best way ever because it’s smartly programmed so that
                    you can finish it and feel strong. I also am a PT patient of
                    the clinic and see Dr. Hailey Maggio. I have made a lot of
                    progress in just a few short weeks. I have been recommending
                    The Physio Fix to everyone!
                  </span>
                </p>
              </div>
            </div>
            <div className="flex">
              <span className="text-white btmh">- M.S. IN ARIZONA</span>
              <br />
              <span className="btmp">IN-PERSON AND ONLINE TREATMENT</span>
            </div>
          </div>
          <div className="col-lg-5 FR_sm">
            <div className="card card_bg bg1">
              <div className="card-body">
                <p className="left">
                  <span>
                    The Physio Fix is one of a kind! Not only is the clinic
                    super clean, but the entire staff is friendly and
                    knowledgeable. I have taken Stacie’s handstand clinic, in
                    which she gave a ton of mobility exercises, drills, and
                    actually getting up in a handstand. I am currently doing her
                    Strong Like Stacie 16 week workout program. What I love
                    about this program is that she breaks down every exercise
                    programmed on her app. She also gives modifications which
                    can be super helpful. The workouts are challenging, but in
                    the best way ever because it’s smartly programmed so that
                    you can finish it and feel strong. I also am a PT patient of
                    the clinic and see Dr. Hailey Maggio. I have made a lot of
                    progress in just a few short weeks. I have been recommending
                    The Physio Fix to everyone!
                  </span>
                </p>
              </div>
            </div>
            <div className="flex1">
              <span className="text-white btmh">- M.S. IN ARIZONA</span>
              <br />
              <span className="btmp">IN-PERSON AND ONLINE TREATMENT</span>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card card_bg mt-5">
              <div className="card-body">
                <p className="left">
                  <span>
                    The Physio Fix is one of a kind! Not only is the clinic
                    super clean, but the entire staff is friendly and
                    knowledgeable. I have taken Stacie’s handstand clinic, in
                    which she gave a ton of mobility exercises, drills, and
                    actually getting up in a handstand. I am currently doing her
                    Strong Like Stacie 16 week workout program. What I love
                    about this program is that she breaks down every exercise
                    programmed on her app. She also gives modifications which
                    can be super helpful. The workouts are challenging, but in
                    the best way ever because it’s smartly programmed so that
                    you can finish it and feel strong. I also am a PT patient of
                    the clinic and see Dr. Hailey Maggio. I have made a lot of
                    progress in just a few short weeks. I have been recommending
                    The Physio Fix to everyone!
                  </span>
                </p>
              </div>
            </div>
            <div className="flex">
              <span className="text-white btmh">- M.S. IN ARIZONA</span>
              <br />
              <span className="btmp">IN-PERSON AND ONLINE TREATMENT</span>
            </div>
          </div>
          <div className="col-lg-5 FR_sm">
            <div className="card card_bg bg1">
              <div className="card-body">
                <p className="left">
                  <span>
                    The Physio Fix is one of a kind! Not only is the clinic
                    super clean, but the entire staff is friendly and
                    knowledgeable. I have taken Stacie’s handstand clinic, in
                    which she gave a ton of mobility exercises, drills, and
                    actually getting up in a handstand. I am currently doing her
                    Strong Like Stacie 16 week workout program. What I love
                    about this program is that she breaks down every exercise
                    programmed on her app. She also gives modifications which
                    can be super helpful. The workouts are challenging, but in
                    the best way ever because it’s smartly programmed so that
                    you can finish it and feel strong. I also am a PT patient of
                    the clinic and see Dr. Hailey Maggio. I have made a lot of
                    progress in just a few short weeks. I have been recommending
                    The Physio Fix to everyone!
                  </span>
                </p>
              </div>
            </div>
            <div className="flex1">
              <span className="text-white btmh">- M.S. IN ARIZONA</span>
              <br />
              <span className="btmp">IN-PERSON AND ONLINE TREATMENT</span>
            </div>
          </div>
        </div>
        <button onClick={()=>gototest()}  className="btn hh_a1"> VEIW ALL TESTIMONIALS</button>
      </div>
    </div>
  );
}

export default Main_t;
