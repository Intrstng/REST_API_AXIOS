import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { todolistApi } from '../api/todolist-api';

export default {
    title: 'API',
}



export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.getTodolists()
            .then(response => setState(response.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const data = {
            title: 'Title for new TODO'
        }
        todolistApi.createTodolist(data)
            .then(response => setState(response.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoID = '6d2baa9e-df57-451d-ab85-2039e0a94a4c'
        todolistApi.deleteTodolist(todoID)
            .then(response => setState(response.data))
            .catch(err => console.log(err.message))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoID = '6d2baa9e-df57-451d-ab85-2039e0a94a4c';
        const data = {
            title: 'New title'
        }
        todolistApi.updateTodolistTitle(todoID, data)
            .then(response => setState(response.data))
            .catch(err => console.log(err.message))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}