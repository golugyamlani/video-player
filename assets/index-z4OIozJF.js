import{j as a,P as m}from"./player-Qcu1PBEA.js";import{a as y,r as l}from"./vendor-D88IX_79.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();var f,p=y;f=p.createRoot,p.hydrateRoot;function g(){const i=l.useRef(null),r=new URLSearchParams(window.location.search),n=r.get("video")||"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",s=r.get("adTag")||"";r.get("autoplay"),r.get("muted");const e={autoplay:!1,muted:!0,controls:["play-large","play","progress","current-time","duration","mute","volume","settings","fullscreen"],settings:["quality","speed"],loadSprite:!0,iconUrl:"https://cdn.plyr.io/3.7.8/plyr.svg",blankVideo:"https://cdn.plyr.io/static/blank.mp4",ads:{enabled:!!s,publisherId:"",tagUrl:s,autoplay:!0,adsRenderingSettings:{enablePreloading:!0,useStyledNonLinearAds:!0,useStyledLinearAds:!0,bitrate:-1,loadVideoTimeout:8e3}}},t={type:"video",sources:[{src:n,type:"video/mp4",size:576}]};return l.useEffect(()=>{const o=d=>{var c,u;d.data.type==="playVideo"?(c=i.current)==null||c.play():d.data.type==="pauseVideo"&&((u=i.current)==null||u.pause())};return window.addEventListener("message",o),()=>window.removeEventListener("message",o)},[]),a.jsx("div",{className:"w-full h-full bg-black",children:a.jsx(m,{ref:i,source:t,options:e})})}f(document.getElementById("root")).render(a.jsx(l.StrictMode,{children:a.jsx(g,{})}));
