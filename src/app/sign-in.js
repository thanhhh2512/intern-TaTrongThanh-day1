"use client";

const SignIn = ({ onSignIn }) => {
  return (
    <button
      className="hover: cursor-pointer"
      onClick={() => {
        onSignIn();
      }}
    >
      Sign In
    </button>
  );
};

export default SignIn;
