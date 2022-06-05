import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getPosts = createAsyncThunk(
    'posts/getPosts', 
    async() => {
        return await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
    }
    
)
const initialState = ({
    list: [],
    status: null
})


const postsSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: {
        [getPosts.pending]: (state) => {
            state.status = 'Loading...'
        },
        [getPosts.fulfilled]: (state, actions) => {
            console.log(actions)
            state.list = actions.payload
            state.status = 'sucess'
        },
        [getPosts.rejected]: (state) => {
            state.status = 'failed'
        }
    }
})

export default postsSlice.reducer