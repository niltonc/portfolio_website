import '../../styles/styles.scss';
const Body = () => {
  return (
    <main>
      <section id="content-body">
        <div className="body-part-1">
          <div className="developer-intro">
            <p>Full-Stack Developer</p>
            <p>Designer</p>
          </div>
          <div className="body-title">
            {/* <!-- <h1>Talk is cheap<br/>Show me the code</h1> --> */}
            <h1>
              Full Stack Wizard: Coding
              <br />
              and Designing Magic
            </h1>
            <p>
              I design and code beautifully simple things,
              <br />
              and I love what I do.
            </p>
            <a href="#">LET'S CHAT!</a>
          </div>
          <div className="body-tail">
            <h1>2</h1>
            <p>
              YEARS
              <br />
              EXPERIENCE
            </p>
            <h1>20</h1>
            <p>
              PROJECTS
              <br />
              COMPLETED
            </p>
          </div>
        </div>
        <div className="body-part-2">
          <div className="hoodie-guy-animation-class">
            <div className="hoodie-guy"></div>
            <div className="circle">
              <span className="--i:1;">
                <img src="assets/SVGIcons/flutter.svg" height="75px" />
              </span>
              <span className="--i:2;">
                <img src="assets/SVGIcons/python.svg" height="75px" />
              </span>
              <span className="--i:3;">
                <img src="assets/SVGIcons/adobe-photoshop.svg" height="75px" />
              </span>
              <span className="--i:4;">
                <img src="assets/SVGIcons/django.svg" height="75px" />
              </span>
              <span className="--i:5;">
                <img
                  src="assets/SVGIcons/adobe-premiere-pro.svg"
                  height="75px"
                />
              </span>
              <span className="--i:6;">
                <img src="assets/SVGIcons/html-5.svg" height="70px" />
              </span>
              <span className="--i:7;">
                <img src="assets/SVGIcons/figma.svg" height="75px" />
              </span>
              <span className="--i:8;">
                <img src="assets/SVGIcons/css3.svg" height="70px" />
              </span>
              <span className="--i:9;">
                <img src="assets/SVGIcons/javascript.svg" height="75px" />
              </span>
              <span className="--i:10;">
                <img
                  src="assets/SVGIcons/adobe-illustrator.svg"
                  height="75px"
                />
              </span>
              <span className="--i:11;">
                <img src="assets/SVGIcons/dart.svg" height="75px" />
              </span>
              <span className="--i:12;">
                <img src="assets/SVGIcons/PostgreSQL-Dark.svg" height="75px" />
              </span>
              <span className="--i:13;">
                <img src="assets/SVGIcons/MySQL-Dark.svg" height="75px" />
              </span>
              <span className="--i:14;">
                <img src="assets/SVGIcons/Firebase-Dark.svg" height="75px" />
              </span>
              <span className="--i:15;">
                <img src="assets/SVGIcons/Github-Dark.svg" height="75px" />
              </span>
            </div>
          </div>
          <div className="background-circle"></div>
        </div>
      </section>
    </main>
  );
};
export default Body;
