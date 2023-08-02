import '@/styles/styles.scss';
import Image from 'next/image';
import Form from '@/components/form';

import Linkedin from '@/assets/svgs/linkedin.svg';
import Github from '@/assets/svgs/github.svg';
import Mail from '@/assets/svgs/mail.svg';

const Footer = () => {
  return (
    <main>
      <section id="footer">
        <div className="footer-left">
          <h2>Let's make something amazing together</h2>
          <Form />
          <div className="footer-title">
            <h3 className="title-first-name">Nilton</h3>
            <h3 className="title-last-name">Oliveira</h3>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-email-intro">
            <p>Information</p>
            <h6>São Luís, Maranhão, Brazil</h6>
            <h3>niltoncesarjr1@gmail.com</h3>
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
            <a href="https://www.linkedin.com/in/niltoncosj/" target="_blank">
              <Image src={Linkedin} width={20} height={20} alt={''} />
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/niltonc" target="_blank">
              <Image src={Github} width={20} height={20} alt={''} />
            </a>
            <a href="mailto:niltoncesarjr1@gmail.com" target="_blank">
              <Image src={Mail} width={20} height={20} alt={''} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Footer;
