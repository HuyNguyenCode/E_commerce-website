import CredentialsProvider from "next-auth/providers/credentials";
const options = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        console.log("password in authorize");
        console.log(password);
        try {
          const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });
          if (response.ok) {
            const user = await response.json();
            return Promise.resolve(user);
          } else {
            return Promise.resolve(null);
          }
        } catch (error) {
          console.error("Error during authorization:", error);
          return Promise.resolve(null);
        }
      },
    }),
  ],
};

export default options;
