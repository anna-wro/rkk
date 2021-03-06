import React from 'react';
import { appleDeviceSpecsForLaunchImages } from 'pwa-asset-generator';

export const AppleSplashScreenLinks = () => {
  return (
    <>
      <meta name="apple-mobile-web-app-capable" content="yes" />
      {appleDeviceSpecsForLaunchImages.map((spec, index) => {
        return (
          <React.Fragment key={index}>
            <link
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
          </React.Fragment>
        );
      })}
    </>
  );
};
