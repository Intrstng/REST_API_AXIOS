import { CreateTodolist, DeleteTodolist, GetTodolists, UpdateTodolistTitle } from '../stories/todolists-api.stories';
import axios from 'axios';

type TodolistType = {
    id: string
    addedDate: Date
    order: number
    title: string
}

// Generic for response
type ResponseType<D = {}> = {
    resultCode: number
    messages: string[]
    // fieldsErrors: FieldErrorType[]
    data: D
}

// type FieldErrorType = {
//     error: string
//     field: string
// }

type DataType = {
    title: string
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    headers: {
        'API-KEY': '70e71a7e-5d1b-4284-82b3-3a6364ed9f2a',
    }
})

export const todolistApi = {
    getTodolists() {
        return instance.get<TodolistType[]>('/todo-lists')
    },
    createTodolist(data: DataType) {
        return instance.post<ResponseType<DataType>>('/todo-lists', data)
    },
    deleteTodolist(todoID: string) {
        return instance.delete<ResponseType>(`/todo-lists/${todoID}`)
    },
    updateTodolistTitle(todoID: string, data: DataType) {
        return instance.put<ResponseType>(`/todo-lists/${todoID}`, data)
    }
}