import React, {useState, KeyboardEvent} from 'react';
import styles from './Select.module.css'

type ItemType = {
    title: string,
    value: any
}

type SelectType = {
    value?: any,
    onChange: (value: any) => void
    item: ItemType[]
}

export function Select(props: SelectType) {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.item.find(i => i.value === props.value);
    const hoveredItem = props.item.find(i => i.value === hoveredElementValue);


    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown'|| e.key === 'ArrowUp')

        {
            for (let i = 0; i < props.item.length; i++) {
                if (props.item[i] === hoveredElementValue) {
                    const pretendentElement =e.key === 'ArrowDown'
                        ? props.item[i + 1]
                        :props.item[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value);
                        break
                    }
                }
            }
        }

        if (e.key === 'Enter'|| e.key === 'Escape'){
            setActive(false)
        }
    }


    return (
        <>
            <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>

                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={styles.items}>
                        {props.item.map(i =>
                            <div
                                onMouseEnter={() => setHoveredElementValue(i.value)}
                                className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')}
                                key={i.value}
                                onClick={() => onItemClick(i.value)}
                            >{i.title}
                            </div>)}
                    </div>
                }

            </div>
        </>
    )
}