export type AttributesProp = {
    name: string;
    description: string;
    life:{
        min: number;
        max: number;
    };
}

export type DogBreed = {
    id: string;
    type: string;
    attributes: AttributesProp;
}

