import {images} from "../Constants"


const ran = (max,min) => {
    return Math.ceil(Math.random() * (max - min+1 + min));
}



export const initialState = {
    user: {
        name: "Kat Dennings",
        username: "through_my_quirky_lens",
        followers: 283,
        following: 274,
        posts: [
            {
                id: 1,
                likes: ran(10, 100000),
                comments: ran(10, 100000),
                image:`${images.photo1}`
            },
            {
                id: 2,
                likes: ran(10, 10000),
                comments: ran(10, 10000),
                image:`${images.photo2}`
            },
            {
                id: 3,
                likes: ran(10, 1000),
                comments: ran(10, 1000),
                image:`${images.photo3}`
            },
            {
                id: 4,
                likes: ran(10, 100000),
                comments: ran(10, 100000),
                image:`${images.photo4}`
            },
            {
                id: 5,
                likes: ran(10, 10000),
                comments: ran(10, 10000),
                image:`${images.photo5}`
            },
            {
                id: 6,
                likes: ran(10, 1000),
                comments: ran(10, 1000),
                image:`${images.photo6}`
            },
        ],
        bio: "World through my lens",
    },
};
