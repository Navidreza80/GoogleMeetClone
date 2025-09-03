import cx from "classnames";
import { Mic, Video, PhoneOff, MicOff, VideoOff } from "lucide-react";
import styles from "./index.module.css";

const Bottom = (props) => {
  const { muted, playing, toggleAudio, toggleVideo } = props;

  return (
    <div className={styles.bottomMenu}>
      {muted ? (
        <MicOff
          onClick={toggleAudio}
          className={cx(styles.icon, styles.active)}
          size={55}
        />
      ) : (
        <Mic className={styles.icon} onClick={toggleAudio} size={55} />
      )}
      {playing ? (
        <Video className={styles.icon} onClick={toggleVideo} size={55} />
      ) : (
        <VideoOff
          className={cx(styles.icon, styles.active)}
          onClick={toggleVideo}
          size={55}
        />
      )}
      <PhoneOff className={styles.icon} size={55} />
    </div>
  );
};

export default Bottom;
