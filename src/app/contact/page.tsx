"use client";

import { motion } from 'framer-motion';
import React, { useState, SVGProps } from 'react';
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaDiscord, FaCopy } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const ArrowsSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" {...props}>
    <path d="m274.22 341.13-13.75-14.73c-2.31-2.43-4.55-4.94-6.78-7.45l-6.72-7.5c-2.37-2.66-4.79-5.28-7.14-7.96-2.35-2.69-4.71-5.35-7.13-7.96-3.22-3.49-6.48-6.94-9.67-10.45l-9.47-10.64c-6.39-7.03-12.46-14.32-18.63-21.55l-4.6-5.44-4.48-5.54-8.96-11.08-2.23-2.78-2.17-2.83-4.33-5.66-8.64-11.34-10.28-14.23c-1.7-2.38-3.44-4.74-5.11-7.14l-4.96-7.25c-3.29-4.84-6.65-9.64-9.86-14.53l-9.55-14.74c-12.53-19.78-24.6-39.87-35.77-60.45-1.71-3.09-3.3-6.27-4.82-9.47-1.47-3.23-2.84-6.49-4.21-9.71-2.61-6.17-2.93-10.86-1.97-14.34 1.41-5.07 6.65-3.33 11.78 4.53 1.63 2.49 3.19 5.16 4.67 7.91.74 1.37 1.47 2.76 2.17 4.15.72 1.38 1.43 2.76 2.14 4.12 12.49 25.28 27.19 49.33 43.53 72.21 2.26 3.15 4.56 6.37 6.85 9.56 2.31 3.18 4.53 6.39 6.44 9.64 6.02 10.47 13.05 20.31 20.04 30.18 3.58 4.87 7.25 9.68 10.86 14.53l5.41 7.27c1.84 2.4 3.66 4.8 5.47 7.22 2.68 3.6 5.4 7.18 8.13 10.75 2.77 3.54 5.65 7 8.48 10.5l8.55 10.45c2.91 3.44 5.82 6.87 8.72 10.3 20.66 24.55 42.31 48.29 65.07 70.96 2.27 2.26 4.47 4.53 6.58 6.81 1.06 1.14 2.09 2.29 3.1 3.44 1.03 1.13 2.04 2.25 3.03 3.39 3.93 4.53 7.45 9.15 10.43 13.9 2.73 4.37.29 6.63-4.47 3.27-3.37-2.38-6.76-4.9-10.12-7.51-3.37-2.61-6.73-5.29-9.93-8.14-5.3-4.64-10.35-9.82-15.47-14.8-.07.04-.13.07-.2.11Z" />
    <path d="M324.45 372.03c-26.14-39.44-34.93-72.84-40-119.88 35.79 80.33 79.11 131.79 141.64 193.63-65.26-33.97-116.59-42.71-189.86-49.4 26.41-17.16 56.27-22.37 87.69-24.52" />
    <path d="m247.01 399-1.69.89c-.56.31-1.1.64-1.65.96l-3.29 1.94-3.47-14.01c19.16 2.12 38.36 4.52 57.52 7.74 5.8.92 11.59 2.08 17.39 3.15l8.67 1.78c2.9.56 5.77 1.21 8.65 1.85 17.38 3.76 34.58 8.63 51.34 14.71 16.78 6.05 33.08 13.33 48.92 21.38l-8.42 11.55c-9.67-9.47-19.33-18.96-28.74-28.76-4.75-4.85-9.36-9.85-14.01-14.81-2.33-2.48-4.57-5.05-6.86-7.57-2.27-2.54-4.57-5.05-6.77-7.65l-6.62-7.7c-2.19-2.58-4.31-5.23-6.47-7.84l-3.22-3.93c-1.07-1.32-2.09-2.67-3.14-4l-6.25-8.03-6.04-8.2c-1-1.37-2.03-2.72-3-4.11l-2.91-4.19c-1.92-2.8-3.91-5.56-5.78-8.4l-5.57-8.54c-1.89-2.83-3.61-5.76-5.39-8.65l-2.66-4.35c-.89-1.45-1.78-2.9-2.6-4.39-3.36-5.91-6.79-11.78-9.91-17.82-6.48-11.95-12.23-24.25-17.87-36.59l15.14-4.08c1.2 11.21 2.68 22.34 4.76 33.26 2.08 10.93 4.78 21.65 8.32 32.06 3.57 10.5 7.51 21 12.25 31.01 1.16 2.38 2.14 4.6 2.95 6.68.87 2.05 1.59 3.94 2.15 5.71.28.88.52 1.73.74 2.55.23.81.43 1.58.59 2.32.32 1.49.51 2.85.58 4.1.2 3.64-1.33 4.69-4.11 3.19-1.39-.75-3.08-2.14-5.02-4.15-1.88-2.04-3.98-4.72-6.17-8.04-5.52-8.41-10.41-18.38-14.07-28.17a258.55 258.55 0 0 1-11.08-39.22c-2.66-13.24-4.51-26.53-6.04-39.77-.4-3.45 2.08-6.57 5.53-6.97a6.302 6.302 0 0 1 6.45 3.64l.04.1c8.23 18.08 17.5 35.64 27.94 52.45.8 1.36 1.66 2.69 2.54 4.02.87 1.33 1.74 2.67 2.62 4.01l2.62 4.03 1.3 2.02 1.35 1.98c1.8 2.65 3.56 5.3 5.27 7.95.43.66.85 1.33 1.27 1.99.44.65.87 1.3 1.3 1.95.86 1.3 1.7 2.6 2.53 3.9 10.5 16.59 22.59 32.25 35.47 47.27 12.88 15.03 26.54 29.44 40.22 43.83 5.17 5.51 10.54 10.88 15.88 16.31l.05.05a6.32 6.32 0 0 1-.08 8.94c-1.99 1.96-4.97 2.32-7.33 1.11-9.68-5-19.44-9.88-29.47-14.14-4.97-2.24-10.05-4.2-15.1-6.23-2.52-1.03-5.1-1.89-7.65-2.85-2.56-.93-5.09-1.91-7.69-2.73l-7.67-2.56c-2.57-.82-5.16-1.56-7.74-2.34l-3.87-1.16-3.91-1.05-7.82-2.07c-10.49-2.56-21.07-4.82-31.74-6.7-21.35-3.76-43-6.29-64.72-8.53h-.11c-2.56-.28-4.42-2.56-4.15-5.12a4.7 4.7 0 0 1 2.14-3.46c8.08-5.1 16.7-9.29 25.59-12.61 5.12-1.87 10.25-3.45 15.36-4.59 5.1-1.21 10.18-2.03 15.14-2.62 9.95-1.13 19.5-1.19 28.45-.43 8.24.77 7.85 4.09-1.37 5.57-13.06 2.16-26.51 4.77-39.29 8.65-2.64.76-5.24 1.66-7.87 2.49-2.59.94-5.22 1.8-7.77 2.85-2.59.96-5.09 2.12-7.62 3.23l-3.71 1.81c-1.24.59-2.41 1.3-3.62 1.95 0 .08.02.15.02.24Z" />
  </svg>
)

const CircleSvg = (props: SVGProps<SVGSVGElement>, stroke:string) => (
  <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 500 500" {...props}>
    <path d="M406.97 202.92c8.74 2.26 17.45 5.09 25.86 8.83 8.4 3.77 16.64 8.33 24.03 14.59 1.83 1.58 3.62 3.24 5.31 5.04l.64.66.67.81 1.32 1.63c.85 1.11 1.56 2.34 2.31 3.52 2.71 4.93 4.03 10.57 3.91 16.1-.11 5.55-1.78 10.98-4.6 15.72l-.52.89-.6.84-1.22 1.67a47.34 47.34 0 0 1-2.78 3.06l-1.55 1.37c-.51.46-1.04.91-1.61 1.28-1.1.77-2.33 1.65-3.24 2.14-16.55 9.96-34.6 16.71-52.6 22.03-12.03 3.59-24.16 6.47-36.26 9.13-6.05 1.33-12.1 2.56-18.15 3.85-6.06 1.25-12.14 2.41-18.2 3.62-24.31 4.66-48.81 8.57-73.49 11.38-24.68 2.8-49.54 4.48-74.48 4.59-24.93.11-49.94-1.36-74.74-4.83-1.92-.21-3.81-.58-5.72-.87l-5.71-.94c-3.81-.64-7.6-1.2-11.43-1.98-7.65-1.51-15.48-3.37-23.21-6.33-3.86-1.48-7.69-3.24-11.38-5.37-.92-.53-1.84-1.07-2.74-1.66-.91-.58-1.79-1.11-2.74-1.89l-2.8-2.19c-.87-.8-1.7-1.66-2.55-2.5-.87-.81-1.59-1.76-2.33-2.7-.72-.95-1.51-1.85-2.09-2.89-.62-1.02-1.25-2.03-1.83-3.06l-1.49-3.24c-1.78-4.4-2.81-9.07-3.02-13.8-.12-4.72.56-9.45 2-13.96 1.44-4.52 3.85-8.71 6.78-12.43l2.33-2.69c.85-.82 1.73-1.61 2.6-2.4l.66-.59c.22-.2.45-.4.63-.53l1.15-.9 2.31-1.79c1.54-1.19 3.07-2.4 4.63-3.57l4.73-3.43c6.31-4.58 12.85-8.8 19.46-12.89 3.35-1.97 6.69-3.97 10.07-5.87l5.11-2.79 2.56-1.39 2.59-1.32c13.8-7.11 28.04-13.29 42.55-18.65 14.52-5.34 29.34-9.79 44.31-13.53 29.95-7.44 60.45-11.95 90.96-14.66 18.42-1.67 37.06-2.09 55.23-2.14 17.41-.02 28.68 1.73 35.66 4.1 5.08 1.73 5.07 3.59.74 5.17s-12.98 2.86-25.19 3.64c-15.45.98-32.31 1.68-48.23 2.57-36.64 2.04-73.09 6.63-108.37 15.74-35.2 9.12-69.27 22.82-99.8 42.04-8.39 5.34-16.65 11.22-24.58 17.36-1.97 1.56-3.93 3.11-5.88 4.66-.27.2-.43.37-.61.53l-.53.5-1.07.97c-.68.67-1.25 1.45-1.9 2.14-2.36 2.98-4 6.47-4.82 10.15-.62 2.94-.71 6.01-.26 9l.2 1.12c.06.37.11.75.24 1.11.22.72.44 1.45.64 2.18l.89 2.09.22.53.29.49.57.98c.19.33.37.66.57.99l.69.9c.48.58.85 1.27 1.43 1.77l1.58 1.65 1.8 1.44c.53.49 1.33.97 2.05 1.46.72.5 1.49.93 2.24 1.39 1.52.9 3.11 1.71 4.72 2.49 6.51 3.06 13.71 5.16 21.18 6.82 3.74.82 7.56 1.58 11.43 2.19l11.57 1.94c3.86.6 7.76 1.03 11.63 1.55l5.82.75c1.94.22 3.9.37 5.85.56l11.7 1.08 11.73.71c1.96.1 3.91.27 5.87.33l5.88.18c3.92.09 7.83.3 11.75.32 7.84.01 15.68.14 23.52-.11 46.65-.9 93.38-7.66 139.52-16.38 20.58-3.99 41.19-7.93 61.04-13.68 9.92-2.89 19.66-6.26 29.04-10.34 2.32-1.07 4.68-2.07 6.94-3.23 1.14-.57 2.29-1.12 3.42-1.7l3.36-1.81c1.13-.59 2.22-1.23 3.31-1.88 1.08-.64 2.22-1.3 3.24-1.93.83-.62 1.75-1.14 2.49-1.88.38-.36.82-.65 1.15-1.05l1.05-1.15c2.65-3.2 4.33-7.26 4.61-11.45.11-2.08.03-4.21-.54-6.22-.52-2.01-1.3-3.97-2.47-5.69-.5-.92-1.25-1.67-1.88-2.51-.79-.84-1.65-1.71-2.49-2.55-1.77-1.64-3.61-3.22-5.6-4.67-3.94-2.92-8.25-5.48-12.75-7.73-9.01-4.5-18.74-7.84-28.67-10.38a707.814 707.814 0 0 0-30.56-7.04c-32.69-6.79-63.75-11.73-91.61-16.61-12.82-2.16-11.85-5.47 3.32-5.2 21.45.48 43.92 2.41 66.11 5.67 18.25 2.65 36.76 6.74 54.91 11.19.07-.06.13-.12.22-.18Z"
      stroke={ stroke }
      strokeWidth="6"
    />
  </svg>
)

const SmileySvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" {...props}>
    <path d="M340.99 80.85c8.86 4.91 17.39 10.47 25.42 16.72 8.02 6.24 15.62 13.15 22.4 20.81 13.5 15.15 24.47 32.25 33.03 50.39 9.09 19.24 15.35 39.82 18.92 60.79 1.14 7.01 1.99 14.07 2.43 21.19.39 7.12.42 14.27.02 21.43-.41 7.16-1.34 14.31-2.7 21.4-.38 1.77-.68 3.55-1.13 5.3l-1.32 5.27-1.56 5.22c-.49 1.75-1.18 3.44-1.77 5.17-.31.86-.6 1.72-.93 2.57l-1.04 2.53c-.7 1.69-1.38 3.4-2.14 4.97l-2.22 4.82c-.77 1.59-1.57 3.17-2.36 4.76l-1.19 2.38-1.26 2.34c-.85 1.56-1.67 3.13-2.54 4.67-1.79 3.06-3.54 6.15-5.47 9.14-1.85 3.04-3.89 5.95-5.87 8.91-2.09 2.88-4.14 5.8-6.37 8.58-4.37 5.63-9.03 11.06-14.03 16.19-4.98 5.13-10.2 10.05-15.74 14.61-5.54 4.56-11.32 8.82-17.33 12.75-12.02 7.86-25.01 14.25-38.51 19.17-13.53 4.87-27.59 8.18-41.84 9.97-14.25 1.74-28.67 1.93-42.95.66-35.16-3.22-69.4-15.39-98.71-35.1-14.65-9.85-28.07-21.56-39.79-34.8l-2.19-2.49-2.15-2.6c-1.45-1.72-2.81-3.52-4.17-5.32-2.72-3.59-5.21-7.35-7.61-11.16-4.72-7.67-8.73-15.77-12.04-24.12-6.66-16.7-10.24-34.44-11.38-52.17-1.06-17.75.36-35.52 3.86-52.79 7.07-34.54 22.13-67.2 43.7-95.05 13.05-16.79 29.28-31.4 47.08-42.6 8.56-5.33 16.24-8.66 22.75-10.63 3.24-1.02 6.24-1.62 8.89-2.06 2.7-.34 5.05-.56 7.17-.48 6.14.19 6.7 2.46 2.93 5.83-.47.42-1.01.86-1.62 1.32-.6.48-1.26.98-1.99 1.49s-1.52 1.04-2.38 1.59c-.84.58-1.75 1.17-2.71 1.78-3.86 2.45-8.62 5.31-14.07 8.83-13.85 8.8-27.88 20.11-39.7 32.44-13.66 14.13-25.16 30.47-34.13 48.08-9.01 17.6-15.52 36.5-19.08 55.88-1.81 9.69-2.81 19.5-3.07 29.3-.18 9.8.37 19.59 1.89 29.21 2.98 19.23 9.66 37.75 20.01 53.88 2.88 4.43 6.04 8.73 9.43 12.86 3.39 4.06 7.19 8.1 10.98 11.97 7.7 7.68 15.86 14.78 24.13 21.19 6.59 5.14 13.56 9.82 20.84 14 7.29 4.17 14.88 7.83 22.7 10.96 15.63 6.28 32.14 10.45 48.9 12.28 33.52 3.79 67.98-1.77 98.25-16.24 22.55-10.67 42.59-26.66 58.55-46.14 3.96-4.89 7.76-9.93 11.27-15.18 3.47-5.27 6.83-10.63 9.82-16.22l1.15-2.08 1.09-2.11 2.17-4.23 2.04-4.3 1.02-2.15.91-2.12c.58-1.42 1.25-2.8 1.76-4.26l1.59-4.33c.93-2.94 1.91-5.87 2.64-8.87.76-2.65 1.26-5.38 1.87-8.07l.71-4.1.35-2.05.26-2.07c.81-5.5 1.12-11.08 1.34-16.65.23-11.17-.52-22.43-2.39-33.54-.85-5.57-2.11-11.08-3.42-16.57-1.45-5.46-2.96-10.91-4.84-16.24-3.61-10.72-8.18-21.12-13.49-31.1-10.69-19.9-24.55-38.3-41.82-52.62-17.29-14.44-37.65-25.32-59.11-32.74-17.16-5.88-34.51-9.61-51.38-11.39-16.89-1.78-33.31-1.59-48.88.48-1.78.26-3.37.37-4.71.5-1.34.12-2.47.16-3.37.1-1.81-.11-2.73-.56-2.69-1.29.04-.73 1.04-1.73 3.08-2.94 1.02-.6 2.29-1.28 3.85-1.87 1.56-.6 3.37-1.32 5.47-1.89 5.94-1.74 12.08-3 18.31-4.02 6.24-.93 12.59-1.52 18.98-1.77 12.78-.42 25.73.5 38.42 2.72 20.9 3.56 41.51 11.23 60.49 21.31.1-.05.19-.1.3-.15Z" />
    <path d="M132.56 205.34c3.1-1.56 6.22-3.09 9.29-4.7 1.62-.86 3.27-1.69 4.7-2.83 3.78-3.01 7.7-6.33 12.34-9.35 4.61-3 10.15-5.76 16.6-6.82 3.95-.6 8.02-.67 11.89-.04 3.86.61 7.5 1.73 10.86 3.13 3.38 1.4 6.43 3.11 9.31 4.91 2.88 1.8 5.57 3.73 8.11 5.69 1.54 1.18 2.62 2.93 3.61 4.64.96 1.65.31 4.19-1.12 7-2.1 4.09-5.95 7.14-8.49 6.52-1.61-.37-2.85-1.38-3.87-2.51-2.34-2.6-4.95-4.79-7.78-6.4-2.82-1.61-5.86-2.64-8.8-2.86-1.64-.15-3.25.21-4.47-.68-2-1.37-4.3-1.61-6.48-1.38-2.2.25-4.39 1.04-6.88 1.67-3.74.95-7.25 3.4-11.1 5.62-7.16 4.2-14.31 8.41-21.47 12.61-2.86 1.69-6.23 2.33-10.64.89-2.03-.67-4.35-4.11-3.67-5.72.96-2.29 2.27-4.25 3.76-5.93 1.22-1.39 2.93-2.17 4.43-3.22-.05-.08-.1-.15-.15-.24ZM355.68 212.8c-2.46-2.58-5.02-5.1-7.74-7.44-1.44-1.24-2.92-2.48-4.6-3.36-4.48-2.36-9.13-4.32-13.83-6.02-4.67-1.71-9.03-2.85-12.47-2.95-1.06-.03-2.03.03-2.93.18-.39.09-.65.19-1 .25-.43.19-.84.32-1.3.49-1.9.8-4.2 2.22-6.45 3.86-4.55 3.3-9.1 7.5-13.38 11.94-1.29 1.35-3.09 2.27-4.86 3.21-1.7.89-4.24.25-7.08-1.17-4.15-2.05-7.14-5.97-6.15-8.85.62-1.81 1.92-3.27 3.37-4.43 3.34-2.68 6.48-5.5 9.59-8.46 3.12-2.96 6.16-6.08 9.62-9.33 1.01-.88 1.91-1.88 3.11-2.69.58-.41 1.17-.79 1.79-1.11.67-.31 1.37-.54 2.09-.7 1.09-.26 2.36-.48 3.56-.71l.9-.18c.31-.06.66-.09.98-.14l1.98-.26c2.5-.25 4.81-.25 7.1-.1 4.55.32 8.73 1.33 12.3 3.02 2.53 1.21 5.06 2.43 7.6 3.64 2.45 1.19 4.89 2.43 7.2 3.86 8.26 5.09 15.82 11.12 22.74 17.68 2.76 2.61 4.52 6.08 4.19 10.9-.15 2.21-3.13 5.1-4.89 4.72a27.74 27.74 0 0 1-6.82-2.53c-1.69-.88-2.94-2.35-4.42-3.51-.06.07-.12.14-.19.21ZM341.03 308.45a126.744 126.744 0 0 1-17.44 18.95c-1.74 1.49-3.5 2.95-5.27 4.39l-2.71 2.11-1.33 1.08-1.37 1.04c-4.76 3.83-10 7.13-15.49 9.98a86.572 86.572 0 0 1-17.32 6.8c-11.98 3.3-24.52 4.21-36.76 2.96-7.54-.79-14.97-2.37-22.18-4.65-7.23-2.28-14.16-5.27-20.76-8.8-13.23-7.05-25-16.29-35.38-26.63-3.16-3.11-5.66-6.88-7.99-10.58-2.2-3.58-2.04-7.16-.64-10.32 1.02-2.31 2.86-3.73 4.96-4.16 2.12-.44 4.43.15 6.61 1.8 1.37 1.06 2.66 2.28 3.91 3.55 1.22 1.3 2.41 2.64 3.52 3.99 5.1 6.24 10.99 11.76 17.41 16.5 6.47 4.65 13.46 8.53 20.84 11.15 4.07 1.52 8.41 2.45 12.09 4.37 5.93 3.04 12.48 4.74 19.07 5.59 6.61.87 13.26.8 19.85.55 4.9-.2 9.8-.97 14.51-2.31 4.72-1.31 9.25-3.15 13.7-5.22 7.86-3.83 15.27-8.91 21.78-15.15 3.32-3.05 6.34-6.46 9.26-9.95 1.39-1.81 2.86-3.56 4.14-5.46.66-.94 1.34-1.86 1.98-2.82l1.87-2.9c3.93-6.22 8.09-11.84 13.86-16.48 2.68-2.12 6.53-.6 6.07 3.11-.59 5.23-2.11 10.52-4.16 15.57-.88 2.06-1.89 4.09-3.12 6.01l-1.81 2.9c-.64.95-1.27 1.9-1.91 2.84.07.06.14.12.21.19Z" />
  </svg>
)

// A piece of tape
const TapePiece = ({ className = '', rotation = 0, ...props }: SVGProps<SVGSVGElement> & { rotation?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20" 
    className={`fill-yellow-400/60 dark:fill-yellow-600/30 stroke-yellow-500/50 dark:stroke-yellow-700/50 ${className}`} 
    style={{ transform: `rotate(${rotation}deg)` }}
    {...props}
  >
    <rect x="2" y="2" width="46" height="16" rx="1" strokeWidth="0.5" />
    {/* Jagged edges simulation */}
    <path d="M2 2 L0 3 L0 17 L2 18" strokeWidth="0.5" />
    <path d="M48 2 L50 3 L50 17 L48 18" strokeWidth="0.5" />
  </svg>
);

const ContactPage = () => {
  const [copySuccess, setCopySuccess] = useState('');
  
  const contactMethods = [
    {
      icon: FaDiscord,
      color: "indigo", // Used for icon color
      highlightColor: "hover:border-indigo-500", // For card border hover
      bgColor: "bg-indigo-50 dark:bg-indigo-900/30",
      title: "Discord",
      value: "pilot64",
      link: null,
      copyText: "pilot64",
    },
    {
      icon: IoLogoWhatsapp,
      color: "green",
      highlightColor: "hover:border-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/30",
      title: "WhatsApp",
      value: "+31 6 28 37 62 51",
      link: "https://wa.me/31628376251",
      copyText: "+31628376251",
    },
  ];

  const handleCopy = async (text: string) => {
    try {
      // For compatibility with iFrames/secure contexts
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);

      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
      setCopySuccess('Failed to copy');
      setTimeout(() => setCopySuccess(''), 2000);
    }
  };

  const highlightColor = "yellow"; // Primary highlight for scribbles etc.

  return (
    <div className={`pt-[80px] pb-[60px] px-6 min-h-screen w-full flex items-center justify-center overflow-hidden relative`}>
      {/* Background subtle pattern - dots */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='5' cy='5' r='0.5' fill='%239ca3af'/%3E%3Ccircle cx='15' cy='15' r='0.5' fill='%239ca3af'/%3E%3C/svg%3E\")",
        backgroundSize: '15px 15px', // Smaller dots
      }}></div>

      {/* Placeholder for a large background doodle - e.g., a giant question mark or lightbulb sketch */}
      {/* <SomeLargeDoodleSvg className="absolute -top-20 -left-20 w-1/2 h-1/2 text-neutral-300 dark:text-neutral-700 opacity-30 -z-10" /> */}

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full grid lg:grid-cols-2 gap-10 lg:gap-16 items-start z-10"
      >
        {/* Left Column */}
        <div className="flex flex-col text-center lg:text-left space-y-8 relative py-8 px-4">
          <motion.div 
            className="space-y-3"
            initial={{ opacity:0, x: -20 }}
            animate={{ opacity:1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className={`text-5xl sm:text-6xl font-bold text-neutral-800 dark:text-neutral-100 relative inline-block`}>
              Got Ideas?
            </h1>
            <h1 className="text-5xl sm:text-6xl font-bold text-neutral-800 dark:text-neutral-100">
              Let's <span className={`text-${highlightColor}-500`}>Build</span> Something.
            </h1>
          </motion.div>

          <motion.p 
            className="text-2xl text-neutral-600 dark:text-neutral-400 max-w-md mx-auto lg:mx-0"
            initial={{ opacity:0, x: -20 }}
            animate={{ opacity:1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Contact me!
            <SmileySvg aria-label='doodled smiley face' className={`w-8 h-8 inline-block ml-2 text-neutral-700 dark:text-neutral-300`} />
          </motion.p>
          
          {/* Email Section - "Scribbled On" */}
          <motion.div 
            className='flex flex-row sm:space-x-10 w-full justify-center items-center lg:justify-start'
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {/* Email Section */}
            <ArrowsSvg aria-label='arrows' className='fill-black sm:block hidden dark:fill-white scale-x-[-1] transition-all ease-in-out aspect-square sm:h-20 h-12 -rotate-[130deg]' />
            <div className="sm:hidden block relative w-full h-32">
              <CircleSvg stroke='white' className="block dark:hidden w-[350px] stroke-2 rotate-[5deg] h-[300px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fill-black dark:fill-white" />
              <CircleSvg stroke='black' className="hidden dark:block w-[350px] stroke-2 rotate-[5deg] h-[300px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fill-black dark:fill-white" />
              <a 
                href="mailto:oliver@nederal.com"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        text-2xl sm:text-3xl text-blue-600 dark:text-blue-400 
                        hover:text-blue-700 dark:hover:text-blue-300 
                        transition-colors underline"
              >
                { "oliver" + "@" + "nederal" + ".com" }
              </a>
            </div>
            <a
              href="mailto:oliver@nederal.com" 
              className="hidden sm:inline-block text-2xl sm:text-3xl text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors underline"
            >
              oliver@nederal.com
            </a>
            <ArrowsSvg aria-label='arrows' className='fill-black sm:block hidden dark:fill-white scale-x-[-1] transition-all ease-in-out aspect-square sm:h-20 h-12 rotate-[40deg]'/>
          </motion.div>

          <p className="text-neutral-500 dark:text-neutral-500 text-center lg:text-left">(Or use one of these ↓ )</p>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* */}
          <div className="grid sm:grid-cols-2 gap-6 p-2">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                className={`
                  relative rounded-lg p-5 sm:p-6
                  border-2 border-neutral-700 dark:border-neutral-300
                  ${method.bgColor}
                  shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.7)]
                  hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.7)]
                  transition-all duration-200 ease-out group
                  hover:-translate-y-1 hover:rotate-[-1deg]
                `}
                initial={{ opacity: 0, scale: 0.8, rotate: Math.random() * 4 - 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -5, rotate: (index % 2 === 0 ? -1.5 : 1.5), scale: 1.02 }}
              >
                {/* Decorative "tape" pieces */}
                <TapePiece className="absolute -top-2 -left-2 w-10 h-5 group-hover:opacity-0 transition-all" rotation={-25 + (index * 10)} />
                <TapePiece className="absolute -bottom-2 -right-2 w-10 h-5 group-hover:opacity-0 transition-all" rotation={160 - (index * 10)} />

                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-3">
                    <method.icon className={`text-${method.color}-500 dark:text-${method.color}-400 text-3xl`} />
                    <h3 className="font-bold text-lg text-neutral-800 dark:text-neutral-100">
                      {method.title}
                    </h3>
                  </div>
                  
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm break-all">{method.value}</p>
                  
                  <div className="flex items-center space-x-2 pt-2">
                    <motion.button
                      onClick={() => handleCopy(method.copyText)}
                      className={`flex items-center space-x-2 px-3 py-1.5 rounded-md 
                                  bg-neutral-200 dark:bg-neutral-700 
                                  hover:bg-neutral-300 dark:hover:bg-neutral-600 
                                  text-neutral-700 dark:text-neutral-200
                                  border border-neutral-400 dark:border-neutral-500
                                  hover:border-neutral-500 dark:hover:border-neutral-400
                                  transition-all duration-150 text-xs shadow-sm hover:shadow-md`}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaCopy />
                      <span>Copy</span>
                    </motion.button>
                    
                    {method.link && (
                      <motion.a
                        href={method.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-2 px-3 py-1.5 rounded-md 
                                    bg-neutral-200 dark:bg-neutral-700 
                                    hover:bg-neutral-300 dark:hover:bg-neutral-600 
                                    text-neutral-700 dark:text-neutral-200
                                    border border-neutral-400 dark:border-neutral-500
                                    hover:border-neutral-500 dark:hover:border-neutral-400
                                    transition-all duration-150 text-xs shadow-sm hover:shadow-md`}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiExternalLink />
                        <span>Open</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
             {/* */}
          </div>
          
          {/* Copy Feedback - Sticker Style */}
          {copySuccess && (
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20, rotate: 10 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className={`fixed bottom-5 right-5 flex items-center gap-2.5 
                          bg-${copySuccess === 'Copied!' ? 'green' : 'red'}-500 
                          text-white px-5 py-3 rounded-lg 
                          shadow-[3px_3px_0px_theme(colors.black)] dark:shadow-[3px_3px_0px_theme(colors.white)]
                          border-2 border-black dark:border-white
                          transform -rotate-2`} // Slight initial rotation for "sticker" feel
            >
              <IoMdCheckmarkCircleOutline className="w-6 h-6" />
              <span className="font-semibold">{copySuccess}</span>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
