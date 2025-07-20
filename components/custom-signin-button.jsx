"use client";

import { SignInButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

export function CustomSignInButton() {
  const handleSignInClick = () => {
    // Scroll to top when sign-in is clicked
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <SignInButton forceRedirectUrl="/dashboard" mode="modal">
      <Button variant="outline" onClick={handleSignInClick}>
        Login
      </Button>
    </SignInButton>
  );
}
