import React from "react";
import styles from "./camera.module.css";

function Camera() {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.sardina}
        aria-label="CSS Illustration of a Sardina camera"
      >
        <div className={styles.body}>
          <div className={`${styles.wheel} ${styles.left}`}>
            <div className={styles.shutter}></div>
          </div>
          <div className={`${styles.wheel} ${styles.right}`} />
          <div className={styles.viewfindercontainer}>
            <div className={styles.viewfinder}></div>
          </div>
          <div className={`${styles.screw} ${styles.left}`}></div>
          <div className={`${styles.screw} ${styles.right}`}></div>
          <div className={styles.decoration}>
            <div className={styles.lens}>
              <div className={styles.plaque}>
                <div className={styles.plastic}>
                  <div className={styles.glass}>
                    <div className={styles.reflection}></div>
                  </div>
                </div>
                <div className={`${styles.button} ${styles.left}`}></div>
                <div className={`${styles.button} ${styles.right}`}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.flash}>
          <div className={styles.stick}>
            <div className={styles.decoration}></div>
            <div className={styles.light}>
              <div className={styles.screen}>
                <div className={styles.middle}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Camera;
