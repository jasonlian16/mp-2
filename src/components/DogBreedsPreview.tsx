import styled from "styled-components";
import { type DogBreed} from "../type";

const DogFactPreviewDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1%;
    padding: 2%;
    max-width:50%;
    background-color: #E6D8C3;

    h3 {
        font-size: calc(2px + 24px);
        text-align: center;
    }
    
    .trait{
        display: flex;
        justify-content: space-evenly;
    }

    .life{
        background-color: #F7F4EA;
        padding: 2%;
        border-radius: 50px;
    }

    .male_weight{
        background-color: #A8BBA3;
        padding: 2%;
        border-radius: 50px;
    }

    .female_weight{
        background-color: #ecc6b6ff;
        padding: 2%;
        border-radius: 50px;
    }

    p{
        font-size: calc(2px + 90%);
    }

    
`;

export default function DogBreedsPreview({dogbreed}: {dogbreed: DogBreed}){
    return (
        <DogFactPreviewDiv>
            <h3>{dogbreed.attributes.name}</h3>
            <p>{dogbreed.attributes.description}</p>
            <div className="trait">
                <p className="life">Minimum Life Expectancy: {dogbreed.attributes.life.min}</p>
                <p className="life">Maximum Life Expectancy: {dogbreed.attributes.life.max}</p>
            </div>
            <div className="trait">
                <p className="male_weight">Minimum Male Weight: {dogbreed.attributes.male_weight.min} lbs</p>
                <p className="male_weight">Maximum Male Weight: {dogbreed.attributes.male_weight.max} lbs</p>
            </div>
            <div className="trait">
                <p className="female_weight">Minimum Female Weight: {dogbreed.attributes.female_weight.min} lbs</p>
                <p className="female_weight">Maximum Female Weight: {dogbreed.attributes.female_weight.max} lbs</p>
            </div>

            
        </DogFactPreviewDiv>
    )
}


