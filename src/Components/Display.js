const Display = ({liveDisplay, formulaDisplay}) => {
    return (
        <div className="Display">
            <p>{formulaDisplay}</p>
            <h2>{liveDisplay}</h2>
        </div>
    );
};

export default Display;