import React from 'react'
import { EditOutlined } from '@ant-design/icons';

import styles from './ProfileCard.module.scss';
import TelegramIcon from 'assets/Telegram.svg';
import VkIcon from 'assets/Vk.svg';
import { userData } from 'Types';

interface Props {
  userData: userData | undefined
  setModalOpen: Function
}

const ProfileCard: React.FC<Props> = ({ setModalOpen, userData}) => {
  return (
    <article className={styles.profileCard}>
        <header className={styles.header}>
            <span>{userData.name}</span>
            <EditOutlined style={{color: "#6B6B6B", fontSize: '13px'}} onClick={() => setModalOpen(true)}/>
        </header>
        <main className={styles.main}>
          <p className={styles.description}>
           {userData.description}
          </p>
        </main>
        <footer className={styles.footer}>
          <a href={userData.telegramLink} className={styles.telegramLink}>
            <img src={TelegramIcon} />
          </a>
          <a href={userData.vkLink} className={styles.vkLink}>
            <img src={VkIcon} />
          </a>
        </footer>
    </article>
  )
}

export default ProfileCard