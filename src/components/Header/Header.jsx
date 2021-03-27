import axios from "axios";
import { useEffect, useState } from "react";
import style from "./header.module.css";

export function Header() {
  const [stars, updateStars] = useState(0);
  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.github.com/repos/salil-naik/css-art-gallery`,
    }).then((res) => {
      updateStars(res.data.stargazers_count);
    });
  });
  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.title}>
          <div className={style.square}></div>
          <div className={style.circle}></div>
          <div className={style.shape}></div>
          <div>CSS Art Gallery</div>
        </div>
        <a
          href="https://github.com/salil-naik/css-art-gallery"
          target="_blank"
          rel="noreferrer"
        >
          <div className={style.ghBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={style.svg}
            >
              {" "}
              <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z" />
            </svg>

            <p className={style.star}>
              <span style={{ fontWeight: "bold", color: "#F44E24" }}>
                {stars}
              </span>{" "}
              Stars
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
