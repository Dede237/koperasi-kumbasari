const NumberedList = ({
    number,
    content
}) => {
    return (
        <div className="flex gap-1">
            <p>{number}.</p>
            <p>{content}</p>
        </div>
    )
}

export default NumberedList