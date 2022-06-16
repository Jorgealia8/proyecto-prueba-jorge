import { createReducer } from "@reduxjs/toolkit";
import { CharacterModel } from "../../data/characterModel";
import * as actionFav from "./action.fav.creator";

const initialStateFav: Array<CharacterModel> = [];

export const characterFavReducer = createReducer(initialStateFav, (builder) => {
    return builder
        .addCase(actionFav.loadCharacterFavAction, (state, action) => [
            ...action.payload,
        ])
        .addCase(actionFav.addCharacterFavAction, (state, action) => [
            ...state,
            action.payload,
        ])
        .addCase(actionFav.updateCharacterFavAction, (state, action) =>
            state.map((item) =>
                item.id === action.payload.id ? action.payload : item
            )
        )
        .addCase(actionFav.deleteCharacterFavAction, (state, action) =>
            state.filter((item) => item.id !== action.payload.id)
        )

        .addDefaultCase((state) => state);
});
