import axios from 'axios';
import { FieldErrorType, settings } from './todolist-api';

export type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: Date
    deadline: Date
    id?: string
    todoListId?: string
    order?: number
    addedDate?: Date
}

type UpdateTaskType = {
    title: string
    description: string
    status: number
    priority: number
    startDate: Date
    deadline: Date
}

export type ResponseGetTasksType = {
    items: TaskType[]
    totalCount?: number
    error?: string | null
}

// Generic for response
export type ResponseTaskType<D = {}> = {
    resultCode: number
    messages: string[]
    data: D
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    ...settings
})

export const taskApi = {
    getAllTasks(todoID: string) {
        return instance.get<ResponseGetTasksType>(`/todo-lists/${todoID}/tasks`)
    },
    createTask(todoID: string, data: { title: string }) {
        return instance.post<ResponseTaskType<{item: TaskType}>>(`/todo-lists/${todoID}/tasks`, data)
    },
    updateTask(todoID: string, taskID: string, data: UpdateTaskType) {
        return instance.put<ResponseTaskType<{item: TaskType}>>(`/todo-lists/${todoID}/tasks/${taskID}`, data)
    },
    deleteTask(todoID: string, taskID: string) {
        return instance.delete<ResponseTaskType>(`/todo-lists/${todoID}/tasks/${taskID}`)
    },
}