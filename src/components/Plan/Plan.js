import checkIcon from '../../assets/images/CheckIcon.svg'
import './Plan.css'

function Plan({title, price, sold, periodicity, selected, changeIndex}) {

    return (
        <div className="planWrapper">
            {/*If a plan is selected we display orange border*/}
            <div className={selected ? "plan" : "planGrey"} onClick={changeIndex}>
                <div className="description">
                    <div className="title">
                        { title }
                        {/*If there is a discount, we display it*/}
                        { sold && <span className="sold">Save {sold}%</span>}
                    </div>
                    <div className="price"><span className="priceValue"> ${ price } </span> / month</div>
                    <div className="periodicity">
                        {sold
                            ? <div><span className="lineThroughPrice">$119.94</span><span className="orange">$59.94</span> billed {periodicity}</div>
                            : <span> Billed {periodicity}</span>
                        }
                    </div>
                </div>
                <div className="button-wrapper">
                    {/*If a plan is selected we display button it in orange*/}
                    <button className={selected ? "buttonCheck" : "buttonCheckGrey"}><img className={selected ? "imgCheckIcon" : "imgCheckIconNotChecked"} src={checkIcon} alt="icon"></img></button>
                </div>
            </div>
        </div>
    )
}

export default Plan;
