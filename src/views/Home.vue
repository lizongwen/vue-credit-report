<template>
  <div class="main">
    <div class="main-head">欢迎进入，请查看您的项目</div>
    <div class="main-body">
      <a-table :columns="columns" :dataSource="data">
        <span slot="action">
          <a href="javascript:;" @click="goCompany">查看</a>
        </span>
      </a-table>
    </div>
  </div>
</template>
<script>
const columns = [
  {
    dataIndex: "name",
    title: "项目名称",
  },
  {
    title: "操作",
    scopedSlots: { customRender: "action" }
  }
];

const data = [
  {
    key: "1",
    name: "项目1",
  },
  {
    key: "2",
    name: "项目2",
  }
];

export default {
  data() {
    return {
      data,
      columns
    };
  },
  methods:{
	  goCompany(){
		  this.$router.push({
			  path:'/company'
		  })
	  }
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.main-head {
  padding: 15px;
}
.main-body {
  flex: 1;
}
</style>

