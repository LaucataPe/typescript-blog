import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import Post from "../../components/Post";

interface Post {
    id: number | string
    title: string
    content: string
    userId: string
}

const initialState: Post[] = [
    {id: 1, title: 'El día de la luna llena', content: 'Este es el contenido de mi post 1', userId: '0'},
    {id: 2, title: 'El día de la luna menguante', content: 'Este es el contenido de mi post 2', userId: '0'},
    {id: 3, title: 'El día de la luna', content: 'Este es el contenido de mi post 3', userId: '0'}
]

export const counterSlice = createSlice({
    name:'posts',
    initialState,
    reducers: { 
        addPost: {
            reducer(state, action: PayloadAction<Post>){
                state.unshift(action.payload)
            },
            prepare(title, content, userId){
                return{
                    payload:{
                        id: nanoid(),
                        title,
                        content,
                        userId
                    }
                }
            }
        }
    }
})

export const { addPost } = counterSlice.actions;

export const selectAllPosts  = (state: RootState) => state.posts

export default counterSlice.reducer;