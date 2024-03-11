
import {Button, SideSheet, SplitButtonGroup} from '@douyinfe/semi-ui';
import { Dropdown } from '@douyinfe/semi-ui';

import React, {useState} from 'react';
import {
    IconAlignBottom,
    IconExport,
    IconFolder, IconImport, IconKanban,
    IconList, IconMaximize, IconPlus,
} from "@douyinfe/semi-icons";
import {IconProgress} from "@douyinfe/semi-icons-lab";

const ActionBox = () => {

    let isLoggedIn = true;
    if (!isLoggedIn) {
        return (
            <div>
                <Button block theme='solid' type='secondary'
                        style={{width: '90%', marginLeft: '5%', marginTop: '6px', height: '35px'}}
                >Connect Wallet</Button>
            </div>
        )
    } else {
        return (
            <div>
                <Dropdown
                    trigger={'hover'}
                    showTick
                    position={'top'}
                    render={
                        <Dropdown.Menu style={{width: 158}}>
                            <Dropdown.Item type="secondary" icon={<IconFolder />} style={{fontWeight: "bolder", color: "var(--semi-color-text-0)"}}>分类器</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item type="primary" icon={<IconKanban />} style={{fontWeight: "bolder", color: "var(--semi-color-text-0)"}}>项目</Dropdown.Item>
                        </Dropdown.Menu>
                    }
                >
                    <Button icon={<IconPlus />} theme='solid' type='secondary' size='large' style={{ marginLeft: '5%', width: '70%' }}>创建</Button>
                </Dropdown>

                <Button icon={<IconAlignBottom rotate={-90} style={{color: "var(--semi-color-text-0)"}}/>} size='large' aria-label="Logout" style={{ marginLeft: '5%', width: '15%' }}/>
            </div>
        )
    }
}

export default ActionBox
