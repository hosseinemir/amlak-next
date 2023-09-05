import styles from "./CustomDatePicker.module.css";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

export default function CustomDatePicker({ profileData, setProfileData }) {
  const presentdate = Date.now();
  const persianperesentdate = new Date(presentdate);
  const changehandler = (e) => {
    const date = new Date(e);
    setProfileData({ ...profileData, constructionDate: date });
  };
  return (
    <div className={styles.container}>
      <p>تاریخ ساخت بنا</p>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        value={profileData.constructionDate}
        maxDate={persianperesentdate}
        onChange={changehandler}
      />
    </div>
  );
}
