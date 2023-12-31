"use client";
import React, { useRef, useEffect, useState, useContext } from "react";
import Contributors from "./Contributors";
import LogoDetail from "./LogoDetai";

import { PanelContext, GOD } from "@/constants";
import "animate.css";

export default function Overlay({ ...props }: {}) {
  const planets = 316;
  const { sponsor } = useContext(PanelContext);

  const [active, setActive] = useState(sponsor !== GOD);
  const [activeContributors, setActiveContributors] = useState(false);
  const ref = useRef(null!);

  useEffect(() => {
    setActive(sponsor !== GOD);
    setActiveContributors(false);
  }, [sponsor]);

  const handleClickOutside = (e: any) => {
    //@ts-ignore
    if (ref.current && !ref.current.contains(e.target)) {
      setActive(false);
      setActiveContributors(false);
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="select-none">
      <div
        className="overlay upperLeft transition-all duration-500 ease-in-out animate__animated animate__zoomIn animate__faster"
        style={{
          color: sponsor.color ?? "#cd5c5c",
        }}
      >
        Round
        <br />
        One
      </div>
      <div
        className="overlay upperRight transition-all duration-500 ease-in-out animate__animated animate__zoomIn animate__faster z-50"
        style={{
          color: sponsor.color ?? "#cd5c5c",
        }}
      >
        <a href="https://twitter.com/DFArchon" target="_blank">
          Twitter
        </a>
        <br />
        <a href="https://github.com/dfarchon" target="_blank">
          Github
        </a>
        <br />
        <a href="#" onClick={() => setActiveContributors(!activeContributors)}>
          Contributors
        </a>
        <Contributors active={activeContributors} />
      </div>
      <div
        className="overlay lowerLeft transition-all duration-500 ease-in-out animate__animated animate__zoomIn animate__faster"
        style={{
          color: sponsor.color ?? "#cd5c5c",
        }}
      >
        <h1>{planets}</h1>
        <h2>Planets Conquered</h2>
      </div>
      <div
        className="overlay lowerRight transition-all duration-500 ease-in-out  z-30"
        ref={ref}
      >
        <LogoDetail
          active={active}
          setActive={(active: boolean) => {
            setActive(active);
            active && setActiveContributors(false);
          }}
        />
      </div>
    </div>
  );
}
