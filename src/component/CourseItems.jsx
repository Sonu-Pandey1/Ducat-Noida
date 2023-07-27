/* eslint-disable react/prop-types */


export default function CourseItems({ title, img,btn }) {
    let btnn=btn;
    return (
        <>
            <div className={`  card${btnn===true?"2":"1"}`}>
                <span> Best In Industry </span>
                <img src={img} alt="error" className={`card-img-top img${btnn===true?"2":"1"} slidimg`} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    {btnn===true?<button>View in Detailes</button>:""}
                    

                </div>
            </div>
        </>
    )
}