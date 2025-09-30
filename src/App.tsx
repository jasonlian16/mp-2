import DogBreedsContent from './components/DogBreedContent';
import { useEffect, useState } from 'react';
import {type DogBreed} from "./type";

export default function App() {
  const [dogbreeds, setDogBreeds] = useState<DogBreed[]>([]);

    useEffect(() => {
        async function getDogBreeds() {
            const res = await fetch(
                `https://dogapi.dog/api/v2/breeds?`,
            );
            const jsonRes = await res.json();
            setDogBreeds(jsonRes.data);
        }
        getDogBreeds().then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, [dogbreeds.length]);
    
  return (<DogBreedsContent data={dogbreeds}/>);
}


