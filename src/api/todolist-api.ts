import axios from 'axios';

export type TodolistType = {
    id: string
    addedDate: Date
    order: number
    title: string
}

// Generic for response
export type ResponseTodoType<D = {}> = {
    resultCode: number
    messages: string[]
    fieldsErrors: FieldErrorType[]
    data: D
}

export type FieldErrorType = {
    error: string
    field: string
}

type DataType = {
    title: string
}

export const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '70e71a7e-5d1b-4284-82b3-3a6364ed9f2a',
    }
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    ...settings
})

export const todolistApi = {
    getTodolists() {
        return instance.get<TodolistType[]>('/todo-lists')
    },
    createTodolist(data: DataType) {
        return instance.post<ResponseTodoType<{item: TodolistType}>>('/todo-lists', data)
    },
    updateTodolistTitle(todoID: string, data: DataType) {
        return instance.put<ResponseTodoType>(`/todo-lists/${todoID}`, data)
    },
    deleteTodolist(todoID: string) {
        return instance.delete<ResponseTodoType>(`/todo-lists/${todoID}`)
    },
}