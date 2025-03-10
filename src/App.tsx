import React, { useEffect, useRef } from 'react';
import Plyr, { PlyrInstance } from 'plyr-react';
import "plyr-react/plyr.css";

declare global {
  interface Window {
    google: any;
  }
}

function App() {
  const playerRef = useRef<PlyrInstance>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const adContainerRef = useRef<HTMLDivElement>(null);
  const adsManagerRef = useRef<any>(null);
  
  const params = new URLSearchParams(window.location.search);
  const videoUrl = params.get('video') || 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4';
  const adTagUrl = params.get('adTag') || '';

  const videoOptions = {
    clickToPlay: false,
    autoplay: false,
    muted: true,
    controls: [
      'play-large',
      'play',
      'progress',
      'current-time',
      'duration',
      'mute',
      'volume',
      'settings',
      'fullscreen'
    ],
    settings: ['quality', 'speed']
  };

  const videoSrc = {
    type: 'video',
    sources: [
      {
        src: videoUrl,
        type: 'video/mp4',
        size: 576,
      }
    ]
  };

  useEffect(() => {
    if (!adTagUrl) return;

    const initializeIMA = () => {
      const adDisplayContainer = new window.google.ima.AdDisplayContainer(
        adContainerRef.current,
        playerRef.current?.plyr?.media
      );
      
      adDisplayContainer.initialize();
      const adsLoader = new window.google.ima.AdsLoader(adDisplayContainer);

      adsLoader.addEventListener(
        window.google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
        (adsManagerLoadedEvent: any) => {
          const adsRenderingSettings = new window.google.ima.AdsRenderingSettings();
          adsRenderingSettings.enablePreloading = true;
          
          adsManagerRef.current = adsManagerLoadedEvent.getAdsManager(
            playerRef.current?.plyr?.media,
            adsRenderingSettings
          );

          // Add event listeners for ad completion
          adsManagerRef.current.addEventListener(
            window.google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
            () => {
              // Start playing the main video
              if (playerRef.current?.plyr) {
                playerRef.current.plyr.play();
              }
            }
          );

          try {
            adsManagerRef.current.init(
              containerRef.current?.offsetWidth || 640,
              containerRef.current?.offsetHeight || 360,
              window.google.ima.ViewMode.NORMAL
            );
            adsManagerRef.current.start();
          } catch (adError) {
            console.error("AdsManager error:", adError);
            if (playerRef.current?.plyr) {
              playerRef.current.plyr.play();
            }
          }
        }
      );

      // Request ads
      const adsRequest = new window.google.ima.AdsRequest();
      adsRequest.adTagUrl = adTagUrl;
      adsRequest.linearAdSlotWidth = containerRef.current?.offsetWidth || 640;
      adsRequest.linearAdSlotHeight = containerRef.current?.offsetHeight || 360;
      adsLoader.requestAds(adsRequest);
    };

    // Load IMA SDK if not already loaded
    if (window.google && window.google.ima) {
      initializeIMA();
    } else {
      const script = document.createElement('script');
      script.src = '//imasdk.googleapis.com/js/sdkloader/ima3.js';
      script.onload = initializeIMA;
      document.head.appendChild(script);
    }

    return () => {
      if (adsManagerRef.current) {
        adsManagerRef.current.destroy();
      }
    };
  }, [adTagUrl]);

  return (
    <div ref={containerRef} className="w-full h-full bg-black relative">
      <div ref={adContainerRef} className="absolute top-0 left-0 w-full h-[calc(100%-40px)] z-10"></div>
      <Plyr 
        ref={playerRef}
        source={videoSrc}
        options={videoOptions}
      />
    </div>
  );
}

export default App;