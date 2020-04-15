<template>
  <Page>
    <ActionBar>
      <NavigationButton
        text="Back"
        android.systemIcon="ic_menu_back"
        @tap="$navigateBack()"
      />
      <StackLayout
        orientation="horizontal"
        ios:horizontalAlignment="center"
        android:horizontalAlignment="center"
      >
        <Image src="~/assets/images/icon.png" class="fbs-icon"></Image>
        <Label text="FBS Sistemas" class="fbs-title" />
      </StackLayout>
    </ActionBar>
    <ScrollView>
      <FlexboxLayout
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Label class="message" text="Page 2" />
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
          this.goBack();
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

<style scoped>
ActionBar {
  background-color: #fff;
  color: #000;
}

.fbs-icon {
  padding: 5;
  height: 40;
}

.fbs-title {
  padding: 10;
  font-size: 20;
  font-weight: 600;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #666;
}
</style>
