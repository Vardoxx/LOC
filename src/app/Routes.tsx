import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/Home-page/HomePage";

const Router = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route
          path=""
          element={<Layout />}
          //prettier-ignore
          children={[
          <Route index element={<HomePage />}
          />]}
        />
      </Routes>
    </div>
  );
};

export default Router;
