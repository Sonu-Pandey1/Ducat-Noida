/* eslint-disable react/prop-types */


export default function CourseItems({ title, img, para, btn, review, clint }) {
    let btnn = btn;
    let rev = review;
    return (
        <>
            <div className={`  card${btnn === true ? "2" : rev === true ? "3" : clint === true ? "4" : "1"} clientdata`}>
                {btn === true ? <span> Best In Industry </span> : ""}
                <img src={img} alt="error" className={` card-img-top img${btnn === true ? "2" : rev === true ? "3" : clint === true ? "4" : "1"} slidimg`} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className={`${review===true?"shadow":""}`}>{para}</p>
                    {btnn === true ? <button>View in Detailes</button> : ""}


                </div>
            </div> 
        </>
    )
}