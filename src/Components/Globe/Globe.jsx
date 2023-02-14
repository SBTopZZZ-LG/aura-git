import { useEffect } from "react";
import Globe from "globe.gl";
import earth from "./map.jpg";
// import data from "../../Dataset/global_pop_cleaned.json";

// data.features = data.features.map((f) => {
//   return {
//     // ...f,
//     properties: {
//       NAME: f.properties.NAME,
//       CONTINENT: f.properties.CONTINENT,
//     },
//     geometry: {
//       ...f.geometry,
//     },
//   };
// });
// console.log(data);

const GlobeComponent = () => {
  useEffect(() => {
    const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

    // Gen random data
    const N = 1;
    const gData = [...Array(N).keys()].map(() => ({
      lat: (Math.random() - 0.5) * 180,
      lng: (Math.random() - 0.5) * 360,
      size: 7 + Math.random() * 30,
      color: ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
    }));
    console.log(gData);
    // eslint-disable-next-line no-unused-vars
    const world = Globe()
      .backgroundColor("white")
      .atmosphereColor("black")
      .globeImageUrl(earth)
      .htmlElementsData(gData)
      .htmlElement((d) => {
        const el = document.createElement("div");
        el.innerHTML = markerSvg;
        el.style.color = d.color;
        el.style.width = `${d.size}px`;

        el.style["pointer-events"] = "auto";
        el.style.cursor = "pointer";
        // el.onclick = () => console.info(d);
        return el;
      })(document.getElementById("globeViz"));
  }, []);
  return (
    <div className="">
      <div id="globeViz" className="w-[100vw]"></div>
    </div>
  );
};

export default GlobeComponent;
