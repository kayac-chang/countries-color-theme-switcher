import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from "@/components";
import { Home, Detail } from "@/pages";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Header />

        <div className="p-4 flex flex-col gap-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
