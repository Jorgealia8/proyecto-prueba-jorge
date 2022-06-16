import { configureStore } from "@reduxjs/toolkit";
import { CharacterModel } from "../data/characterModel";
import { characterFavReducer } from "../reducers/reducer-fav/character.fav.reducer";
import { characterReducer } from "../reducers/reducer-normal/character.reducer";

const preloadedState = {
    characters: [] as Array<CharacterModel>,
    charactersFav: [] as Array<CharacterModel>,
};

export const store = configureStore({
    reducer: {
        characters: characterReducer,
        charactersFav: characterFavReducer,
    },
    preloadedState,
});
