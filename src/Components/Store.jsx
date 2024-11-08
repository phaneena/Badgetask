import {configureStore} from '@reduxjs/toolkit'
import Todoslice from './Todoslice'

export default configureStore({
    reducer:{
        Todo:Todoslice
    }
})