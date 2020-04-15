<template>
  <Page>
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
      <StackLayout backgroundColor="#3c495e">
        <Label :text="first" @tap="$navigateBack()" class="fbs-item" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>
<script>
export default {
  data() {
    return {
      first: "New Text",
    };
  },
  mounted() {},
};
</script>
<style scoped>
.fbs-icon {
  padding: 5;
  height: 40;
}

.fbs-title {
  padding: 10;
  font-size: 20;
  font-weight: 600;
}
.fbs-item {
  padding: 15 30;
  font-size: 30;
  font-weight: 600;
  background: #43b883;
}
</style>
