const route = [
	{
		path: "/",
		layout: BasicLayout,
		component: Home,
		exact: true,
	},
	{
		path: "/:username",
		layout: BasicLayout,
		component: User,
		exact: true,
	},
	{
		layout: BasicLayout,
		component: Error,
	},
]

export default route
