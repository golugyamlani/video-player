import{j as l,P as j}from"./player-Qcu1PBEA.js";import{a as _,r as a}from"./vendor-D88IX_79.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();var x,M=_;x=M.createRoot,M.hydrateRoot;function D(){const n=a.useRef(null),t=a.useRef(null),c=a.useRef(null),o=a.useRef(null),e=new URLSearchParams(window.location.search),r=e.get("video")||"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",s=e.get("adTag")||"",O={clickToPlay:!1,autoplay:!1,muted:!0,controls:["play-large","play","progress","current-time","duration","mute","volume","settings","fullscreen"],settings:["quality","speed"]},P={type:"video",sources:[{src:r,type:"video/mp4",size:576}]};return a.useEffect(()=>{if(!s)return;const f=()=>{var g,m,y,w;const i=new window.google.ima.AdDisplayContainer(c.current,(m=(g=n.current)==null?void 0:g.plyr)==null?void 0:m.media);i.initialize();const p=new window.google.ima.AdsLoader(i);p.addEventListener(window.google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,S=>{var A,R,v,E,L;const h=new window.google.ima.AdsRenderingSettings;h.enablePreloading=!0,o.current=S.getAdsManager((R=(A=n.current)==null?void 0:A.plyr)==null?void 0:R.media,h),o.current.addEventListener(window.google.ima.AdEvent.Type.ALL_ADS_COMPLETED,()=>{var u;(u=n.current)!=null&&u.plyr&&n.current.plyr.play()});try{o.current.init(((v=t.current)==null?void 0:v.offsetWidth)||640,((E=t.current)==null?void 0:E.offsetHeight)||360,window.google.ima.ViewMode.NORMAL),o.current.start()}catch(u){console.error("AdsManager error:",u),(L=n.current)!=null&&L.plyr&&n.current.plyr.play()}});const d=new window.google.ima.AdsRequest;d.adTagUrl=s,d.linearAdSlotWidth=((y=t.current)==null?void 0:y.offsetWidth)||640,d.linearAdSlotHeight=((w=t.current)==null?void 0:w.offsetHeight)||360,p.requestAds(d)};if(window.google&&window.google.ima)f();else{const i=document.createElement("script");i.src="//imasdk.googleapis.com/js/sdkloader/ima3.js",i.onload=f,document.head.appendChild(i)}return()=>{o.current&&o.current.destroy()}},[s]),l.jsxs("div",{ref:t,className:"w-full h-full bg-black relative",children:[l.jsx("div",{ref:c,className:"absolute top-0 left-0 w-full h-[calc(100%-40px)] z-10"}),l.jsx(j,{ref:n,source:P,options:O})]})}x(document.getElementById("root")).render(l.jsx(a.StrictMode,{children:l.jsx(D,{})}));
