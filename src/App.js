import ContactForm from "./components/ContactForm";
import EduForm from "./components/EduForm";
import WorkInfo from "./components/WorkInfo";

//Can pull stored data from localStorage here

function App() {
  return (
    <div className="App">
      <ContactForm />
      <EduForm />
      <WorkInfo />
    </div>
  );
}

export default App;
