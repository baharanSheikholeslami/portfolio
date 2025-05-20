import Image from "next/image";

const AboutPageModule = () => {
  const getCardImageStyle = (url: string) => ({
    backgroundImage: `url(${url})`,
  });

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-header">
          <p>ABOUT ME</p>
        </div>

        <div className="about-section">
          <div className="about-music-box">
            <Image
              priority
              src="/portfolio/assets/music.svg"
              alt="music"
              width={143}
              height={143}
            />
            <div className="about-music-text">
              <p className="about-music-title">My Taste Of Music</p>
              <p>
                For me, music is more than just background noise—it’s a source
                of energy, focus, and emotional connection. Whether I’m coding,
                designing, or just taking a break, having music around helps me
                stay in the zone. It boosts my creativity, lifts my mood, and
                sometimes even inspires ideas I wouldn’t have had otherwise. I
                love how different genres can match different states of
                mind—there’s always a song that fits the moment.
              </p>
            </div>
          </div>

          <div className="about-card-group">
            <div className="about-row">
              <div className="about-card">
                <div
                  className="about-card-image"
                  style={getCardImageStyle("/portfolio/assets/addin.jpg")}
                ></div>
                <div className="about-card-content">
                  <p className="about-card-title">Adiin By Otto A Totland</p>
                  <p>
                    "Companion" is a serene solo piano piece by Norwegian
                    composer Otto A. Totland, featured on his 2021 album of the
                    same name. Recorded on a vintage upright piano at Berlin’s
                    Funkhaus Saal 3, the track exemplifies Totland's minimalist
                    approach, embracing the natural sounds of the instrument—
                    such as the mechanical noises of the hammers and the subtle
                    use of the sustain pedal—to create an intimate and
                    contemplative atmosphere.
                  </p>
                  <a href="https://open.spotify.com/track/60Wh77e7OunMYGiW4qLWZK">
                    <Image
                      priority
                      src="/portfolio/assets/play.svg"
                      alt="play"
                      width={64}
                      height={64}
                      style={{ float: "right", marginTop: "16px" }}
                    />
                  </a>
                </div>
              </div>

              <div className="about-card">
                <div
                  className="about-card-image"
                  style={getCardImageStyle("/portfolio/assets/Mina.jpg")}
                ></div>
                <div className="about-card-content">
                  <p className="about-card-title">Mina By Christophe Rezai</p>
                  <p>
                    "Mina" is a poignant instrumental track by composer
                    Christophe Rezai, featured as the third piece on his 2011
                    album *Canaan*. The composition showcases Rezai's minimalist
                    approach, blending gentle piano melodies with subtle
                    orchestration to evoke deep emotional resonance.
                  </p>
                  <a href="https://open.spotify.com/track/5sh7886NziXcQGfv5Yq8ko">
                    <Image
                      priority
                      src="/portfolio/assets/play.svg"
                      alt="play"
                      width={64}
                      height={64}
                      style={{ float: "right", marginTop: "16px" }}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="about-row">
              <div className="about-card">
                <div
                  className="about-card-image"
                  style={getCardImageStyle("/portfolio/assets/idea10.jpg")}
                ></div>
                <div className="about-card-content">
                  <p className="about-card-title">Idea 10 By Gibran Alcocer</p>
                  <p>
                    "Idea 10" is a minimalist piano composition by Mexican
                    pianist and composer Gibran Alcocer. Composed in the natural
                    G minor scale, "Idea 10" features a simple yet emotionally
                    resonant melody, primarily utilizing piano with subtle
                    percussion elements. The composition's popularity has led to
                    various reinterpretations and arrangements, including solo
                    piano renditions and ambient covers.
                  </p>
                  <a href="https://open.spotify.com/track/1lb3H41lbvAN28N7yqRNL9">
                    <Image
                      priority
                      src="/portfolio/assets/play.svg"
                      alt="play"
                      width={64}
                      height={64}
                      style={{ float: "right", marginTop: "16px" }}
                    />
                  </a>
                </div>
              </div>

              <div className="about-card">
                <div
                  className="about-card-image"
                  style={getCardImageStyle(
                    "/portfolio/assets/transciense.jpeg"
                  )}
                ></div>
                <div className="about-card-content">
                  <p className="about-card-title">
                    Transience By Yannick Lowack
                  </p>
                  <p>
                    "Transience" is a solo piano composition by Yannick Lowack,
                    released on October 8, 2023. This 2-minute piece blends
                    minimalist classical elements with ambient textures,
                    creating a reflective and emotionally resonant atmosphere.
                    Its gentle melodies and subtle dynamics evoke a sense of
                    impermanence and introspection.
                  </p>
                  <a href="https://open.spotify.com/track/65lYbLoubih0ZSuuZEneSl">
                    <Image
                      priority
                      src="/portfolio/assets/play.svg"
                      alt="play"
                      width={64}
                      height={64}
                      style={{ float: "right", marginTop: "16px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageModule;
