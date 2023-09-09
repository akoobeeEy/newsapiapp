import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import { Layout } from "./components/index";
import Loading from "./components/loading/Loading";

const Home = lazy(() => import("./pages/home/Home"));
const Business = lazy(() => import("./pages/business/Business"));
const Entertainment = lazy(() => import("./pages/entertainment/Entertainment"));
const General = lazy(() => import("./pages/general/General"));
const Health = lazy(() => import("./pages/health/Health"));
const Science = lazy(() => import("./pages/science/Science"));
const Sports = lazy(() => import("./pages/sports/Sports"));
const Technology = lazy(() => import("./pages/technology/Technology"));
const PageNotFound = lazy(() => import("./pages/notfound/PageNotFound"));

function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="business" element={<Business />} />
            <Route path="entertainment" element={<Entertainment />} />
            <Route path="general" element={<General />} />
            <Route path="health" element={<Health />} />
            <Route path="science" element={<Science />} />
            <Route path="sports" element={<Sports />} />
            <Route path="technology" element={<Technology />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
