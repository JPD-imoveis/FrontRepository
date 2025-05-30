import { BrowserRouter, Route, Routes } from "react-router";
import { CTAHome } from "../../pages/CTAHome";
import { CTALogin } from "../../pages/CTALogin";

export function MainRouter() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CTAHome />} />

        <Route path="/login/" element={<CTALogin />} />
      </Routes>
    </BrowserRouter>
  );
}