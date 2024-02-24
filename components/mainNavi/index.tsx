import React, {useEffect, useState} from "react";


import {Icon, Nav} from '@douyinfe/semi-ui';
import {IconCalendar, IconCheckbox, IconIntro, IconRating, IconToast} from '@douyinfe/semi-icons-lab';
import {IconSemiLogo, IconSetting, IconSettingStroked, IconUserSetting} from '@douyinfe/semi-icons';

import Image from 'next/image'
import styles from './index.module.scss';

import SubNavi from "@/components/subNavi";

const Layout = () => {
    const [windowHeight, setHeight] = useState(0);
    useEffect(() => {
        const updateWindowSize = () => {
            setHeight(window.innerHeight);
        };

        updateWindowSize(); // as soon as we are on the client, run this handler
        const handleResize = () => setHeight(window.innerHeight);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className={styles.rootDualSideNav}>
            <Nav
                isCollapsed={true}
                bodyStyle={{height: windowHeight}}
                mode="vertical"
                header={{
                    logo: (
                        <div className={styles.navigationHeaderLogo}>
                            {/*<IconSemiLogo className={styles.semiIconsSemiLogo} />*/}
                            <Image src="/eneru-1024x1024.png" style={{background: ""}} height={36} width={36}  alt="eneru"></Image>
                        </div>
                    ),
                }}
                footer={{ collapseButton: false }}
                className={styles.navVerticalCollapse}
            >
                <Nav.Item
                    itemKey="观察列表"
                    text="观察列表"
                    icon={<IconCheckbox className={styles.iconCheckbox} />}
                    className={styles.navItem1}
                />
                <Nav.Item
                    itemKey="Tools"
                    text="工具集"
                    icon={<IconToast className={styles.iconToast} />}
                    className={styles.navItem2}
                />
                <Nav.Item
                    itemKey="setting"
                    text="设置"
                    icon={<IconSetting className={styles.iconCalendar} />}
                    className={styles.navItem3}
                />
            </Nav>
            <SubNavi />
        </div>
    );
}





export default Layout


