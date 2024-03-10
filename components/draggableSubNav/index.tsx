import React, { useState } from 'react';
import { Tree } from '@douyinfe/semi-ui';
import {
    IconRadio, IconChevronDown, IconDelete, IconClose, IconItalic
} from '@douyinfe/semi-icons';
import {IconTabs} from "@douyinfe/semi-icons-lab";
import { Dropdown, Tag, Input, Button } from '@douyinfe/semi-ui';

const DraggableTree = () => {
    const defaultTreeData = [
        {
            label: '模块',
            type: 'folder',
            key: 'module-0',
            children: [
                {
                    label: '可自由摆放的组件',
                    type: 'file',
                    key: 'free-compo-0',
                },
            ],
        },
        {
            label: '模块空',
            type: 'folder',
            key: 'module-5',
            children: [
            ],
        },
        {
            label: '模块2',
            type: 'folder',
            key: 'module-1',
            children: [
                {
                    label: '自定义组件1',
                    type: 'file',
                    key: 'cus-1'
                },
                {
                    label: '自定义组件2',
                    type: 'file',
                    key: 'cus-2'
                }
            ]
        },
        {
            label: '自定义组件3',
            type: 'file',
            key: 'cus-3'
        }
    ];
    const [treeData, setTreeData] = useState(defaultTreeData);
    const [expandedKeys, setExpandedKeys] = useState(['module-0',]);
    const onDrop = (info: { dropPosition?: any; dropToGap?: any; node?: any; dragNode?: any; }) => {
        const { dropToGap, node, dragNode } = info;
        const dropKey = node.key;
        const dragKey = dragNode.key;
        const dropPos = node.pos.split('-');
        const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

        const data = [...treeData];
        const loop = (data: any[], key: any, callback: { (item: any, ind: any, arr: any): void;}) => {
            data.forEach((item, ind, arr) => {
                if (item.key === key) return callback(item, ind, arr);
                if (item.children) return loop(item.children, key, callback);
            });
        };

        console.log(dropToGap, dropPosition, node.label, dragNode.label);

        let dragObj: any;
        function removeNode() {
            loop(data, dragKey, (item, ind, arr) => {
                arr.splice(ind, 1);
                dragObj = item;
            });
        }

        if (!dropToGap) { // drop on the content, in this case, dropPosition === 0
            let dragNodeType = dragNode.type;
            let targetNodeType = node.type;
            if (targetNodeType === 'file') { // can't drop anything on file
                return;
            }
            if (dragNodeType === 'folder' && targetNodeType === 'folder') { // can't drop folder on folder
                return;
            }
            removeNode();
            loop(data, dropKey, (item, ind, arr) => {
                item.children = item.children || [];
                item.children.push(dragObj);
            });
        } else { // no matter dropPosition is -1 or 1
            // folder can't be dropped on a file has father
            console.log('2️⃣', node.type, dragNode.type, node.pos.split('-').length > 2);
            const has_father = node.pos.split('-').length > 2;
            if (node.type === 'file' && dragNode.type === 'folder' && has_father) {
                return;
            }
            removeNode();
            let dropNodeInd: any;
            let dropNodePosArr: any;
            loop(data, dropKey, (item, ind, arr) => {
                dropNodePosArr = arr;
                dropNodeInd = ind;
            });
            if (dropPosition === -1) {
                dropNodePosArr.splice(dropNodeInd, 0, dragObj);
            } else {
                dropNodePosArr.splice(dropNodeInd + 1, 0, dragObj);
            }
        }
        setTreeData(data);
    };

    const onDragOver = (info: any) => {
        console.log(info);
    }
    const renderLabel = ({
                             className,
                             onExpand,
                             onClick,
                             data,
                             expandIcon,
                         }: any) => {
        const { label } = data;
        const isLeaf = data.type === 'file';
        const n_children = isLeaf ? 0 : data.children.length;

        for (let i = 0; i < defaultTreeData.length; i++) {
            if (defaultTreeData[i].label === label && defaultTreeData[i].type === 'folder') {
                let key = defaultTreeData[i].key;
                if (expandedKeys.includes(key)) {
                    expandIcon = <IconChevronDown style={{marginRight: '10px', transitionDuration: '0.3s', color: 'var(--semi-color-text-2)'}} rotate={-180}/>
                } else {
                    expandIcon = <IconChevronDown style={{marginRight: '10px', transitionDuration: '0.3s', color: 'var(--semi-color-text-2)'}} />
                }
                break;
            }
        }

        let rightIcon = null
        if (!isLeaf) {
            rightIcon = <span style={{marginRight: '14px', color: 'var(--semi-color-text-2)', fontWeight: 'lighter', fontSize: 'smaller'}}>{n_children}</span>
        }
        return (

            <li
                className={className}
                style={{height: '36px', borderRadius: '4px',
                    marginLeft: '10px', marginRight: '10px', marginTop: '5px', display: 'flex'}}
                role="treeitem"
                onClick={isLeaf ? onClick : (data) => {
                    onExpand(data);
                }}
            >

                {isLeaf ? <IconRadio style={{color: 'var(--semi-color-text-2)'}}/> : <IconTabs size="large"/>}
                <Dropdown
                    trigger={'contextMenu'}
                    position={'bottomRight'}
                    render={
                        <Dropdown.Menu>
                            <Dropdown.Item type="primary" icon={<IconItalic/>}>编辑</Dropdown.Item>
                            <Dropdown.Item type="danger" icon={<IconClose/>}>删除</Dropdown.Item>
                        </Dropdown.Menu>
                    }
                >
                <span style={{marginLeft: '12px', fontSize: '14px', width: '150px'}}> {label}</span>
                </Dropdown>
                {rightIcon}
                {isLeaf || n_children === 0 ? null : expandIcon}
            </li>
        );
    };

    const treeStyle = {
        width: 224,
        height: 420,
        backgroundColor: "var(--semi-color-nav-bg)",
        border: '0px'
    };


    return <Tree
        treeData={treeData}
        draggable
        onDrop={onDrop}
        onDragOver={onDragOver}
        renderFullLabel={renderLabel}
        style={treeStyle}
        expandedKeys={expandedKeys}
        onExpand={expandedKeys => {
            setExpandedKeys(expandedKeys);
        }}
        leafOnly
        directory
    />;
};

export default DraggableTree;

