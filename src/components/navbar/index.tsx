import '@/styles/styles.scss';

import Linkedin from '@/assets/svgs/linkedin.svg';
import Github from '@/assets/svgs/github.svg';
import Mail from '@/assets/svgs/mail.svg';
import Image from 'next/image';
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
              <Image src={Linkedin} width={15} height={15} alt="" />
              <a
                href="https://www.linkedin.com/in/tanmoy-saha-7724b5195/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <Image src={Github} width={15} height={15} alt="" />
              <a href="https://github.com/niltonc" target="_blank">
                Github
              </a>
            </li>
            <li>
              <Image src={Mail} width={15} height={15} alt="" />
              <a href="mailto:niltoncesarjr1@gmail.com">Email</a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
export default Navbar;
