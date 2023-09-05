import styles from "./RadioList.module.css";

export default function RadioList({ profileData, setProfileData }) {
  const { category } = profileData;
  const changehandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };
  return (
    <div className={styles.container}>
      <p>دسته بندی</p>
      <div className={styles.radiocontainer}>
        <div className={styles.radiodiv}>
          <label htmlFor="villa">ویلا</label>
          <input
            type="radio"
            name="category"
            id="villa"
            value="villa"
            checked={category === "villa"}
            onChange={changehandler}
          />
        </div>
        <div className={styles.radiodiv}>
          <label htmlFor="apartment">آپارتمان</label>
          <input
            type="radio"
            name="category"
            id="apartment"
            value="apartment"
            checked={category === "apartment"}
            onChange={changehandler}
          />
        </div>
        <div className={styles.radiodiv}>
          <label htmlFor="store">مغازه</label>
          <input
            type="radio"
            name="category"
            id="store"
            value="store"
            checked={category === "store"}
            onChange={changehandler}
          />
        </div>
        <div className={styles.radiodiv}>
          <label htmlFor="office">دفتر</label>
          <input
            type="radio"
            name="category"
            id="office"
            value="office"
            checked={category === "office"}
            onChange={changehandler}
          />
        </div>
      </div>
    </div>
  );
}
