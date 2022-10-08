import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

import { fauna } from "../../../services/fauna"
import { query as q } from 'faunadb'

export const authOptions = {
  // Configure one or more authentication providers
  
  secret: process.env.SIGNING_KEY,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      
      
      authorization: {
        params: {scope: "read:user"},
      }
    
      
    }),
    // ...add more providers here
  
  ],
 
  callbacks: {
    async signIn({ user, account, profile }) {

      const { id, name, email, login, avatar_url } = user

      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index('users_by_email'),
                  q.Casefold(user.email)
                )
              )
            ),
            q.Create(
              q.Collection('users'),
              { data: { email } }
            ),
            q.Get(
              q.Match(
                q.Index('users_by_email'),
                q.Casefold(user.email)
              )
            )
          )
        )

        return true

      } catch {
        return false
      }

     
    }
  },

 
}

export default NextAuth(authOptions);