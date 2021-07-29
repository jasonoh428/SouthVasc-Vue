export const state = () => ({
    formIsOpened : false
})

export const mutations = {
    toggleForm(state) {

        let newFormValue = !this.formIsOpened

        state.formIsOpened = newFormValue

    }
}