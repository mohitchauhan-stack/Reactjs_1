import Caontainer from "./components/Caontainer.jsx";
import Name from "./components/Name.jsx";

const App = () => {
  return (
    <>
      <Caontainer>
        <Name name="Mohit Chauhan" age={24} />
        <Name name="Sarthak" age={44} />
        <Name name="Mohit Chauhan" age={24} />
        <Name name="Sarthak" age={44} />
        <Name name="Mohit Chauhan" age={24} />
        <Name name="Sarthak" age={44} />
        <Name name="Mohit Chauhan" age={24} />
        <Name name="Sarthak" age={44} />
      </Caontainer>
    </>
  );
};

export default App;
