import ReactPlayer from "react-player";
import cx from "classnames";

import styles from "@/components/Player/index.module.css";

const Player = (props) => {
  const { url, muted, playing, isActive } = props;
  return (
    <div
      className={cx(styles.playerContainer, {
        [styles.notActive]: !isActive,
        [styles.active]: isActive,
        [styles.notPlaying]: !playing
      })}
    >
      <ReactPlayer width="100%" height="100%" url={url} muted={muted} playing={playing} />
    </div>
  );
};

export default Player;
