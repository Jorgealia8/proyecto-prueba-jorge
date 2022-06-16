import { createAction } from "@reduxjs/toolkit";
import { CharacterModel } from "../../data/characterModel";
import { actionTypes } from "./action.types";

export const loadCharactersAction = createAction<Array<CharacterModel>>(
    actionTypes["character@load"]
);
