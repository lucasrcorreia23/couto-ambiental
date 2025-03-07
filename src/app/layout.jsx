import '@styles/scss/style.scss';
import "./globals.css";

import "@styles/css/plugins/bootstrap-grid.css";
import "@styles/css/plugins/swiper.min.css";
import "@styles/css/plugins/magnific-popup.css";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

import ScrollbarProgress from "@layouts/scrollbar-progress/Index";

import AppData from "@data/app.json";

export const metadata = {
  title: {
		default: AppData.settings.siteName,
		template: "%s | " + AppData.settings.siteName,
	},
  description: AppData.settings.siteDescription,
}

const Layouts = ({
  children
}) => {
  return (
    <html lang="pt-br">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      </head>
      <body>
        <div className="mil-wrapper">
          {children}

          <ScrollbarProgress />
        </div>
      </body>
    </html>
  );
};
export default Layouts;
