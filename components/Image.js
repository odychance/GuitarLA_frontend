import Image from "next/image";
import styles from '../styles/image.module.css';

const CustomImage = ({ width, height, src }) => {
    return (
        <Image width={width} height={height} src={src} className={styles.image}/>
    )
}

export default CustomImage;
