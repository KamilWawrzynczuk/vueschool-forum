<template>
    <div class="cos-full">
        <form @submit.prevent="save">
            <div class="form-group">
                <textarea v-model="text" name="" id="" cols="30" rows="10" class="form-input" />
            </div>
            <div class="form-actions">
                <button class="btn-blue">Submit post</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    save () {
      const postId = '1111' + Math.random()
      const post = {
        id: postId,
        text: this.text,
        publishedAt: Math.floor(Date.now() / 1000),
        userId: '38St7Q8Zi2N1SPa5ahzssq9kbyp1'
      }
      this.$emit('save', { post })

      this.text = ''
    }
  }
}
</script>
