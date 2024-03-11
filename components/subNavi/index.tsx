import styles from "@/components/mainNavi/index.module.scss";

import { IconTabs } from "@douyinfe/semi-icons-lab";
import React, {useEffect, useState} from "react";

import Content from '@/components/content'
import ActionBox from "@/components/actionBox";
import {IconKanban, IconRadio} from "@douyinfe/semi-icons";
import { Tree } from '@douyinfe/semi-ui';
import DraggableSubNav from "@/components/draggableSubNav";

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
                {text:'TAO', itemKey: 'TAO', icon: <IconRadio style={{marginLeft: 10}}/>},
                {text:'WLD', itemKey: 'WLD', icon: <IconRadio style={{marginLeft: 10}}/>},
                {text:'EnqAI', itemKey: 'EnqAI', icon: <IconRadio style={{marginLeft: 10}}/>},
            ],
        },
        {
            text: '以太坊L2',
            icon: <IconTabs />,
            itemKey: 'L2',
            items: [
                {text:'ZKS', itemKey: 'ZKS', icon: <IconRadio style={{marginLeft: 10}}/>},
                {text:'ARB', itemKey: 'ARB', icon: <IconRadio style={{marginLeft: 10}}/>},
            ],
        },
        {
            text: 'RSS 订阅',
            icon: <IconKanban style={{marginLeft: 0}}/>,
            itemKey: 'L3',
            style: {fontWeight: 'lighter'},
        }
    ]

    return (
        <div className={styles.main}>
            <div>
                <div style={{height: 20, backgroundColor: "var(--semi-color-nav-bg)"}}></div>
                <div style={{"height": windowHeight - 98, backgroundColor: "var(--semi-color-nav-bg)"}}>
                    <DraggableSubNav></DraggableSubNav>
                </div>

                <div style={{
                    height: 52,
                    backgroundColor: "var(--semi-color-nav-bg)"
                }}>
                    <ActionBox></ActionBox>
                </div>
                <div style={{height: 26, backgroundColor: "var(--semi-color-nav-bg)"}}></div>
            </div>
            <Content>
            </Content>
        </div>
    )
}

export default SubNavi

