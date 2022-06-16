import { createReducer } from "@reduxjs/toolkit";
import { CharacterModel } from "../../data/characterModel";

import * as action from "./action.creator";

const initialState: Array<CharacterModel> = [];

export const characterReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(action.loadCharactersAction, (state, action) => [
            ...action.payload,
        ])
        .addDefaultCase((state) => state);
});
