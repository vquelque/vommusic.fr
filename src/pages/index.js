import ReactFullpage from "@fullpage/react-fullpage"
import React from "react"
import "../styles/global.css"
import MixGallery from "../components/videoGallery"
import SiteMetadata from "../components/SEO"
import Contact from "../components/contact"

const fullpageOptions = {
  // anchors: ["page1", "page2", "page3", "page4", "page5"],
  callbacks: ["onLeave", "afterLoad"],
  navigation: true,
  licenseKey: null,
  responsiveWidth: 1000,
}

const FullpageWrapper = fullpageProps => (
  <ReactFullpage
    {...fullpageOptions}
    render={({ state, fullpageApi }) => {
      return (
        <div id="fullpage-wrapper">
          <SiteMetadata />
          <section className="section" id="page1">
            <div className="overlay"></div>
            <div className="content">
              <div className="container clearfix">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2 col-md-12">
                    <p>Oh, coucou !</p>
                    <h1>
                      Moi c'est{" "}
                      <img
                        src="img/logo.png"
                        className="img-fluid"
                        id="logo"
                        alt="VOM"
                        title="VOM Logo, DJ Club, Discomobile"
                      />
                    </h1>

                    <h2 className="heading_subtitle">
                      Près de <em>Paris</em>, autour de <em>Fontainebleau</em>{" "}
                      en <em>Seine et Marne</em> ? <em>Soirée de rallye</em>,{" "}
                      <em>soirée privée</em>, <em>anniversaire</em>, "
                      <em>clubbing</em>" ? Je vais surement pouvoir t'aider à
                      mettre le feu à ton évènement !
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="icon">
              <i className="fa fa-angle-double-down"></i>
            </div>
          </section>

          <section className="section" id="page2">
            <div className="content">
              <div className="container clearfix">
                <div className="row">
                  <div className="col-lg-6">
                    <h2 className="heading">Qui es tu ?</h2>
                    <p className="lead">
                      Un <strong>DJ</strong>, sans suprises... mais pas que !
                    </p>
                    <p className="text-justify">
                      Depuis tout petit, la musique est une de mes plus grandes
                      passion. J'ai d'abord commencé par apprendre le piano
                      (classique) pendant une dizaine d'années puis, après en
                      avoir eu marre, je me suis tourné vers le jazz et
                      l'improvisation, que je continue d'apprendre aujourd'hui !
                      En parallèle, je me suis épris d'une passion pour le DJing
                      après avoir vu plusieurs set dont un de Jazzy Jeff, un des
                      plus grand (vrai) DJ qui m'a particulièrement marqué. J'ai
                      alors commencé à travailler cette facette de mes
                      compétences musicales. Aujourd'hui, ce que j'aime, c'est
                      partager ma passion pour la musique et faire de mon mieux
                      pour que le public passe une <em>soirée inoubliable</em> !
                      Le{" "}
                      <em>
                        mélange des styles musicaux, des années 80 à la dance
                        actuelle en passant par la House et le Hip Hop
                      </em>
                      fait mon plus grand bonheur. J'ai aujourd'hui eu la chance
                      de mixer pour des <em>public très variés</em> dans un
                      panel de lieux important (du simple nightclub au palace 5
                      étoiles) mais
                      <em>les soirées étudiantes et les soiréees de rallye</em>
                      restent le type de soirée où j'ai le plus d'expérience.
                      Enfin, je suis (avant tout) étudiant en école d'ingénieur.
                    </p>
                  </div>
                  <div
                    className="col-lg-5 offset-md-1"
                    style={{ paddingTop: "80px" }}
                  >
                    <p>
                      <img
                        src="img/bio.jpg"
                        alt="Biography"
                        className="img-fluid rounded-circle"
                      ></img>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section " id="page3">
            <div className="content">
              <div className="container clearfix">
                <div className="row services">
                  <div className="col-lg-12">
                    <h2 className="heading">Ce que je pourrai t'apporter</h2>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="box">
                          <div className="icon">
                            <i className="fa fa-music"></i>
                          </div>
                          <h4 className="heading">
                            Une sélection musicale adaptée
                          </h4>
                          <p className="text-justify">
                            Mon étagère à CDs, 12', 7' est déjà bien chargée et
                            je pense pouvoir y trouver une selection qui mettra
                            le feu au dancefloor. Quasiment l'ensemble de ma
                            discographie est en version "clean" pour convenir à
                            tous les publics. Bien entendu, je suis ouvert à tes
                            demandes si tu souhaites un style ou titre
                            particulier dont je dispose. Sinon, on trouvera une
                            solution ;)
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="box">
                          <div className="icon">
                            <i className="fa fa-headphones"></i>
                          </div>
                          <h4 className="heading">Envoie les watts</h4>
                          <p className="text-justify">
                            Club ou salle équipée avec un système son fixe,
                            alors pas de problèmes. Salle non équipée ou soirée
                            à la maison, je me chargerai d'apporter ou louer le
                            système son <em>correctement dimensionné</em>. La
                            qualité sonore fait 80% de l'ambiance et elle est
                            malhereusement bien trop souvent négligée :'( <br />
                            Je n'utilise que du matériel audio de qualité :
                            Pioneer DJ, Numark, AKG, Sennheiser, Shure, RCF, dbx
                            entre autres.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="box">
                          <div className="icon">
                            <i className="fa fa-lightbulb"></i>
                          </div>
                          <h4 className="heading">Et la lumière fût</h4>
                          <p className="text-justify">
                            L'éclairage permet de donner un ton, une ambiance à
                            la soirée. La salle est équipée, parfait ! Sinon je
                            me chargerai de sortir mes plus beaux pars pour
                            illuminer le dancefloor. L'ensemble de mon système
                            est contrôlable en DMX pour créer des ambiances en
                            totale harmonie.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section" id="page4">
            <div className="content">
              <div className="container clearfix">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="heading">
                      "De bons exemples valent mieux qu'un long discours"
                    </h2>
                    <p className="text-center">
                      Voici quelques extraits de mix enregistrés
                      <em>en live</em> dans des styles "mainstream" (hits
                      actuels) mais toujours avec des petites surprises ;) au
                      cours de diverses soirées. Ici pas de mix préenregistrés,
                      que du live !
                    </p>
                    <div className="row">
                      <iframe
                        src="https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2Fvommusic%2Fvom-live-06-01-18-mainstream-set%2F&hide_cover=1"
                        className="mixcloud-iframe"
                        allowfullscreen
                        scrolling="no"
                        title="mix1"
                      ></iframe>
                    </div>
                    <div className="row">
                      <iframe
                        src="https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2Fvommusic%2Fvom-live-13-10-17-clean-dance-mainstream-set%2F&hide_cover=1"
                        className="mixcloud-iframe"
                        allowfullscreen
                        scrolling="no"
                        title="mix2"
                      ></iframe>
                    </div>
                    <div className="row">
                      <iframe
                        src="https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2Fvommusic%2Fold-school-hip-hop-rb-mixed-by-vom%2F&amp;hide_cover=1"
                        className="mixcloud-iframe"
                        allowfullscreen
                        scrolling="no"
                        title="mix3"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section" id="page5">
            <div className="content">
              <div className="container clearfix">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="heading">
                      "Un bon croquis vaut mieux qu'un long discours"
                    </h2>
                    <p className="text-center text-justify">
                      Parce qu'on peut faire autre chose que mettre les mains en
                      l'air quand on est DJ, voilà quelques exemples de mix un
                      peu plus techniques filmés dans le studio.
                    </p>
                  </div>
                </div>
                <MixGallery />
              </div>
            </div>
          </section>

          <section className="section" id="page6">
            <div className="content">
              <div className="container clearfix">
                <h2 className="heading">Me contacter</h2>
                <div className="row">
                  <div className="col-lg-6">
                    <Contact />
                  </div>
                  <div
                    className="col-lg-6 text-justify pt-lg-4"
                    id="contact-text"
                  >
                    <p>
                      N'hésitez pas à me contacter si vous souhaitez un
                      quelconque renseignement en utilisant le formulaire situé
                      ci-contre. Pour une demande de devis, merci de spécifier
                      le lieu ainsi que le nombre approximatif de personnes.
                      <br />
                      Je vous répondrai le plus rapidement possible !
                    </p>

                    <div className="social">
                      <h3>Connect with me</h3>
                      <p className="social">
                        <a
                          href="http://www.facebook.com/vommusicfr/"
                          title="facebook"
                          rel="external"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                          href="https://www.youtube.com/channel/UCwOH_5KnRSSTInYghCruWng"
                          title="youtube"
                          rel="external"
                        >
                          <i className="fab fa-youtube"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="copyright text-center">
                  <p>
                    &copy;2020 <strong>VOM</strong>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )
    }}
  />
)

export default FullpageWrapper
