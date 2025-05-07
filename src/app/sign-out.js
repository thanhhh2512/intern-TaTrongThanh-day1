"use client";

const SignOut = ({ onSignOut }) => {
  return (
    <button
      className="hover: cursor-pointer"
      onClick={() => {
        onSignOut();
      }}
    >
      Sign Out
    </button>
  );
};

export default SignOut;
