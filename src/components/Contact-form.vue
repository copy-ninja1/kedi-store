<template>
  <div class="pt-4">
    <div class="row container">
      <div class="col-xs-12 col-md-3"></div>
      <div class="col-xs-12 col-md-6">
        <h2
          class="text-weight-light text-center text-grey-9 my-2"
          :class="$q.screen.lt.md?' text-h4':'text-h3 '"
        >Let's Work Together</h2>
        <h5
          class="text-h5 text-center text-weight-light my-6"
        >I’m allways available for freelance work.</h5>
        <p class="text-body1 text-weight-light text-center ideal_line-height-2 text-grey-8">
          If you have a project that you want to get started, think you need
          my help with something or just fancy saying hey, then get in touch.
        </p>
        <div class="ideal_contact-social q-pt-md">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-icon class="ideal_icon" color="primary" name="mdi-emailAddress" />
              </q-item-section>
              <q-item-section class="mt-1 text-weight-medium text-grey-7">iky@gmail.com</q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon class="ideal_icon" color="primary" name="mdi-phone" />
              </q-item-section>
              <q-item-section class="mt-1 text-weight-medium text-grey-7">+(234) 816 - 317 -1496</q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon class="ideal_icon" color="primary" name="mdi-map-marker-radius" />
              </q-item-section>
              <q-item-section class="mt-1 text-weight-medium text-grey-7">No 12 ,awolo street</q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
      <div class="col-xs-12 col-md-3"></div>
    </div>

   
  </div>
</template>

<script>
// import emailjs from "emailjs-com";

export default {
  data() {
    return {
      fullName: "",
      emailAddress: "",
      message: "",
      loading: false
    };
  },
  methods: {
    askForHelp(e) {
      console.log("::", this);
      // this.$refs.contactForm.validate().then(success => {
      //   if (success) {
      //     this.loading = true;
      //     emailjs
      //       .sendForm(
      //         "gmail",
      //         "template_jUhykeLw",
      //         e.target,
      //         "user_CwFK1a65jtqszNxC5RtKG"
      //       )
      //       .then(
      //         result => {
      //           this.$db
      //             .collection("iky-s-accounting")
      //             .add({
      //               fullName: this.fullName,
      //               emailAddress: this.emailAddress,
      //               message: this.message
      //             })
      //             .then(data => {
      //               this.loading = false;
      //               this.$q.notify({
      //                 message: "Sent Successfully",
      //                 color: "green"
      //               });
      //             })
      //             .catch(err => {
      //               this.$q.notify({
      //                 message: "An Error Occured",
      //                 color: "red"
      //               });
      //             });
      //           //
      //         },
      //         error => {
      //           this.loading = false;
      //           this.$q.notify({
      //             message: "An Error Occured",
      //             color: "red"
      //           });
      //         }
      //       );
      //   }
      // });
    }
  }

  // some .vue file

  // ...
};
</script>
<style lang="scss" scoped>
/* */
.ideal_carded {
  position: relative;
  /* top: 70px; */
  max-width: 400px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  /* z-index: 10000; */
}
</style>