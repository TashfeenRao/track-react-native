import React, { useReducer } from 'react'

export default (reducer, actions, defaultValue) => {
    const Context = React.createContext()

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, defaultValue)

        const boundActions = {}
        Object.entries(actions).forEach((element) => {
            boundActions[element[0]] = element[1](dispatch)
        })

        // for (let key in actions) {
        //     boundActions[key] = actions[key](dispatch)
        //     //console.log(key)
        //     console.log(boundActions)
        // }

        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        )
    }

    return { Context, Provider }
}
