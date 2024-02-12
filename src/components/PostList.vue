<template>
    <div class="post-list">
        <div>
            <div class="post" v-for="post in posts" :key="post.id">
                <div class="user-info">
                    <a href="#" class="user-name">{{ usertById(post.userId).name }}</a>
                    <a href="#">
                        <img class="avatar-large" :src="usertById(post.userId).avatar" alt="">
                    </a>
                    <p class="desktop-only text-small">107 posts</p>
                </div>

                <div class="post-content">
                    <div>
                    <p>
                        {{ post.text }}
                    </p>
                    </div>
                    </div>
                <div class="post-date text-faded">
                    {{ post.publishedAt}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import sourceData from '@/data.json'

export default {
  props: {
    posts: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      users: sourceData.users
    }
  },
  methods: {
    usertById (userId) {
      return this.users.find(u => u.id === userId)
    }
  }
}
</script>
