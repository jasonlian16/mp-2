import {type DogBreed} from "../type";
import DogBreedsPreview from "./DogBreedsPreview";
import styled from "styled-components";

const DogTitle = styled.div `
    margin-left: 1%;
    font-weight: bold;
    font-size: calc(2px + 200%);
`;

export default function DogBreedsContent(props: {data:DogBreed[]}){

    return (
        <div>
            <DogTitle>Dog Breed Information</DogTitle>
            <div>
                {props.data.map((char: DogBreed) => {
                    return <DogBreedsPreview dogbreed={char} key={char.id}/>;
                })}
            </div>
        </div>
    )
}