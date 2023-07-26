

export default function CourseItems({ title, img }) {
    return (
        <>
            <div className="card" style={{ width: "11rem" }}>
                <img src={img} alt="error" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>

                </div>
            </div>
        </>
    )
}