<template>
  <Page class="page">
    <ActionBar>
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
        <Image src="~/assets/images/fbs.png" stretch="none" class="img" />
        <Label class="message" :text="finalText" />
      </FlexboxLayout>
    </ScrollView>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      msg: "New App for FBS!",
    };
  },
  computed: {
    finalText() {
      return `Title: ${this.msg}`;
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
