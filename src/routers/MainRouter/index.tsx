import { BrowserRouter, Route, Routes } from "react-router";
import { CTAHome } from "../../pages/CTAHome";
import { CTALogin } from "../../pages/CTALogin";
import { CTARegister } from "../../pages/CTARegister";

export function MainRouter() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CTAHome />} />

        <Route path="/login/" element={<CTALogin />} />
        <Route path="/register/" element={<CTARegister />} />
      </Routes>
    </BrowserRouter>
  );
}