import { appleDeviceSpecsForLaunchImages } from 'pwa-asset-generator';

export const AppleSplashScreenLinks = () => {
  return (
    <>
      <meta name="apple-mobile-web-app-capable" content="yes" />
      {appleDeviceSpecsForLaunchImages.map(spec => {
        return (
          <>
            <link
              key={`apple-splash-portrait-${spec.portrait.width}-${spec.portrait.height}`}
              rel="apple-touch-startup-image"
              href={`/pwa/apple-splash-${spec.portrait.width}-${spec.portrait.height}.jpg`}
              media={`(device-width: ${
                spec.portrait.width / spec.scaleFactor
              }px) and (device-height: ${
                spec.portrait.height / spec.scaleFactor
              }px) and (-webkit-device-pixel-ratio: ${
                spec.scaleFactor
              }) and (orientation: portrait)`}
            />
            <link
              key={`apple-splash-dark-portrait-${spec.portrait.width}-${spec.portrait.height}`}
              rel="apple-touch-startup-image"
              href={`/pwa/apple-splash-dark-${spec.portrait.width}-${spec.portrait.height}.jpg`}
              media={`(prefers-color-scheme: dark) and (device-width: ${
                spec.portrait.width / spec.scaleFactor
              }px) and (device-height: ${
                spec.portrait.height / spec.scaleFactor
              }px) and (-webkit-device-pixel-ratio: ${
                spec.scaleFactor
              }) and (orientation: portrait)`}
            />
            <link
              key={`apple-splash-landscape-${spec.portrait.width}-${spec.portrait.height}`}
              rel="apple-touch-startup-image"
              href={`/pwa/apple-splash-${spec.portrait.width}-${spec.portrait.height}.jpg`}
              media={`(device-width: ${
                spec.portrait.height / spec.scaleFactor
              }px) and (device-height: ${
                spec.portrait.width / spec.scaleFactor
              }px) and (-webkit-device-pixel-ratio: ${
                spec.scaleFactor
              }) and (orientation: landscape)`}
            />
            <link
              key={`apple-splash-dark-landscape-${spec.portrait.width}-${spec.portrait.height}`}
              rel="apple-touch-startup-image"
              href={`/pwa/apple-splash-dark-${spec.portrait.width}-${spec.portrait.height}.jpg`}
              media={`(prefers-color-scheme: dark) and (device-width: ${
                spec.portrait.height / spec.scaleFactor
              }px) and (device-height: ${
                spec.portrait.width / spec.scaleFactor
              }px) and (-webkit-device-pixel-ratio: ${
                spec.scaleFactor
              }) and (orientation: landscape)`}
            />
          </>
        );
      })}
    </>
  );
};
