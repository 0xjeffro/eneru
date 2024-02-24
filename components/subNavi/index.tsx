import styles from "@/components/mainNavi/index.module.scss";
import {Nav, NavItem} from "@douyinfe/semi-ui";

import { IconTabs } from "@douyinfe/semi-icons-lab";
import React, {useEffect, useState} from "react";

import Content from '@/components/content'
import ActionBox from "@/components/actionBox";

const SubNavi = () => {
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

    let items = [
        {
            text: '人工智能',
            icon: <IconTabs />,
            itemKey: 'AI',
            items: [
                {text:'TAO', itemKey: 'TAO'},
                {text:'WLD', itemKey: 'WLD'},
                {text:'EnqAI', itemKey: 'EnqAI'},
            ],
        },
        {
            text: '以太坊L2',
            icon: <IconTabs />,
            itemKey: 'L2',
            items: ['Op', 'ZKS', 'ARB'],
        },
    ]

    return (
        <div className={styles.main}>
            <div>
                <div style={{height: 20, backgroundColor: "var(--semi-color-nav-bg)"}}></div>
                <Nav
                    defaultOpenKeys={["user", "union"]}
                    bodyStyle={{"height": windowHeight - 130}}
                    mode="vertical"
                    className={styles.nav}
                    items={items}
                    style={{marginTop: 0, paddingBottom: 20, borderRight: "0px"}}
                >
                    {/*Placeholder element*/}
                    <div style={{height: 30, backgroundColor: ""}}></div>

                </Nav>
                <div style={{
                    height: 52,
                    backgroundColor: "var(--semi-color-nav-bg)"
                }}>
                    <ActionBox></ActionBox>
                </div>
                <div style={{height: 26, backgroundColor: "var(--semi-color-nav-bg)"}}></div>
            </div>
            <Content></Content>
        </div>
    )
}

export default SubNavi

