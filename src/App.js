import ContactInfo from "./components/ContactInfo";
import EduInfo from "./components/EduInfo";
import WorkInfo from "./components/WorkInfo";

//Can pull stored data from localStorage here

function App() {
  return (
    <div className="App">
      <ContactInfo />
      <EduInfo />
      <WorkInfo />
    </div>
  );
}

export default App;
