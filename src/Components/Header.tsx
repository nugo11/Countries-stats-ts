import moon from "../../public/imgs/moon.png";

export default function Header() {
  let style: any = document.querySelector('head > style:nth-child(9)')

  return (
    <>
      <header>
        <h1>Where in the world?</h1>
        <p
          onClick={() => {
            const getItem = localStorage.getItem("mode");
            if (getItem === "light") {
              localStorage.setItem("mode", "dark");
              style.innerHTML =
                "*{background-color: #202c36;} header img {background: none;} a {background: none} p{background: none;} .info {background: none;} .info h1 {color: white; background: none;} .back a { color: white !important; } .back img { -webkit-filter: brightness(10); filter: brightness(10); background: none;} .border button { background-color: #2b3844; color: white; } header { color: #fff; background-color: #2b3844; } main { color: #fff; background-color: #202c36; } select { color: #fff; background-color: #2b3844; } input { color: #fff; background-color: #2b3844; } .box { background: #2b3844; } .info p { color: #f1f1f17e; } .info b { color: rgb(255 255 255 / 80%); }";
            } else {
              localStorage.setItem("mode", "light");
              style.innerHTML = "";
            }
          }}
        >
          <img src={moon} alt="dark mode" />
          Dark Mode
        </p>
      </header>
    </>
  );
}
