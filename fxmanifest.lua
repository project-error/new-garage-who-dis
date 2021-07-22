fx_version 'cerulean'

game 'gta5'
lua54 'yes'
version '1.0.0'
description 'New-Garage-Who-Dis'

server_scripts {
	'@mysql-async/lib/MySQL.lua', -- Comment out if using ghmattimysql.
	'config/sv_config.lua',
	'server/*.lua'
}

client_scripts {
	'config/cl_config.lua',
	'@PolyZone/client.lua',
	'@PolyZone/ComboZone.lua',
	'client/**/*.lua',
}

ui_page 'html/ui.html'

files {
	'html/ui.html',
	'html/js/*.js',
	'html/css/*.css',
	'html/img/*.png'
}

dependencies {
	--'mysql-async', -- https://github.com/brouznouf/fivem-mysql-async
	--'ghmattimysql', -- https://github.com/GHMatti/ghmattimysql
	'PolyZone' -- https://github.com/mkafrin/PolyZone
}