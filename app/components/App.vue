<template>
  <Page class="page">
    <ActionBar>
      <NavigationButton
        text="Menu"
        android.systemIcon="ic_menu_search"
        @tap="showMenu"
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
        <TextField v-model="msg" class="editor" />
        <Image
          src="~/assets/images/fbs.png"
          stretch="none"
          class="img"
          @tap="pageNew"
        />
        <Label class="message" :text="finalText" />
      </FlexboxLayout>
    </ScrollView>
  </Page>
</template>

<script>
import Menu from "./Menu";
import New from "./New";

export default {
  data() {
    return {
      msg: "New App for FBS!",
    };
  },
  computed: {
    finalText() {
      return `Title2: ${this.msg}`;
    },
  },
  methods: {
    pageNew() {
      this.$navigateTo(New, {
        animated: true,
        transition: {
          name: "slideLeft",
          duration: 250,
          curve: "easeIn",
        },
      });
    },
    showMenu() {
      this.$navigateTo(Menu, {
        animated: true,
        transition: {
          name: "slideRight",
          duration: 250,
          curve: "easeIn",
        },
      });
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

.img {
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 15;
  background: #fff;
  border-style: solid;
  border-width: 1;
  border-color: #ddd;
}

.editor {
  color: #06c;
}

.page {
  background-color: #efefef;
}
</style>
