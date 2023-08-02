import '@/styles/styles.scss';

import Fluter from '@/assets/svgs/flutter.svg';
import Figma from '@/assets/svgs/figma.svg';
import Fire from '@/assets/svgs/Firebase-Dark.svg';
import JavaScript from '@/assets/svgs/javascript.svg';
import Guy from '@/assets/Hoodie-guy.png';
import Image from 'next/image';
import { Tag } from '@/components/tag';

const Body: React.FC = () => {
  return (
    <main>
      <section id="content-body">
        <div className="body-part-1">
          <Tag.Root>
            <Tag.Title>Front-end Developer</Tag.Title>
            <Tag.Title>Design System</Tag.Title>
          </Tag.Root>
          <div className="body-title">
            <h1>
              Front-end Wizard: Coding
              <br />
              and Designing Magic
            </h1>
            <p>
              I design and code beautifully simple things,
              <br />
              and I love what I do.
            </p>
            <a href="wa.link/wg783e" target="_blank">
              LET'S CHAT!
            </a>
          </div>
          <div className="body-tail">
            <h1>+4</h1>
            <p>
              YEARS
              <br />
              EXPERIENCE
            </p>
            <h1>∞</h1>
            <p>
              FLEXIBILITY
              <br />
              ADAPTABILITY
            </p>
          </div>
        </div>
        <div className="body-part-2">
          <div className="hoodie-guy-animation-class">
            <div className="hoodie-guy">
              <Image src={Guy} width={500} height={500} alt="" />
            </div>
            {/* <div className="circle">
              <span className="s1">
                <Image src={Fluter} width={75} height={75} alt="" />
              </span>
              <span className="s2">
                <Image src={Figma} width={75} height={75} alt="" />
              </span>
              <span className="s3">
                <Image src={Fluter} width={75} height={75} alt="" />
              </span>
              <span className="s4">
                <Image src={Fluter} width={75} height={75} alt="" />
              </span>
              <span className="s5">
                <Image src={Fluter} width={75} height={75} alt="" />
              </span>
              <span className="s6">
                <Image src={Fluter} width={75} height={75} alt="" />
              </span>
              <span className="s7">
                <Image src={Fluter} width={75} height={75} alt="" />
              </span>
              <span className="s8">
                <Image src={Fluter} width={75} height={75} alt="" />
              </span>
              <span className="s9">
                <Image src={Fluter} width={75} height={75} alt="" />
              </span>
              <span className="s10">
                <Image src={Fluter} width={75} height={75} alt="" />
              </span>
              <span className="s11">
                <Image src={Fluter} width={75} height={75} alt="" />
              </span>
              <span className="s12">
                <Image src={Fluter} width={75} height={75} alt="" />
              </span>
              <span className="s13">
                <Image src={Fluter} width={75} height={75} alt="" />
              </span>
              <span className="s14">
                <Image src={Fluter} width={75} height={75} alt="" />
              </span>
              <span className="s15">
                <Image src={Fluter} width={75} height={75} alt="" />
              </span>
            </div> */}
          </div>
          <div className="background-circle"></div>
        </div>
      </section>
    </main>
  );
};
export default Body;
