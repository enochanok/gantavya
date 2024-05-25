import React from "react";
import Profile from "../components/Profile";
import { useState } from "react";
import LoginForm from "../components/LoginForm";
import ProfileDashboard from "../components/ProfileDashboard";

function ProfilePage() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const handleSignInClick = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleSignUpClick = () => {
    setShowSignupForm(!showSignupForm);
  };
  return (
    <>
      {showLoginForm && <LoginForm onClose={handleSignInClick} />}
      {showSignupForm && <Signup onClose={handleSignUpClick} />}
      <Profile>
        <ProfileDashboard />
      </Profile>
    </>
  );
}

export default ProfilePage;
