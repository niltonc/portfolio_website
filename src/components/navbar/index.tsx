import '../../styles/styles.scss';
const Navbar = () => {
  return (
    <main>
      <section id="header">
        <div className="navbar-title">
          <h3 className="title-first-name">Nilton</h3>
          <h3 className="title-last-name">Oliveira</h3>
        </div>
        <div>
          <ul className="navbar-menu">
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
        <div>
          <ul className="social-media">
            <li>
              <i className="fa-brands fa-linkedin-in"></i>
              <a
                href="https://www.linkedin.com/in/tanmoy-saha-7724b5195/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <i className="fa-brands fa-github"></i>
              <a href="https://github.com/TanmoyTSSaha" target="_blank">
                Github
              </a>
            </li>
            <li>
              <i className="fa-regular fa-envelope"></i>
              <a href="mailto:tanmoytssaha@gmail.com">Email</a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
export default Navbar;
