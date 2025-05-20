import Image from "next/image";

const HomePageModule = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-header">
          <p>HOME</p>
        </div>
        <div className="home-section">
          <div className="home-intro">
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  gap: "16px",
                }}
              >
                <Image
                  priority
                  src="/portfolio/assets/Welcome.svg"
                  alt="welcome logo"
                  width={220}
                  height={80}
                />
                <span style={{ fontSize: "20px" }}>I’m</span>
              </div>
              <h1 className="home-name">Baharan Sheikholeslami</h1>
              <p className="home-description">
                Hi, I'm Baharan, 22 years old. I'm a junior front-end developer
                and currently studying computer engineering at Amirkabir
                University of Technology in Iran. I’m really passionate about
                web development and love building clean, responsive user
                interfaces. As I continue learning both in university and
                through real-world projects, I’m always looking for new
                challenges and opportunities to grow my skills, especially in
                modern front-end frameworks.
              </p>
            </div>

            <div className="home-profile-image">
              <Image
                priority
                src="/portfolio/assets/profile.png"
                alt="profile img"
                width={270}
                height={200}
              />
            </div>
          </div>

          <section className="home-hobbies">
            <h2 className="home-hobbies-title">✨ My Hobbies</h2>
            <p className="home-hobbies-text">
              Outside of coding, I have a bunch of hobbies that keep me inspired
              and balanced. I love exploring digital art and design—it’s a fun
              way to mix creativity with tech. I also enjoy reading, especially
              books that dive into psychology, self-growth, or science fiction.
              Music is a big part of my day too; whether I'm working or
              relaxing, there's usually something playing in the background. And
              when I need a break from screens, I like going for walks or
              hanging out with friends.
            </p>
          </section>

          <div className="home-profile-mobile">
            <Image
              priority
              src="/portfolio/assets/profile.png"
              alt="profile img"
              width={270}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageModule;
