import '@/styles/styles.scss';
import Icon from '@/assets/svgs/javascript.svg';
import Card from '@/components/card';
const Introduction = () => {
  return (
    <main>
      <section id="introduction">
        <div className="cards">
          <Card
            icon={Icon}
            title="UI/UX Design"
            href="https://github.com/niltonc"
            hrefLabel="20 PROJECTS"
          >
            Create design products with unique ideas that matters
          </Card>
          <Card
            icon={Icon}
            active
            title="Frontend Development"
            hrefLabel="20 PROJECTS"
          >
            Making the Web Look Good
          </Card>
          <Card icon={Icon} title="Backend Development" hrefLabel="20 PROJECTS">
            Building the Web’s Backbone
          </Card>
        </div>
        <div className="introduction-text">
          <p>Introduction</p>
          <h2>Hello! I'm Tanmoy Saha</h2>
          <h4>Crafting User Experiences that Delight and Inspire</h4>
          <p>
            I am a UI/UX designer who loves to create engaging and delightful
            user experiences for web and mobile applications. I use my skills in
            user research, design thinking, and prototyping to craft interfaces
            that are not only aesthetically pleasing, but also easy to use and
            navigate. Making it a very smooth and delightful experience for the
            clients
          </p>
        </div>
      </section>
    </main>
  );
};
export default Introduction;
