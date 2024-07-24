import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import passport2 from "./assets/passport2.jpg";
import photo2 from "./assets/woman1.jpg";

interface Form {
    images: Array<string>;
    photoSrc: string;
    fields: Array<{
        title: string;
        value: string;
    }>;
    isBad: boolean;
}

interface ExampleState {
    form: Form | null;
}

const initialState: ExampleState = {
    form: {
        images: [passport2],
        photoSrc: photo2,
        fields: [
            {
                title: "Фамилия",
                value: "Халабудина",
            },
            {
                title: "Имя",
                value: "Юлия",
            },
        ],
        isBad: false,
    },
};

const operatorSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        // increment: state => {
        //     state.value += 1;
        // },
        // decrement: state => {
        //     state.value -= 1;
        // },
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload;
        // },
    },
});

// export const {increment, decrement, incrementByAmount} = operatorSlice.actions;

export default operatorSlice.reducer;
