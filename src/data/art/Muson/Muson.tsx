import React from "react";
import styles from "./muson.module.css";

function Muson() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.muson} aria-label="Muson Synth Illustration">
        <div className={styles.topbar}>
          <div className={styles.speakerbar}>
            <div className={styles.speakers} />
          </div>
          <div className={styles.musonframe}>
            <div className={styles.rainbow} />
          </div>
        </div>
        <div className={styles.rangecontainer} aria-hidden="true">
          <div className={styles.rangeplate}>
            <div className={styles.left}>
              <ul className={styles.ranges}>
                <li>1–4</li>
                <li>1–6</li>
                <li>1–8</li>
                <li>1–10</li>
              </ul>
              <p>Range</p>
              <div className={styles.sliderwrapper}>
                <div className={styles.slider} />
              </div>
            </div>
            <div className={styles.center}>
              <p>Volume</p>
              <ul>
                <li>Lo</li>
                <li>Med</li>
                <li>High</li>
              </ul>
              <div className={styles.switchwrapper}>
                <div className={styles.switchbutton} />
              </div>
            </div>
            <div className={styles.right}>
              <p>Mode</p>
              <ul className={styles.type}>
                <li>Off</li>
                <li>Organ</li>
                <li className={styles.flexli}>
                  <span style={{ height: "2.5ex" }}>Organ</span>
                  <span>& Synth</span>
                </li>
              </ul>
              <div className={styles.sliderwrapper}>
                <div className={styles.slider} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttoncontainer}>
          <div className={styles.button}>
            <div className={styles.center} />
          </div>
          <div className={styles.button}>
            <div className={styles.center} />
          </div>
          <div className={styles.button}>
            <div className={styles.center} />
          </div>
          <div className={styles.button}>
            <div className={styles.center} />
          </div>
          <div className={styles.button}>
            <div className={styles.center} />
          </div>
          <div className={styles.button}>
            <div className={styles.center} />
          </div>
          <div className={styles.button}>
            <div className={styles.center} />
          </div>
          <div className={styles.button}>
            <div className={styles.center} />
          </div>
          <div className={styles.button}>
            <div className={styles.center} />
          </div>
          <div className={styles.button}>
            <div className={styles.center} />
          </div>
        </div>
        <div className={styles.lettercontainer} aria-hidden="true">
          <div>
            <p>C</p>
          </div>
          <div>
            <p>D</p>
          </div>
          <div>
            <p>E</p>
          </div>
          <div>
            <p>F</p>
          </div>
          <div>
            <p>G</p>
          </div>
          <div>
            <p>A</p>
          </div>
          <div>
            <p>B</p>
          </div>
          <div>
            <p>C</p>
          </div>
          <div>
            <p>D</p>
          </div>
          <div>
            <p>E</p>
          </div>
        </div>
        <div className={styles.keycontainer}>
          <div style={{ zIndex: "12" }} />
          <div style={{ zIndex: "11" }} />
          <div style={{ zIndex: "10" }} />
          <div style={{ zIndex: "9" }} />
          <div style={{ zIndex: "8" }} />
          <div style={{ zIndex: "7" }} />
          <div style={{ zIndex: "6" }} />
          <div style={{ zIndex: "5" }} />
          <div style={{ zIndex: "4" }} />
          <div style={{ zIndex: "3" }} />
        </div>
        <div className={styles.speedcontainer} aria-hidden="true">
          <p className={styles.snip}>Fast</p>
          <div className={styles.speedslider} />
          <div className={styles.speedbuttoncontainer}>
            <div className={styles.speedbutton} />
          </div>
          <p className={styles.snip}>Slow</p>
        </div>
        <div className={styles.volcontainer} aria-hidden="true">
          <p className={styles.snip}>High</p>
          <div className={styles.volslider} />
          <div className={styles.volbuttoncontainer}>
            <div className={styles.volbutton} />
          </div>
          <p className={styles.snip}>Low</p>
        </div>
      </div>
    </div>
  );
}

export default Muson;
