import './index.css'

export function Infos() {
  return (
    <main>
      <section className="maisInfo">
        <div className="maisInfoContent">
          <div className="iconAbout">
            <img
              src="public/medias/images/aboutIcon.svg"
              alt=""
              id="aboutIcon"
            ></img>
          </div>
          <div>
            <h2>SOBRE</h2>
          </div>
        </div>
      </section>

      <section className="maisInfo02">
        <div>
          <p>ENDEREÇO:</p>
          <p>AVENIDA CAMILO, 386 - COTIA / SÃO PAULO</p>
        </div>
      </section>
    </main>
  );
}
