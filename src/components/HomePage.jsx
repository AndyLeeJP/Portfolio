import React from "react";
// import image1 from "../../Images/bg1.jpg";
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import javaImage from "../Images/java.png";
import profileImage from "../Images/andy.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container text-center">
      <h1>Andy Lee</h1>

      <img src={profileImage} className="profileImage" />

      <p>
        Born in Korea and raised in Japan, Andy Lee has been exposed to many
        cultures, held interest in technology and software in his early age, he
        studied algorithms and codingin Centennial college in Canada, and
        successfully worked as a professional software engineer in the IT
        company in Tokyo, Japan
      </p>

      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 class="section-subheading text-muted mb-5">
              私が作った作品一覧です
            </h3>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <a href="https://google-map-app.vercel.app/">
                <h4 class="my-3">Tokyo Wi-Fi location on Google Maps</h4>
              </a>
              <p class="text-muted">
                This website uses Google map API and Tokyo Metropolitan
                Government's open data to mark Wi-Fi coordinates on Google map.
                Clicking on a marker will take you to the corresponding address
                and pressing a button outside the map will take you back to your
                current location.
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <a href="https://pokemon-azure-five.vercel.app/">
                <h4 class="my-3">a pokemon dictionary</h4>
              </a>
              <p class="text-muted">
                Pokémon are arranged in numbered order in this illustrated book.
                When you press a Pokémon, its status appears on the right.
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">ウェブセキュリティ</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <button type="button" class="btn btn-primary">
        <Link to="/blog">See more</Link>
      </button>

      <section id="skill">
        <div class="text-center">
          <h1 class="title">スキル</h1>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={reactImage} />
              <h4>React</h4>
              <p>Reactがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={jsImage} />
              <h4>HTML/CSS</h4>
              <p>HTML/CSSがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={javaImage} />
              <h4>Java</h4>
              <p>Firebaseがつかえます</p>
            </div>
          </div>
          <button type="button" class="btn btn-primary">
            スキル一覧
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
