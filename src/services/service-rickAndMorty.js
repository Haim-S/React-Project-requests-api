

const DEFAULT_OPTIONS = {
    header: {'content-type': 'appliction/json'}
}

const END_POINT = "https://rickandmortyapi.com/api";

export const getAllCharacters = async (number) =>{
    try {
        const res = await fetch(`${END_POINT}/character`, DEFAULT_OPTIONS);
        const {results: character} = await res.json()
        return character.slice(0, number);
    } catch (error) {
        return Promise.reject(error);
    }
}

// export const getOneCharacter = async (userId) => {

//     try {
//         const res = await fetch(`${END_POINT}/character/${userId}`, DEFAULT_OPTIONS);
//         const {results : character} = await res.json()
//         console.log(character)
//         return character;
//     } catch (error) {
//         return Promise.reject(error);
//     }
// }
