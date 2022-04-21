import Header from "./components/Header";
import LogIn from "./components/LogIn";
import Footer from "./components/Footer";
import "./styles/App.css";
import "./styles/form.css";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import LogOut from "./components/LogOut";
import { loginUrl } from "./settings";
import img from "./smiley.png";

function App() {
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  //set favicon
  var link = document.createElement("link");
  link.type = "image/png";
  link.rel = "icon";
  link.href = img;
  document.getElementsByTagName("head")[0].appendChild(link);

  const logInFunc = async (user) => {
    const res = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();
    setUserName(data.username);
    setUserRole(data.role0);
    if (data.username !== null && data.username !== "") {
      setLoggedIn(true);
    }
  };

  const logOutFunc = async () => {
    setLoggedIn(false);
    setUserName("");
    setUserRole("");
  };

  return (
    <div className="App">
      <Header />

      {loggedIn && <WelcomePage name={userName} role={userRole} />}

      {loggedIn && (
        <nav className="borderNoTop">
          <Link to="/">Home</Link>
          <Link to="/pokemons">Pokemons</Link>
          <Link to="/swapi">Star wars</Link>
        </nav>
      )}
      <Outlet />

      {!loggedIn && <LogIn onAdd={logInFunc} />}

      {loggedIn && <LogOut onClick={logOutFunc} />}

      <Footer />
    </div>
  );
}

export default App;
