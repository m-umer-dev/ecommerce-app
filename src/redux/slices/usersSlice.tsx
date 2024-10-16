import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface usersData {
    id: number;
    name: string;
    email: string;
    subject: string;
    message: string;
  }

  export interface UserState {
    allUsers: usersData[];
    
  }
const initialState: UserState = {

    allUsers:[
        {
        id: 1,
        name: "Umer",
        email: 'Umer@example.com',
        subject: 'Purchase new Shirt',
        message: 'my message will be here',
    },
    {
        id: 2,
        name: "Areeb",
        email: 'areeb@example.com',
        subject: 'Purchase new Shirt',
        message: 'my message will be here',
    }
]
}
export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{

        
        getUserData: (state, action: PayloadAction<usersData[]>) => {
            state.allUsers = action.payload;
          },
    },
});

export const {  getUserData } = userSlice.actions

export default userSlice.reducer