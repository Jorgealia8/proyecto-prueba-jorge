import { createAction } from "@reduxjs/toolkit";
import { CharacterModel } from "../../data/characterModel";
import { actionTypes } from "./action.fav.types";

export const loadCharacterFavAction = createAction<Array<CharacterModel>>(
    actionTypes["characterFav@load"]
);

export const addCharacterFavAction = createAction<CharacterModel>(
    actionTypes["characterFav@add"]
);

export const updateCharacterFavAction = createAction<CharacterModel>(
    actionTypes["characterFav@update"]
);

export const deleteCharacterFavAction = createAction<CharacterModel>(
    actionTypes["characterFav@delete"]
);
