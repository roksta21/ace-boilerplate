<template>
	<div>
		<project-navbar></project-navbar>
		<div class="main-container ace-save-state" id="main-container">
			<project-sidebar></project-sidebar>
			<div class="main-content">
				<div class="main-content-inner">
					<div class="page-content">
						<project-breadcrumbs></project-breadcrumbs>
						<router-view></router-view>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>