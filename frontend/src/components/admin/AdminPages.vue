<template>
    <div class="admin-pages">
        <PageTitle icon="fa fa-cogs" main=" Administração do Sistema"
        sub="Cadastro & Cia"/>

        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Artigos" active>
                        <ArticleAdmin/>
                    </b-tab>
                    <b-tab title="Categorias" active>
                        <CategoryAdmin/>
                    </b-tab>
                    <b-tab title="Usuarios" active>
                        <UserAdmin/>
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle.vue'
import ArticleAdmin from './ArticleAdmin.vue'
import UserAdmin from './UserAdmin.vue'
import CategoryAdmin from './CategoryAdmin.vue'

export default {
    name:'AdminPages',
    components: {PageTitle, ArticleAdmin, UserAdmin, CategoryAdmin}
}
</script>

<style>

</style>