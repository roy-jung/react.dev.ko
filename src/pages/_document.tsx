/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import {Head, Html, Main, NextScript} from 'next/document';
import {siteConfig} from '../siteConfig';

const MyDocument = () => {
  return (
    <Html lang={siteConfig.languageCode}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="google-adsense-account" content="ca-pub-7718512820984355" />
      </Head>
      <body className="font-text font-medium antialiased text-lg bg-wash dark:bg-wash-dark text-secondary dark:text-secondary-dark leading-base">
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function () {
                  // Detect whether the browser is Mac to display platform specific content
                  // An example of such content can be the keyboard shortcut displayed in the search bar
                  document.documentElement.classList.add(
                      window.navigator.platform.includes('Mac')
                      ? "platform-mac" 
                      : "platform-win"
                  );
                })();
              `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
