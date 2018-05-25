<template>
  <div class="layout">

    <NavTel></NavTel>

    <Banner></Banner>
    
    <container :item_con='item_con'></container>

    <container1 :item_con1='item_con1'></container1>

    <center :center_obj='center_obj'></center>

    <container1 :item_con1='item_con2'></container1>

    <FooterTel></FooterTel>  

  </div>
</template>

<script>

  import { NavTel, FooterTel, } from '@/components'
  import { Banner, container, container1, center } from './components'
  export default {
    name: 'layout',
    data () {
      return {
        item_con: [
          {icon_text: 'flash_on', title: '快速开发', text: '我们做最繁重的工作为你提供一个默认的风格，把我们的自定义组件。此外，我们精致的动画和转换，为开发人员提供一个更流畅的体验。'},
          {icon_text: 'group', title: '用户体验', text: '通过利用元素和素材设计的原则，我们创建一个框架，采用组件和动画，提供更多的方便给用户。此外，一个单一的底层响应系统在所有平台上允许一个更统一的用户体验。'},
          {icon_text: 'settings', title: '简单使用', text: '我们已经提供了详细的文档，以及特定的代码示例，以帮助新用户开始使用。我们也总是开放的反馈，并可以回答任何问题，用户可能有关于实现。'}
        ],
        item_con1: {
          title: '基于Material Design的主流前端响应式框架',
          img: '/static/img/background2.jpg',
        },
        item_con2: {
          title: '基于Material Design的主流前端响应式框架',
          img: '/static/img/background3.jpg',
        },
        center_obj: {
          title: '心灵鸡汤',
          text: '人心就像一个容器，装的快乐多了，烦恼自然就少；装的简单多了，纠结自然就少；装的满足多了，痛苦自然就少；装的理解多了，矛盾自然就少；装的宽容多了，仇恨自然就少。胸襟决定器量，境界决定高下。活着就是一种修行，修行就是修心。修得一颗平常心，无时不是快乐；修得一颗满足心，无处不是幸福。',
        }
      }
    },
    components: {
      NavTel,
      FooterTel,
      Banner,
      container,
      container1,
      center,
    },
    mounted () {
      $('.parallax').parallax()
    },

    
  }

</script>

<style scoped lang="scss">
  
</style>