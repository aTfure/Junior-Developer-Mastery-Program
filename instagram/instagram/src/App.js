import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import * as ROUTES from "./constants/routes";

const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/sign-up"));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
      </Route>
      </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
