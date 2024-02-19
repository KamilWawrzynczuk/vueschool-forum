<template>
  <div class="col-full">
    <br/>
    <h2 class="list-title">Threads</h2>
    <div class="thread-list" v-for="thread in threads" :key="thread.id" :thread="thread">
        <div class="thread">
            <div>
                <p>
                    <routerLink :to="{name: 'ThreadShow' , params: {id: thread.id}}">{{ thread.title  }}</routerLink>
                </p>
                <p class="text-faded text-xsmall">
                    By <a href="`">{{userById(thread.userId).name}}</a>, <AppDate :timestamp="thread.publishedAt"/>.
                </p>
            </div>

            <div class="activity">
                <p class="replies-count">
                    {{ thread.posts.length}} replies
                </p>

                <img class="avatar-medium"
                    src="usertById(postById(thread.userId).avatar"
                    alt=""/>
                <div>
                    <p class="text-xsmall">
                        <a href="#">{{ userById(thread.userId).name }}</a>
                    </p>
                    <p class="text-xsmall text-faded">
                      <AppDate :timestamp="thread.publishedAt" />
                    </p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'

export default {
  props: {
    threads: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      posts: sourceData.posts,
      users: sourceData.users
    }
  },
  methods: {
    userById (userId) {
      return this.users.find(u => u.id === userId)
    }
  }
}
</script>

<style scoped>

</style>
