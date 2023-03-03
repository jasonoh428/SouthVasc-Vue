<template>
    <div @click="goToRequestAppointmentPage" role="button" class="button overlayButton button--Blue">
        {{ display ? display : 'REQUEST APPOINTMENT' }}
    </div>
</template>

<script>

import { mapMutations } from 'vuex'
export default {

    props: ['display'],

    methods: {
        goToRequestAppointmentPage() {
      this.$router.push('/request-appointment');
    },
        ...mapMutations({
            toggleOverlay: 'toggleForm'
        })
    }

}
</script>

<style>
.overlayButton {
    cursor: pointer;
}
</style>