const APP_NAME = "QRcodeGen";
const APP_DESCRIPTION = "QR Code Generator";

const Meta = () => {
  return (
    <>
      <title>QR Code Generator</title>
      <link rel="icon" href="/qr-code.svg" />

      <meta name="application-name" content={APP_NAME} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={APP_NAME} />
      <meta name="description" content={APP_DESCRIPTION} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#FFFFFF" />

      {/* add your own app-icon */}
      {/* <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link rel="shortcut icon" href="/app-icon.png" /> */}
      <link rel="manifest" href="/manifest.json" />
    </>
  );
};

export default Meta;
