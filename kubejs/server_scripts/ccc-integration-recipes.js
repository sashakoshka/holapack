let MC = (id) => `minecraft:${id}`
let CC = (id) => `computercraft:${id}`
let CR = (id) => `create:${id}`

ServerEvents.recipes(event => {
	const recipeList = [
		"cable",
		"computer_advanced",
		"computer_advanced_upgrade",
		"computer_command",
		"computer_normal",
		"disk_drive",
		"monitor_advanced",
		"monitor_normal",
		"pocket_computer_advanced",
		"pocket_computer_advanced_upgrade",
		"pocket_computer_normal",
		"printer",
		"speaker",
		"wireless_modem_normal",
		"wireless_modem_advanced",
		"turtle_advanced",
		"turtle_advanced_upgrade",
		"turtle_normal",
		"wired_modem"
	]

	for (const name of recipeList) {
		event.remove({ id: CC(name) })
	}

	event.shaped (
		Item.of(CC("cable"), 6),
		[
			" K ",
			"K+K",
			" K "
		],
		{
			K:   MC("dried_kelp"),
			"+": CR("copper_nugget")
		})
	event.shaped (
		CC("computer_advanced"),
		[
			"#!#",
			"!@!",
			"#M#"
		],
		{
			"#": CR("brass_sheet"),
			"!": CR("electron_tube"),
			"@": { tag: "c:redstone_dusts" },
			"M": CC("monitor_advanced")
		})
	event.shaped (
		CC("computer_advanced"), // upgrade from andesite
		[
			" ! ",
			"#C#",
			" N "
		],
		{
			"#": CR("brass_sheet"),
			"!": CR("electron_tube"),
			"C": CR("brass_casing"),
			"N": CC("computer_normal")
		})
	event.shaped (
		CC("computer_normal"),
		[
			"#!#",
			"!@!",
			"#M#"
		],
		{
			"#": CR("iron_sheet"),
			"!": CR("electron_tube"),
			"@": { tag: "c:redstone_dusts" },
			"M": CC("monitor_normal")
		})
	event.shaped (
		CC("disk_drive"),
		[
			" # ",
			"!T%",
			" C "
		],
		{
			"#": CR("iron_sheet"),
			"!": CR("electron_tube"),
			"T": CR("turntable"),
			"%": CR("precision_mechanism"),
			"C": CR("andesite_casing")
		})
	event.shaped (
		Item.of(CC("monitor_advanced"), 4),
		[
			" C ",
			"!!!",
			"RGB"
		],
		{
			"C": CR("brass_casing"),
			"!": CR("electron_tube"),
			"R": MC("red_stained_glass_pane"),
			"G": MC("green_stained_glass_pane"),
			"B": MC("blue_stained_glass_pane")
		})
	event.shaped (
		Item.of(CC("monitor_normal"), 4),
		[
			"C",
			"!",
			"O"
		],
		{
			"C": CR("andesite_casing"),
			"!": CR("electron_tube"),
			"O": { tag: "c:glass_panes" },
		})
	event.recipes.create.pressing (
		CC("pocket_computer_advanced"),
		CC("computer_advanced"))
	event.shaped (
		CC("pocket_computer_advanced"), // upgrade from andesite
		[
			" ! ",
			"#C#",
			" N "
		],
		{
			"#": CR("brass_sheet"),
			"!": CR("electron_tube"),
			"C": CR("brass_casing"),
			"N": CC("pocket_computer_normal")
		})
	event.recipes.create.pressing (
		CC("pocket_computer_normal"),
		CC("computer_normal"))
	event.shaped (
		CC("printer"),
		[
			" % ",
			"-=-",
			" C "
		],
		{
			"-": CR("shaft"),
			"=": CR("belt_connector"),
			"%": CR("precision_mechanism"),
			"C": CR("andesite_casing")
		})
	event.shaped (
		CC("speaker"),
		[
			"!",
			"*",
			"C"
		],
		{
			"!": CR("electron_tube"),
			"*": MC("note_block"),
			"C": CR("andesite_casing")
		})
	// TODO: replace the ender eye with an echo shard
	event.shapeless (
		CC("wireless_modem_advanced"),
		[
			MC("ender_eye"),
			CR("brass_sheet"),
			CC("wireless_modem_normal")
		])
	event.shapeless (
		CC("wireless_modem_normal"),
		[
			MC("ender_pearl"),
			CC("wired_modem")
		])
	event.shapeless (
		CC("wireless_modem_normal"),
		[
			MC("ender_pearl"),
			CC("wired_modem_full")
		])
	event.shaped (
		CC("turtle_advanced"),
		[
			"#V#",
			"#C#",
			"#P#"
		],
		{
			"#": CR("brass_sheet"),
			"V": CR("item_vault"),
			"C": CC("computer_advanced"),
			"P": CR("propeller"),
		})
	event.shaped (
		CC("turtle_advanced"), // upgrade from andesite
		[
			" ! ",
			"#C#",
			" N "
		],
		{
			"#": CR("brass_sheet"),
			"!": CR("electron_tube"),
			"C": CR("brass_casing"),
			"N": CC("turtle_normal")
		})
	event.shaped (
		CC("turtle_normal"),
		[
			"#V#",
			"#C#",
			"#P#"
		],
		{
			"#": CR("iron_sheet"),
			"V": CR("item_vault"),
			"C": CC("computer_normal"),
			"P": CR("propeller"),
		})
	event.shaped (
		CC("wired_modem"),
		[
			"|",
			"!",
			"C"
		],
		{
			"|": CC("cable"),
			"!": CR("electron_tube"),
			"C": CR("andesite_casing"),
		})
})
