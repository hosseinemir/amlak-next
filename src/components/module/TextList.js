import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

import styles from "./TextList.module.css";

export default function TextList({ title, profileData, setProfileData, type }) {
  const clickhandler = () => {
    setProfileData({ ...profileData, [type]: [...profileData[type], ""] });
  };
  const channgehandler = (e, index) => {
    const { value } = e.target;
    const list = [...profileData[type]];
    list[index] = value;
    setProfileData({ ...profileData, [type]: list });
  };
  const deletehandler =(index)=>{
    const list = [...profileData[type]]
    list.splice(index,1)
    setProfileData({...profileData,[type]:list})
  }
  return (
    <div className={styles.container}>
      <p>{title}</p>
      {profileData[type].map((i, index) => (
        <div className={styles.card} key={index}>
          <input
            type="text"
            onChange={(e) => channgehandler(e, index)}
            value={i}
          />
          <button onClick={()=>deletehandler(index)}>
            <AiOutlineDelete />
          </button>
        </div>
      ))}
      <button className={styles.btn} onClick={clickhandler}>
        افزودن موارد جدید
        <MdOutlineLibraryAdd/>
      </button>
    </div>
  );
}
