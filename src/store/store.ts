import { configureStore } from "@reduxjs/toolkit";
import { CharacterModel } from "../data/characterModel";
import { characterReducer } from "../reducers/reducer-normal/character.reducer";

const preloadedState = {
    characters: [] as Array<CharacterModel>,
};

export const store = configureStore({
    reducer: {
        characters: characterReducer,
    },
    preloadedState,
});
