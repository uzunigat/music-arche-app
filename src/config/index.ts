import * as AuthSession from 'expo-auth-session';

export const config = {
    CLIENT_ID: '506fa1281f92416ba2b0907c3a03ef05',
    CLIENT_SECRET: 'd1ea391c7ab346298199caf627f2e09e',
    REDIRECT_URI: AuthSession.makeRedirectUri({
        path: 'redirect'
    })
};
