import React, {ChangeEvent} from "react"
import style from "./DeadlineDate.module.scss"

type DeadlineDatePropsType = {
    dateValue: string
    onDateChange: (newValue: string) => void
}

export const DeadlineDate = React.memo(function (props: DeadlineDatePropsType) {

    const onDeadlineChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onDateChange(e.currentTarget.value)
    }

    return (
        <>
            <input
                type="date"
                value={props.dateValue}
                onChange={onDeadlineChangeHandler}
                className={style.taskDeadlineInput}
            />

        </>
    )
})
