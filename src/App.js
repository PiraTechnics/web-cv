import ContactInfo from "./components/ContactInfo";
import EduInfo from "./components/EduInfo";
import WorkInfo from "./components/WorkInfo";

function App() {
  return (
    <div className="App">
      <ContactInfo emailVal={"someone@place.net"} />
      <EduInfo />
      <WorkInfo />
    </div>
  );
}

export default App;
