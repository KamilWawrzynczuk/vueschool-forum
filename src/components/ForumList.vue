<template>
    <div class="col-full">
        <div class="forum-list">

            <div v-for="category in categories" :key="category.id">
                <h2 class="list-title">{{category.name}}</h2>
                <CategoryList :forumsByCategory="forums.filter(forum => forum.categoryId === category.id)"/>
            </div>
        </div>
    </div>
</template>
<script>
import CategoryList from '@/components/CategoryList.vue'
export default {
  props: {
    forums: {
      required: true,
      type: Array
    },
    categories: {
      required: true,
      type: Array
    }
  },
  components: {
    CategoryList
  }
}
</script>
