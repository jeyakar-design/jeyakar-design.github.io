import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/styles/common.style.css";

const HomePage = lazy(() => import("./pages/home"));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/portfolio"
            element={<RedirectSite htmlPage={"/portfolio/index.html"} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

interface RedirectSite {
  htmlPage: string;
}

const RedirectSite = ({ htmlPage }: RedirectSite) => {
  window.location.href = htmlPage;
  return <></>;
};

export default App;
