import { configureStore } from '@reduxjs/toolkit'
import incdecReducer from './reducers/incdec'
export default configureStore({
    reducer:{
        number:incdecReducer,
    }
})
