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

    <div class="row items-center justify-center container flex flex-center pb-4">
      <div class="col-xs-12 col-sm-12 col-md-8 pt-12">
        <q-card class="ideal_carded center">
          <h3 class="text-h4 text-grey-7 mb-0 pt-4 ml-4 text-center text-weight-light">I can help.</h3>
          <p class="text-body2 text-center my-1 text-grey-6">Send me an e-mail</p>
          <q-card-section>
            <q-form ref="contactForm" @submit.prevent="askForHelp">
              <q-input
                v-model="fullName"
                outlined
                hint="*Name and surname"
                label="Name"
                class="pb-8"
                lazy-rules
                name="fullName"
                :rules="[ val => val && val.length > 0 || 'Please Enter Your Name']"
              />

              <q-input
                v-model="emailAddress"
                outlined
                label="Your mail"
                class="pb-6"
                name="emailAddress"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please Enter Your emailAddress']"
              />
              <q-input
                v-model="message"
                label="Message"
                outlined
                name="message"
                class="pb-3"
                type="textarea"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please Enter Your Message']"
              />

              <div>
                <q-btn
                  label="Message Me"
                  no-caps
                  outline
                  :loading="loading"
                  :disable="loading"
                  color="primary"
                  type="submit"
                  class="pl-3 pr-3 pb-2 mt-4 pt-2 full-width"
                  style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
                />
                <!-- <input type="submit" value="Send" /> -->
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-4 pt-8 container">
        <q-img
          alt="Quasar logo"
          :style="`
          width:${$q.screen.width < 365 ?'400px': $q.screen.width >810?'600px':''};
          height:${$q.screen.width < 365 ?'350px': $q.screen.width > 810?'550px':''};
          left:${$q.screen.width < 365 ?'30px':'10px'};
          float:right;min-height:350px;`"
          src="~assets/test.svg"
        />
      </div>
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