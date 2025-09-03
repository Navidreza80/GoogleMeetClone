import { CopyToClipboard } from "react-copy-to-clipboard";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import styles from "./index.module.css";

const CopySection = (props) => {
  const { roomId } = props;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.copyContainer}>
      <div className={styles.roomIdWrapper}>
        <span className={styles.roomLabel}>Room ID:</span>
        <span className={styles.roomId}>{roomId}</span>
        <CopyToClipboard text={roomId} onCopy={handleCopy}>
          <button className={styles.copyButton}>
            {copied ? (
              <Check size={14} className={styles.copyIcon} />
            ) : (
              <Copy size={14} className={styles.copyIcon} />
            )}
            <span className={styles.copyText}>
              {copied ? "Copied!" : "Copy"}
            </span>
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default CopySection;
