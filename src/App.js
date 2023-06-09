import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Profile from "./pages/profile";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp";
import Offers from "./pages/Offers";
function App() {
  return (
    <>
    <Router>
    <h1 className='text-6xl font-bold underline'>Gecko Auction House</h1>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/sign-in" element={<SignIn/>} />
      <Route path="/forgot-password" element={<ForgotPassword/>} />
      <Route path="/sign-up" element={<SignUp/>} />
      <Route path="/offers" element={<Offers/>} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
