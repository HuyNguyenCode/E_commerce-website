import MainLayout from "@/components/Layouts/MainLayout";
import "../../styles/global.scss";
import ReduxProvider from "@/redux/provider";
import { SessionProvider } from "next-auth/react";

export default function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);
  return getLayout(
    <SessionProvider session={pageProps.session}>
      <ReduxProvider>
        <Component {...pageProps} />
      </ReduxProvider>
    </SessionProvider>
  );
}
