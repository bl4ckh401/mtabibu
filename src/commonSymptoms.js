import Symptoms from './symptoms';
import Sickness from './sickness';

function CommonSymptoms(){
        return(
        <div className="mapedcomponents">
            {Symptoms.map((disease) => <Sickness key={disease.id} name={disease.name} signs={disease.signs}/>)}
        </div>
        )
    }

export default CommonSymptoms;