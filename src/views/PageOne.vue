<template>
    <div>
        <el-table
                :data="tableData"
                height="250"
                border
                style="width: 100%">
            <el-table-column
                    prop="id"
                    label="编号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="书名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="author"
                    label="作者">
            </el-table-column>
        </el-table>
        <el-pagination
                background
                layout="prev, pager, next"
                page-size="3"
                :total=totalElements
                @current-change="page">
        </el-pagination>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                totalElement: null,
                tableData: []
            }
        },
        created() {
            const _this=this
            axios.get('http://localhost:8181/book/findAll/0/3').then(function (resp) {
                _this.tableData=resp.data.content;
                _this.totalElements=resp.data.totalElements;
            })
        },
        methods: {
           page(currentpage){
               const _this=this
               axios.get('http://localhost:8181/book/findAll/'+(currentpage-1)+'/3').then(function (resp) {
                   _this.tableData=resp.data.content;
                   _this.totalElements=resp.data.totalElements;
               })
               //alert(currentpage)
           }
        }

    }
</script>

<style scoped>

</style>