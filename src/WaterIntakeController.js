import { useState } from "react";
import WaterIntake from "./WaterIntake";

export default function WaterIntakeController() {
const [input, setInput] = useState(0)
const [manWaterIntake, setManWaterIntake] = useState(0)
const [catWaterIntake, setCatWaterIntake] = useState(0)
const [userValue, setUserValue] = useState('')
const [sizeValue, setSizeValue] = useState('')
const [bottleInputError, setBottleInputError] = useState(false)
const [glassInputError, setGlassInputError] = useState(false)
const [bowlInputError, setBowlInputError] = useState(false)

class User {
    constructor(waterIntake) {
        this.waterIntake = waterIntake;
    }
}
class Container {
    constructor(volume) {
        this.volume = volume;
    }
    waterVolume () {
        if(userValue==="man") {
            return this.volume - `${manWaterIntake}`  
        } else {
                return this.volume - `${catWaterIntake}`    
        } 
    }
}
const man = new User(manWaterIntake)
const cat = new User(catWaterIntake)
const bottle = new Container(1000)
const glass = new Container(250)
const bowl = new Container(200)

const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value)
    if(userValue === "man") {
        setManWaterIntake(value)
    } else {
        setCatWaterIntake(value)
    }
    if(sizeValue==="bottle" && value > 1000) {
        setBottleInputError(true)
        
    } else if(sizeValue==="glass" && value > 250) {
        setGlassInputError(true)
    } else if(sizeValue==="bowl" && value > 200) {
        setBowlInputError(true)
    } else {
        setBottleInputError(false)
        setGlassInputError(false)
        setBowlInputError(false)
    }
} 
const handleUserChange = (e) =>{
    const value = e.target.value;
    setUserValue(value)
    setInput(0)
    setManWaterIntake(0)
    setCatWaterIntake(0)
}
const handleSizeChange = (e) =>{
    const value = e.target.value;
    setSizeValue(value)
    setInput(0)
    setManWaterIntake(0)
    setCatWaterIntake(0)
}
console.log(man.waterIntake)
console.log(cat.waterIntake)

    return <WaterIntake onChange={handleInputChange} value={input} man={manWaterIntake} cat={catWaterIntake} bottle={bottle.waterVolume()} glass={glass.waterVolume()} bowl={bowl.waterVolume()}userChange={handleUserChange} sizeChange={handleSizeChange} user={userValue} size={sizeValue} bottleError={bottleInputError} glassError={glassInputError} bowlError={bowlInputError}/>
}