import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

import {rootReducer} from "./reducer";

// import {EndScreen} from "./EndScreen";

// export const useForm = create((set, get) => ({
//     form: {
//         images: [passport2],
//         photoSrc: photo2,
//         fields: [
//             {
//                 title: "Фамилия",
//                 value: "Халабудина",
//             },
//             {
//                 title: "Имя",
//                 value: "Юлия",
//             },
//         ],
//         isBad: false,
//     },
// }));

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
