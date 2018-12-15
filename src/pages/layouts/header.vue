<template>
	<el-header>
        <immadb-navbar id="siteNavigation" />

        <!-- <div class="account">
			<div class="dropdown"> -->
                <el-dropdown
                    trigger="click"
                >
                    <a class="el-dropdown-link">
                        username here
                    </a>

                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>Settings</el-dropdown-item>
                        <el-dropdown-item divided>Activity</el-dropdown-item>
                        <el-dropdown-item>Lists</el-dropdown-item>
                        <el-dropdown-item>Ratings</el-dropdown-item>
                        <el-dropdown-item divided>Log out</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            <!-- </div>
        </div> -->
	</el-header>
</template>

<script>
    import navbar from '@/pages/layouts/navbar.vue';

    export default {
        name: 'app',
        components: {
            'immadb-navbar': navbar,
        }
    }
</script>

<style>
    .el-headerzzz {
    	/* background-color: #545c64; */
    	/* color: $white1; */
    	user-select: none;
    	display: flex;
    	align-items: center;
    	padding: 0;

    	.home {
    		background-color: #2B384B;
    		height: 100%;
    		display: inline-flex;
    		align-items: center;
    		justify-content: center;
    		width: 60px;

    		/deep/ svg {
    			$s: 1.9em;
    			width: $s;
    			height: $s;
    			path {
    				fill: $white1;
    			}
    		}
    	}

    	.el-menu--horizontal {
    		background-color: #334056;
    		border-bottom: 0;

    		> .el-menu-item {
    			background-color: #334056;
    			color: #fff;
    		}

    		/deep/ {
    			.el-submenu {
    				.el-submenu__title {
    					background-color: #334056;
    					color: #fff;
    				}
    			}
    		}
    	}

    	.account {
            align-items: center;
            display: flex;
            margin-left: auto;
            padding-right: 1em;

    		.dropdown {
                display: block;
    			.el-dropdown {
                    .el-dropdown-link {
                        color: #fff;
                    }
    			}
    		}

    		.notification {
    			display: inline-flex;
    			height: 100%;
    			align-items: center;
    			justify-content: center;
    			width: 60px;

    			.icon {
    				/deep/ svg {
    					$s: 1.7em;
    					width: $s;
    					height: $s;
    					path {
    						fill: $white1;
    					}
    				}
    			}

    			.el-badge {
    				/deep/ .is-dot {
    					border: 0px;
    					right: 1em;
    					top: 0.4em;
    				}
    			}
    		}
    	}
    }
</style>
