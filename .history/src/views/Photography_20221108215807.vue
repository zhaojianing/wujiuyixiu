<template>
    <div class="photography">
        <a-row class="photography-row">
            <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
            <a-col :xs="20" :sm="16" :md="16" :lg="14" :xl="14">
                <div class="photography-row-div">
                    <a-card hoverable style="width: 300px">
                        <template #cover>
                            <a-image :width="200"
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                        </template>
                        <!-- <template #actions>
                            <setting-outlined key="setting" />
                            <edit-outlined key="edit" />
                            <ellipsis-outlined key="ellipsis" />
                        </template> -->
                        <a-card-meta title="Card title" description="This is the description">
                            <template #avatar>
                                <a-avatar src="https://joeschmoe.io/api/v1/random" />
                            </template>
                        </a-card-meta>
                    </a-card>
                    <a-image :width="200"
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                    <a-image :width="200"
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                </div>
            </a-col>
            <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
        </a-row>
    </div>
</template>
<script lang="ts">
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue';
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
    name: "PhotographyImage",
    setup() {
        return {}
    },
    components: {
    // SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
  },
})
</script>
<style lang="stylus" scoped>
.photography
    min-height 500px
</style>