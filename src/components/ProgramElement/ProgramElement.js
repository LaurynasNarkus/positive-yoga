import './ProgramElement.css';

function ProgramElement({icon, title, description}) {
    return (
        <div className="programElement">
            <div className="iconWrapper">
                <img src={icon} alt="icon" />
            </div>
            <div className="textContent">
                <h3 className="programTitle">{title}</h3>
                <p className="descriptionProgram">{description}</p>
            </div>
        </div>
    )
}

export default ProgramElement;
