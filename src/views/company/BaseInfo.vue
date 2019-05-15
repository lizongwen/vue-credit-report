<template>
  <div class="base">
    <a-row>
      <a-col :span="6" v-for="(item, index) in companyItem" :key="index">
        <a-card class="company-card">
          <h2 class="mod-name">{{ item.title }}</h2>
          <div class="company-progress">
            <span class="mod-percent">{{ item.percent }}%</span>
            <a-progress :percent="item.percent" :showInfo="false" />
          </div>
          <a-list :split="false" :dataSource="item.detail" size="small">
            <a-list-item slot="renderItem" slot-scope="item" class="list-item">
              <div class="sub-name">{{ item.name }}</div>
              <div class="sub-progress">{{ item.node }}</div>
              <div class="mod-list-item_op">
                <router-link tag="div" to="/company/base/gsxx">
                  <a-icon type="edit" />
                </router-link>
              </div>
            </a-list-item>
          </a-list>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companyItem: [
        {
          title: '公司基本信息',
          percent: 21,
          detail: [
            { name: '工商基本信息：', node: '0/1' },
            { name: '公司历史沿革：', node: '0/1' },
            { name: '股权机构及分支机构：', node: '0/7' },
            { name: '公司荣誉与认证：', node: '0/3' },
            { name: '知识产权：', node: '3/5' },
            { name: '环保信息：', node: '1/2' }
          ]
        },
        {
          title: '公司资源信息',
          percent: 25,
          detail: [
            { name: '企业经营资源：', node: '1/7' },
            { name: '人力资源分析：', node: '0/4' },
            { name: '产品研发技术情况：', node: '0/2' },
            { name: '招投标信息：', node: '0/1' },
            { name: '企业社保及公积金情况：', node: '3/4' },
            { name: '企业工资发放情况：', node: '1/2' }
          ]
        },
        {
          title: '企业信用概况',
          percent: 23,
          detail: [
            { name: '股东和法人代表风险：', node: '7/11' },
            { name: '融资信息：', node: '0/11' },
            { name: '对外担保信息：', node: '0/2' },
            { name: '司法信息：', node: '0/4' },
            { name: '被非银行信贷机构查询：', node: '0/1' }
          ]
        },
        {
          title: '市场及行业情况',
          percent: 0,
          detail: [
            { name: '主要业务介绍：', node: '0/3' },
            { name: '上下游交易信息：', node: '0/8' },
            { name: '行业及市场发展趋势：', node: '0/1' },
            { name: '竞争态势及市场机遇：', node: '0/1' },
            { name: '市场风险分析：', node: '0/1' }
          ]
        },
        {
          title: '财务状况',
          percent: 18,
          detail: [
            { name: '主要财务数据：', node: '0/3' },
            { name: '资产负债分析：', node: '1/3' },
            { name: '利润分析：', node: '1/3' },
            { name: '现金流量分析：', node: '1/4' },
            { name: '财务能力趋势与分析：', node: '1/3' },
            { name: '纳税情况与分析：', node: '1/3' },
            { name: '经营与相关数据校验分析：', node: '1/6' },
            { name: '财务状况综述：', node: '1/1' },
            { name: '同期数据对比：', node: '1/1' },
            { name: '附注：', node: '1/1' }
          ]
        },
        {
          title: '风险性分析',
          percent: 0,
          detail: [{ name: '风险性分析：', node: '1/1' }]
        },
        {
          title: '基本信息摘要',
          percent: 70,
          detail: [{ name: '基本信息摘要：', node: '1/10' }]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.base {
  .company-card {
    min-height: 533px;
    .mod-name {
      margin-bottom: 10px;
      color: #4a4a4a;
    }
    .company-progress {
      margin-bottom: 10px;
      .mod-percent {
        font-size: 28px;
        font-weight: 400;
        color: #4a4a4a;
      }
    }
    .list-item {
      .sub-name {
        min-width: 165px;
      }
      .sub-progress {
        min-width: 50px;
      }
      .mod-list-item_op {
        cursor: pointer;
      }
    }
  }
}
</style>
