import styles from "./HomeCard.module.css";
import Link from "next/link";
import Image from "next/image";
export default function HomeCard({ name, title }) {
  return (
    <div className={styles.container}>
      <Link href={`/buy-residential?category=${name}`}>
        <Image
          className={styles.img}
          src={`/images/${name}.png`}
          width={240}
          alt={title}
          height={144}
          priority={true}
        />
        <span className={styles.span}>{title}</span>
      </Link>
    </div>
  );
}
