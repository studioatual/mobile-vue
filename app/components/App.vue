<template>
  <Page>
    <ActionBar title="Welcome to FBS!"/>
    <FlexboxLayout alignItems="center" justifyContent="center" flexDirection="column">
      <TextField v-model="msg" class="editor" />
      <Image src="~/assets/images/fbs.png" stretch="none" class="img" />
      <Label class="message" :text="finalText"/> 
    </FlexboxLayout>        
  </Page>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'New App for FBS!'
      }
    },
    computed: {
      finalText() {
        return `Title: ${this.msg}`
      }
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #06C;
        color: #ffffff;
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
    }

    .editor {
      color: #06C;
    }
</style>
