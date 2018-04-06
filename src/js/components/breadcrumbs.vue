<template>
	<div class="breadcrumbs ace-save-state" id="breadcrumbs">
		<ul class="breadcrumb">
			<li>
				<i class="ace-icon fa fa-home home-icon"></i>
				<a href="#">Home</a>
			</li>

			<template v-if="crumbs[0] == ''">
				<li class="active">Dashboard</li>
			</template>
			<template v-else>
				<li v-for="(crumb, i) in crumbs">
					<a href="#" v-if="i < crumbs.length">{{ crumb }}</a>
					<span v-if="i == crumbs.length">{{ crumb }}</span>
				</li>
			</template>
		</ul><!-- /.breadcrumb -->

		<div class="nav-search" id="nav-search">
			<form class="form-search">
				<span class="input-icon">
					<input type="text" placeholder="Search ..." class="nav-search-input" id="nav-search-input" autocomplete="off">
					<i class="ace-icon fa fa-search nav-search-icon"></i>
				</span>
			</form>
		</div><!-- /.nav-search -->
	</div>
</template>

<script>
	export default {
		computed: {
			crumbs() {
				let url = this.$route.fullPath;

				return url.split('/').splice(0, 1);
			}
		}
	}
</script>