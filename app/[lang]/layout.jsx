import "../assets/scss/globals.scss";
import "../assets/scss/theme.scss";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import Providers from "@/provider/providers";
import "simplebar-react/dist/simplebar.min.css";
import TanstackProvider from "@/provider/providers.client";
import AuthProvider from "@/provider/auth.provider";
import "flatpickr/dist/themes/light.css";
import DirectionProvider from "@/provider/direction.provider";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = {
  colors: {
    brand: ['#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#089dad', '#00acc1', '#0097a7', '#00838f', '#006064'],
  },
  primaryColor: 'brand',
  primaryShade: 5, // Adjust this based on the shade of your color array you want to use
};

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children, params: { lang } }) {
  return (
    <html lang={lang}>
      <MantineProvider theme={theme}>
      <AuthProvider>
        <TanstackProvider>
          <Providers>
            <DirectionProvider lang={lang}>{children}</DirectionProvider>
          </Providers>
        </TanstackProvider>
      </AuthProvider>
      </MantineProvider>
    </html>
  );
}
