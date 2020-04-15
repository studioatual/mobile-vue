<template>
  <Page actionBarHidden="true">
    <ScrollView>
      <FlexboxLayout alignItems="center" flexDirection="column">
        <Label text="Home" @tap="showPage('home')" />
      </FlexboxLayout>
    </ScrollView>
  </Page>
</template>

<script>
import App from "./App";

export default {
  methods: {
    showPage(page) {
      switch (page) {
        case "home":
          this.$navigateTo(App, {
            animated: true,
            transition: {
              name: "slideRight",
              duration: 250,
              curve: "easeIn",
            },
          });
          break;
      }
    },
  },
};
</script>
