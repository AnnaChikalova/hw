const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: changeThemeIdType): typeof initState => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {
                ...state,
                themeId: action.id
            }


        // дописать

        default:
            return state
    }
}
export type changeThemeIdType = {
    type: 'SET_THEME_ID'
    id: number
}

export const changeThemeId = (id: number): changeThemeIdType => ({type: 'SET_THEME_ID', id}) // fix any
