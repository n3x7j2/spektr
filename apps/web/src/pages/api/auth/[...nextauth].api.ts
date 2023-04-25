import NextAuth, { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  providers: [
    {
      id: 'spektr',
      name: 'Spketr',
      type: 'oauth',
      clientId: process.env.NEXTAUTH_CLIENT_ID,
      clientSecret: process.env.NEXTAUTH_CLIENT_SECRET,
      wellKnown: process.env.NEXTAUTH_WELLKNOWN_URL,
      authorization: {
        params: {
          scope: process.env.NEXTAUTH_SCOPES,
          __tenant: process.env.NEXTAUTH_TENANT,
        },
      },
      idToken: true,
      checks: ['pkce', 'state'],
      profile(profile) {
        return {
          id: profile.sub,
          email: profile.email,
        };
      },
    },
  ],
  callbacks: {
    async jwt(params: any) {
      const { account, token } = params;
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session(params: any) {
      const { session, token } = params;

      session.accessToken = token.accessToken;
      if (session.user) {
        session.user.id = token.sub;
        session.user.email = token.email;
      }

      return session;
    },
  },
  pages: {
    signIn: '/auth/sign-in',
    signOut: '/auth/sign-out',
  },
};

export default NextAuth(authOptions);
