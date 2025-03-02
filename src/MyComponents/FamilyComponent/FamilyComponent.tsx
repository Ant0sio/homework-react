import {simpsons} from "../../data_Simpson/data_Simpson.ts";
import CharacterComponent from "../CharacterComponent/CharacterComponent.tsx";

const FamilyComponent = () => {
    return (
        <div>
            {
                simpsons.map((simpson)=>(<CharacterComponent hero={simpson}>
                    {simpson.info}
                </CharacterComponent>))
            }
        </div>
    );
};

export default FamilyComponent;