<template>
  <div class="col-large push-top">
    <h1> {{ thread.title  }}</h1>
    <PostList :posts="threadPosts"/>
    <form @submit.prevent="addPost">
      <div class="form-group">
        <textarea v-model="newPostText" name="" id="" cols="30" rows="10" class="form-input" />
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit post</button>
      </div>
    </form>
  </div>
</template>

<script>
import sourceData from '@/data.json'
import PostList from '@/components/PostList'
export default {
  name: 'ThreadShow',
  components: {
    PostList
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      newPostText: ''
    }
  },
  computed: {
    thread () {
      return this.threads.find(thread => thread.id === this.id)
    },
    threadPosts () {
      return this.posts.filter(post => post.threadId === this.id)
    }
  },
  methods: {
    addPost () {
      const postId = '1111' + Math.random()
      const post = {
        text: this.newPostText,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.id,
        userId: '38St7Q8Zi2N1SPa5ahzssq9kbyp1'
      }
      this.posts.push(post)
      this.thread.posts.push(postId)

      this.newPostText = ''
    }
  }
}

</script>

<style>

</style>
