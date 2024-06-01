

import styles from './styles.module.scss'
import Image from 'next/image'




export default function Sidebar() {
    return (
        <div className={styles['Sidebar']}>
            <div className={styles['SidebarDiv']}>
                <Image width={32} height={32} src="/image/menu.svg" alt="" />
                <Image width={32} height={32} src="/image/dashboard.svg" alt="" />
                <Image width={32} height={32} src="/image/product.svg" alt="" />
                <Image width={32} height={32} src="/image/Favourites.svg" alt="" />
                <Image width={32} height={32} src="/image/chat.svg" alt="" />
                <Image width={32} height={32} src="/image/orderlist.svg" alt="" />
                <Image width={32} height={32} src="/image/pricing.svg" alt="" />
                <Image width={32} height={32} src="/image/calendar.svg" alt="" />
                <Image width={32} height={32} src="/image/todo.svg" alt="" />
                <Image width={32} height={32} src="/image/contact.svg" alt="" />
                <Image width={32} height={32} src="/image/invoice.svg" alt="" />
                <Image width={32} height={32} src="/image/element.svg" alt="" />
                <Image width={32} height={32} src="/image/team.svg" alt="" />
                <Image width={32} height={32} src="/image/settings.svg" alt="" />
            </div>
            <div className={styles['logout']}>
                <Image width={32} height={32} src="/image/Logout.svg" alt="" />
            </div>
        </div>
    )
}