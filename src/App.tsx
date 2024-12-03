import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./Pages/HomeLayout";
import CardId from "./Pages/CardId";
import Home from "./Pages/Home";

const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<CardId />} />
        </Route>
      </Routes>

    </BrowserRouter>

  );
};

export default App;
