// Updated Home component
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import styles from "@/styles/home.module.css";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [roomId, setRoomId] = useState("");
  const [showError, setShowError] = useState(false);

  const createAndJoin = () => {
    const roomId = uuidv4();
    router.push(`/${roomId}`);
  };

  const joinRoom = () => {
    if (roomId) {
      router.push(`/${roomId}`);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>Google Meet Clone</div>

      <div className={styles.card}>
        <h1 className={styles.title}>Join a meeting</h1>

        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            placeholder="Enter room ID or link"
          />
          <div className={`${styles.error} ${showError ? styles.show : ""}`}>
            Please provide a valid room ID
          </div>
        </div>

        <button className={styles.button} onClick={joinRoom}>
          Join now
        </button>

        <div className={styles.separator}>
          <span className={styles.separatorText}>OR</span>
        </div>

        <button
          className={`${styles.button} ${styles.buttonSecondary}`}
          onClick={createAndJoin}
        >
          Create a new meeting
        </button>
      </div>

      <div className={styles.footer}>
        Secure video meetings for teams and individuals
      </div>
    </div>
  );
}
