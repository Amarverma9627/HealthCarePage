function HumanBody() {
    return (
        <div className="main-wrapper">
            <h3>DashBoard</h3>
            <div className="human-body">
                <div>
                    <img src="assets/body.webp" alt="Human Body" className="body-img" />
                    <div className="tags">
                        <span className="tag aqua">Healthy Heart</span>
                        <span className="tag blue">Healthy Leg</span>
                    </div>
                </div>
                <div className="stats">

                    <div className="stat-item">
                        <span>🫁 </span><span>Lungs</span><p>26-oct-2021</p>
                        <div className="progress"><span className="inner-box"></span></div>
                    </div>
                    <div className="stat-item"><span>🦷 </span><span>Teeth</span><p>26-oct-2021</p>
                        <div className="progress"><span className="inner-box"></span></div>
                    </div>
                    <div className="stat-item"><span>🦴 </span><span>Bone</span><p>26-oct-2021</p>
                        <div className="progress"><span className="inner-box"></span></div>
                    </div>
                </div>

            </div>
            <div className="chart">
                <img src="assets/chart.png" alt="" />
            </div>
        </div>
    );
}
export default HumanBody;