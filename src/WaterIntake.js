export default function WaterIntake(props) {
    return(
        <div className="position-relative">
            <div className="position-absolute top-0 start-50 translate-middle-x ">
            <h1 >Water Intake Calculator</h1>
            <div className="input-group input-group-lg">
                <input disabled={props.user !=='' & props.size !== '' ? false : true}className="form-control" type="number" min="0"onChange={props.onChange} value={props.value}/>
            </div>
            {props.bottleError &&
            <div className="fs-6 text-danger">Maximum water intake per bottle is 1000ml!</div>
            }
            {props.glassError &&
            <div className="fs-6 text-danger">Maximum water intake per glass is 250ml!</div>
            }
            {props.bowlError &&
            <div className="fs-6 text-danger">Maximum water intake per bowl is 200ml!</div>
            }
            <select className="form-select form-select-lg mb-3 mt-3" defaultValue="default" onChange={props.userChange}>
                <option value="default" disabled>Select User</option>
                <option value="man">Man</option>
                <option value="cat">Cat</option>
            </select>
            <select className="form-select form-select-lg mb-3" defaultValue="default" onChange={props.sizeChange}>
                <option value="default" disabled>Select Size</option>
                <option disabled={props.user==="cat" ? true : false}value="bottle">Bottle</option>
                <option disabled={props.user==="cat" ? true : false}value="glass">Glass</option>
                <option disabled={props.user==="man" ? true : false}value="bowl">Bowl</option>
            </select>
            <div className="border border-secondary d-flex justify-content-evenly">
                <div className="w-50 p-2 m-2">
                <p className="fw-bold">
                Amount of water man drank: {props.size==="bottle" & props.value>1000 ? 1000 : props.size==="glass" & props.value>250 ? 250 : props.man} ml
                </p>
                Amount of water in the bottle: {props.size==="bottle" & props.value<1000 ? props.bottle : 0} ml
                Amount of water in the glass: {props.size==="glass" & props.value<250 ? props.glass : 0} ml
                </div>
                <div className="w-50 p-2 m-2">
                <p className="fw-bold">
                Amount of water cat drank: {props.size==="bowl" & props.value>200 ? 200 :  props.cat} ml
                </p>
                Amount of water in the bowl: {props.size==="bowl" & props.value<200 ? props.bowl : 0} ml
                </div>
            </div>
            </div>
        </div>
    )
}