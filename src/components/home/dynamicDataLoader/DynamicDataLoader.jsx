import styles from './DynamicDataLoader.module.css';
import { SlLocationPin } from 'react-icons/sl';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import { IoCalendarOutline } from 'react-icons/io5';
import { useFetch } from '../../../hooks/useFatch';

const DynamicDataLoader = ({ title, newUrl }) => {

    const url = newUrl;

    const { data } = useFetch(url);

    return (
        <div className={styles.academicEducation}>
            <h3 className={styles.title}>
                {title}
            </h3>

            <ul className={styles.container}>
                {data && data.map((academic) => (
                    <li className={styles.itens} key={academic.id}>
                        <div className={styles.header}>
                            <h2 className={styles.subTitle}>
                                {academic.name}
                            </h2>
                            <p className={styles.modality}>
                                {academic.modality}
                            </p>
                        </div>
                        <div className={styles.body}>
                            <div className={styles.details}>
                                <p className={styles.institution}>
                                    <SlLocationPin className={styles.miniIcons} />
                                    {academic.institution}
                                </p>
                                <p className={styles.city}>
                                    <HiOutlineBuildingOffice className={styles.miniIcons} />
                                    {academic.city}
                                </p>
                            </div>
                            <div className={styles.boxDate}>
                                <p className={styles.date}>
                                    <IoCalendarOutline className={styles.miniIcons} />
                                    <span>
                                        {academic.startDate}
                                    </span>
                                    -
                                    <span>
                                        {academic.endDate}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DynamicDataLoader;