import { useSession, signIn } from "next-auth/react";
import { signOut } from 'next-auth/react';

export default function GatedContentWrapper({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  const handleSignIn = () => {
    signIn('okta');
  };

  if (status === 'loading') {
    return <div>Checking authentication...</div>;
  }

  if (!session) {
    return (
      <div className="component-content_okta">
        <p>Please sign in with your Okta credentials to view the full content version.</p>
        <button
          onClick={handleSignIn}>
          Sign in with Okta
        </button>
      </div>
    )
  }

  return (
    <div className="component-content_okta">
      <div>
        <button
          onClick={() => signOut()}>
          Sign Out
        </button>
      </div>
      <div>{children}</div>
    </div>
  );
}