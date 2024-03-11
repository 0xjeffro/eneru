import styles from "@/components/mainNavi/index.module.scss";
import React, {useEffect, useState} from "react";
import {TabPane, Tabs} from "@douyinfe/semi-ui";

import { Col, Row } from '@douyinfe/semi-ui';


const Content = () => {
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
        <div className="grid" style={{width: '100%'}}>
            <Row style={{marginTop: 38, marginLeft: 30}}>
                <Col span={24}>
                    <div style={{
                        fontSize: 28, fontWeight: "bolder",
                        fontFamily: "\"Inter\", -apple-system, BlinkMacSystemFont, " +
                            "\"Segoe UI\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", " +
                            "\"Helvetica Neue\", Helvetica, Arial, sans-serif"}}>
                        Reporting
                    </div>
                </Col>
            </Row>
            <Row style={{marginTop: 20, marginLeft: 30, width: '100%',
                fontFamily: "\"Inter\", -apple-system, BlinkMacSystemFont, " +
                    "\"Segoe UI\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", " +
                    "\"Helvetica Neue\", Helvetica, Arial, sans-serif"}}>
                <Col span={23}>
                    <Tabs
                        tabPosition="top"
                        defaultActiveKey="1"
                        size="small"
                        className={styles.tabs}
                    >
                        <TabPane tab="Overview" itemKey="1"/>
                        <TabPane tab="Twitter" itemKey="2"/>
                        <TabPane tab="Youtube" itemKey="3"/>
                        <TabPane tab="Websites" itemKey="4"/>
                        <TabPane tab="Settings" itemKey="5"/>
                    </Tabs>
                </Col>
            </Row>
            <div style={{marginLeft: 30, width: '95.8%', height: windowHeight - 142, overflow: 'auto', background: 'var(--semi-color-fill-0)', borderRadius: '6px'}}>

            </div>
        </div>
    )
}


export default Content
