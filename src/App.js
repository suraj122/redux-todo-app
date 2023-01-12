import AppHeader from "./components/AppHeader";
import "./styles/App.css";
import { Toaster } from "react-hot-toast";
import AppContent from "./components/AppContent";

function App() {
  return (
    <>
      <div className="max-w-xl mx-auto">
        <h1 className="text-center text-3xl mb-4">Todos</h1>
        <AppHeader />
        <AppContent />
        <Toaster
          position="bottom-right"
          toastOptions={{ style: { fontSize: "1.4rem" } }}
        />
      </div>
    </>
  );
}

export default App;
