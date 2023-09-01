import React, { useRef, useState } from "react";
import "./selectStyles.scss";
import useOutSideAlerter from "../../hooks/useOutSideAlerter";

const Select = ({ list, onChange, value }) => {
    const ref = useRef();
    const [open, setOpen] = useState(false);
    useOutSideAlerter(ref, () => setOpen(false));


    return (
        <div className={`select-container`}>
            <div ref={ref} className={`selectBlock ${open ? "open" : ""}`}>
                <div className={`select-item`} onClick={() => setOpen(!open)}>
                    <span className={'select-value'}>{value.label}</span>
                    <img src={<svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                            fill="#2C2C2C"
                        />
                    </svg>} alt="" className={open ? "open" : ""} />
                </div>
                {open &&
                    list.length &&
                    list
                        .filter((el) => el.value !== value.value)
                        .map(({ value, label }) => (
                            <div
                                key={value}
                                onClick={() => {
                                    onChange({
                                        target: {
                                            value: value,
                                            label: label,
                                        },
                                    });
                                    setOpen(false);
                                }}
                                className="custom-option"
                            >
                                {label}
                            </div>
                        ))}
            </div>
        </div>
    );
};

export {Select};