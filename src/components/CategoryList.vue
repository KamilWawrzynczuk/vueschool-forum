<template>
     <div v class="forum-listing" v-for="forum in forumsByCategory" :key="forum.id">
        <div class="forum-details">
            <routerLink :to="{name: 'ForumShow', params: {id: forum.id}}" href="#" class="forum-name">{{ forum.name }}</routerLink>

            <p class="forum-description ">{{ forum.description }}</p>
        </div>

        <div class="threads-count">
            <p class="count text-lead">{{ forum.threads?.length }}</p> {{ !forum.threads?.length ? 'no threads' : forum.threads?.length == 1 ? 'thread' : 'threads' }}

            <div class="last-thread">

            </div>
        </div>
    </div>
 </template>
<script>

export default {
  props: {
    forumsByCategory: {
      required: true,
      type: Array
    }
  }
}
</script>
