import "./App.css";
import Profile from "./components/Profile";
import UserList from "./components/UserList";
import "bootstrap/dist/css/bootstrap.min.css";

/* Usar useContext para manejar el 
estado de una manera mejor y tener el
estado en un mismo lugar  */

/* CONTEXT */
/* importamos userState para que nuestros componentes puedan acceder al estado  */
import UserState from "./context/User/UserState";

function App() {
  return (
    <UserState>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-7">
            <UserList />
          </div>
          <div className="col-md-5">
            <Profile />
          </div>
        </div>
      </div>
    </UserState>
  );
}

export default App;
