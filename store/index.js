export const state = () => ({
    formIsOpened : false
})

export const mutations = {
    toggleForm(state) {

        let newFormValue = !state.formIsOpened

        console.log(newFormValue)
        state.formIsOpened = newFormValue

    }
}