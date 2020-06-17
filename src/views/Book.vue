<template>
    <div>
        <table>
            <tr>
                <td>编号</td>
                <td>书名</td>
                <td>作者</td>
            </tr>
            <tr v-for="item in books">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.author}}</td>
            </tr>
        </table>
        {{msg}}
    </div>
</template>

<script>
    export default {
        name: "Book",
        data(){
            return{
                msg:"hello Vue",
                books:[
                    {
                        id:1,
                        name:"book1",
                        author:"herui"
                    },
                    {
                        id:2,
                        name:"book2",
                        author:"何瑞"
                    }
                ]
            }
        },
        created() {
            const _this=this
            axios.get('http://localhost:8181/book/findAll').then(function (resp) {
                _this.books=resp.data
                //console.log(resp)
            })
        }
    }
</script>

<style scoped>

</style>