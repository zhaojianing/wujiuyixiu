<template>
    <div class="maoshanuser">
        <a-row class="maoshanuser-row">
            <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
            <a-col :xs="20" :sm="16" :md="16" :lg="14" :xl="14">
                <a-tabs v-model:activeKey="activeKey" type="card">
                    <a-tab-pane key="1" tab="茅山存卦">
                        <a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 2, xl: 4, xxl: 4, xxxl: 4 }"
                            :data-source="data">
                            <template #renderItem="{ item }">
                                <a-list-item>
                                    <a-card :title="item.title">Card content</a-card>
                                </a-list-item>
                            </template>
                        </a-list>
                    </a-tab-pane>
                    <a-tab-pane key="2" tab="玄空存卦（未写）">玄空存卦还没有写~</a-tab-pane>
                </a-tabs>
            </a-col>
            <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
        </a-row>
    </div>

</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
interface DataItem {
  title: string;
}
const data: DataItem[] = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];
export default defineComponent({
    name: "MaoShanUser",
    setup() {
        return {
            activeKey: ref('1'),
            data
        };
    }
})
</script>
<style lang="stylus" scoped>
.maoshanuser
    min-height 500px
</style>