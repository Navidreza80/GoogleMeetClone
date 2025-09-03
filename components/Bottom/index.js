import cx from "classnames";
import { Mic, Video, PhoneOff, MicOff, VideoOff } from "lucide-react";
import styles from "./index.module.css";

const Bottom = (props) => {
  const { muted, playing, toggleAudio, toggleVideo, leaveRoom } = props;

  return (
    <div className={styles.bottomMenu}>
      <div className={styles.controlsContainer}>
        {muted ? (
          <div className={styles.controlWrapper}>
            <MicOff
              onClick={toggleAudio}
              className={cx(styles.icon, styles.iconMic, styles.active)}
              size={55}
            />
            <span className={styles.tooltip}>Unmute</span>
          </div>
        ) : (
          <div className={styles.controlWrapper}>
            <Mic
              onClick={toggleAudio}
              className={cx(styles.icon, styles.iconMic)}
              size={55}
            />
            <span className={styles.tooltip}>Mute</span>
          </div>
        )}

        {playing ? (
          <div className={styles.controlWrapper}>
            <Video
              onClick={toggleVideo}
              className={cx(styles.icon, styles.iconVideo)}
              size={55}
            />
            <span className={styles.tooltip}>Stop video</span>
          </div>
        ) : (
          <div className={styles.controlWrapper}>
            <VideoOff
              onClick={toggleVideo}
              className={cx(styles.icon, styles.iconVideo, styles.active)}
              size={55}
            />
            <span className={styles.tooltip}>Start video</span>
          </div>
        )}

        <div className={styles.controlWrapper}>
          <PhoneOff
            onClick={leaveRoom}
            className={cx(styles.icon, styles.iconLeave)}
            size={55}
          />
          <span className={styles.tooltip}>Leave call</span>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
