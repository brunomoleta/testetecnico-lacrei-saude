import React from "react";
import styles from "./polaroid.module.css";

function Polaroid() {
  return (
    <div className={styles.container}>
      <div className={styles.camera}>
        <div className={styles.top}>
          <div className={styles.flash}></div>
          <div className={styles.timer}></div>
          <div className={styles.sensor}></div>
          <div className={styles.lens}>
            <div className={styles.glass}></div>
          </div>
          <div className={styles.shutter}></div>
          <div className={styles.viewfinder}>
            <div className={styles.glass}>
              <div className={styles.back}></div>
            </div>
          </div>
          <div className={styles.togglecontainer}>
            <div className={styles.toggle}></div>
          </div>
          <div className={styles.power}></div>
          <div className={styles.title}></div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.togglecontainer}>
            <div className={styles.toggle}>
              <div className={styles.handle}></div>
            </div>
          </div>
          <div className={styles.printer}></div>
          <div className={styles.labels}>
            <div className={styles.rainbow}></div>
            <div className={styles.logo}>Polaroid</div>
            <div className={styles.type}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Polaroid;
