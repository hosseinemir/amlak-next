import NextAuth from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import AmlakUser from "@/models/AmlakUser";
import { verifypassword } from "@/utils/Auth";
import ConnectDB from "@/utils/ConnectDB";


export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await ConnectDB();
        } catch (error) {
          throw new Error("خطایی در سرور رخ داده است");
        }
        if (!email || !password) throw new Error("اطلاعات نامعتبر است");

        const user = await AmlakUser.findOne({ email });
        if (!user) throw new Error("کاربری یافت نشد");

        const isValid =await verifypassword(password, user.password);

        if (!isValid) throw new Error("ایمیل و یا پسورد اشتباه است");

        return { email };
      },
    })
  ],
  
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
