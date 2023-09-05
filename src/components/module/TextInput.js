import { e2p } from "@/utils/replaceNumber";
import styles from "./TextInput.module.css";

export default function TextInput({
  title,
  name,
  profileData,
  setProfileData,
  textarea = false,
}) {
  const changehandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: e2p(value) });
  };
  return (
    <div className={styles.container}>
      <p>{title}</p>
      {textarea ? (
        <textarea
          className={styles.textarea}
          name={name}
          value={profileData[name]}
          onChange={changehandler}
        ></textarea>
      ) : (
        <input
          className={styles.input}
          name={name}
          value={profileData[name]}
          onChange={changehandler}
        />
      )}
    </div>
  );
}
