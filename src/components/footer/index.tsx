import '../../styles/styles.scss';
const Footer = () => {
  return (
    <main>
      <section id="footer">
        <div className="footer-left">
          <h2>Let's make something amazing together</h2>

          <div className="email-form">
            <h2>
              Start by <span>saying hi</span>
            </h2>
            <input type="text" name="name" id="" placeholder="Your name" />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email Address"
            />
            <div>
              <input
                type="number"
                name="phone-number"
                id=""
                placeholder="Phone number"
              />
              <button type="submit">Send</button>
            </div>
          </div>

          <div className="footer-title">
            <h3 className="title-first-name">Tanmoy</h3>
            <h3 className="title-last-name">Saha</h3>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-email-intro">
            <p>Information</p>
            <h6>Agartala, West Tripura, Tripura, India, Pin-799101</h6>
            <h3>tanmoytssaha@gmail.com</h3>
          </div>
          <div className="footer-nav-menu">
            <ul className="footer-menu">
              <li>
                <a className="active" href="#">
                  &lt; Service &gt;
                </a>
              </li>
              <li>
                <a className="" href="#">
                  Works
                </a>
              </li>
              <li>
                <a className="" href="#">
                  Notes
                </a>
              </li>
              <li>
                <a className="" href="#">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/tanmoy-saha-7724b5195/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/TanmoyTSSaha" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="mailto:tanmoytssaha@gmail.com" target="_blank">
              <i className="fa-regular fa-envelope"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/tanmoy-saha-7724b5195/"
              target="_blank"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/tanmoy-saha-7724b5195/"
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/tanmoy-saha-7724b5195/"
              target="_blank"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Footer;
