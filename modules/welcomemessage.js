Hooks.once("init", function() {
    console.log("Initializing Memento Mori module")

    game.settings.register("memento-mori-csb-enit", "firstTimeStart", {
       name: "Force Welcome message",
        hint: "If you check this box you will see the Welcome message the next time you enter the World.",
        scope: "client",
        config: true,
        default: false,
        type: Boolean
    })
})

Hooks.once("ready", function() {
	let buttonId=Date.now();
	let buttonId2=Date.now()+2;
	let mensbienv='<h1>Welcome to the Memento Mori Module</h1>';
	let mensimpfirst='<p>Import the Compendiums to start using the module</p><button id='+buttonId2+' style= "font-family: BookAntiqua;">Import the compendiums</button>';
	let mensimpact='<p>The module has been updated since you last used it. Import the compendiums to have the latest version of the actor and object Templates.</p><button id='+buttonId2+' style= "font-family: BookAntiqua;">Import the compendiums</button>'
	let mensrecordtut='<p>Remember: You can select how many dice of each color you want to roll by pressing the Shift key when clicking on the Skill.</p><button id='+buttonId+' style= "font-family: BookAntiqua;">Go to the Tutorial</button>';
	
	let forzarbienvenida=game.settings.get("memento-mori-csb-enit", "firstTimeStart");
	let forzarmensaje;
	console.log(forzarmensaje);
	if (forzarbienvenida==true) {
		forzarmensaje=true;
	}
	let versactual=game.modules.get("memento-mori-csb-enit").version;
	let userisGM=game.user.isGM;
	if (userisGM) {
		if(!game.user.getFlag("memento-mori-csb-enit", "welcomeMessage") || forzarmensaje==true) {
			let msg=mensbienv+mensimpfirst+mensrecordtut;
			ChatMessage.create({
        		speaker: {alias:"Memento Mori"},
        		content: msg,
				whisper : ChatMessage.getWhisperRecipients(game.user.name)
			}).then(() => {
				setTimeout(() => {
				function openInNewTab(url) {
					const win = window.open(url, '_blank');
					win.focus();
				}
				const button = document.getElementById(buttonId);
				if (button) {
					button.addEventListener("click",function () {
						openInNewTab('https://github.com/pedrobaringo/memento-mori-csb-enit')
					});
				}
				const button2 = document.getElementById(buttonId2);
				if (button2) {
					button2.addEventListener("click",function () {
						let collection2 = game.packs.get("memento-mori-csb-enit.actortemplates");
						let folderident2=''
						if (game.folders.getName("Actor Templates")) {
							folderident2=game.folders.getName("Actor Templates").id;
						}
						let docs2 =  collection2.importAll({folderId: folderident2, folderName: "Actor Templates", keepId: true});
						game.user.setFlag("memento-mori-csb-enit", "welcomeMessage", true);
						game.user.setFlag("memento-mori-csb-enit", "lastVersion", game.modules.get("memento-mori-csb-enit").version);
						ui.notifications.info(game.i18n.localize("Templates importadas. Recargando mundo en 6sec..."), {permanent: true});
						window.setTimeout(window.location.reload.bind(window.location), 7000);
					});
				}
				}, 100);
			});
			game.settings.set("memento-mori-csb-enit", "firstTimeStart", false);
		} else if (versactual!=game.user.getFlag("memento-mori-csb-enit", "lastVersion")) {
			let msg=mensbienv+mensimpact+mensrecordtut;
			ChatMessage.create({
					speaker: {alias:"Memento Mori"},
					content: msg,
			   whisper : ChatMessage.getWhisperRecipients(game.user.name)
			}).then(() => {
				setTimeout(() => {
				function openInNewTab(url) {
					const win = window.open(url, '_blank');
					win.focus();
				}
				const button = document.getElementById(buttonId);
				if (button) {
					button.addEventListener("click",function () {
						openInNewTab('https://github.com/pedrobaringo/memento-mori-csb-enit')
					});
				}
				const button2 = document.getElementById(buttonId2);
				if (button2) {
					button2.addEventListener("click",function () {
						let collection2 = game.packs.get("memento-mori-csb-enit.actortemplates");
						let folderident2=''
						if (game.folders.getName("Actor Templates")) {
							folderident2=game.folders.getName("Actor Templates").id;
						}
						let docs2 =  collection2.importAll({folderId: folderident2, folderName: "Actor Templates", keepId: true});
						game.user.setFlag("memento-mori-csb-enit", "welcomeMessage", true);
						game.user.setFlag("memento-mori-csb-enit", "lastVersion", game.modules.get("memento-mori-csb-enit").version);
						ui.notifications.info(game.i18n.localize("Templates importadas. Recargando mundo en 6sec..."), {permanent: true});
						window.setTimeout(window.location.reload.bind(window.location), 7000);
					});
				}
				}, 500);
			});
		}
	} else if (!game.user.getFlag("memento-mori-csb-enit", "welcomeMessage") || forzarmensaje==true) {
		let msg = mensbienv+mensrecordtut;
		ChatMessage.create({
        		speaker: {alias:"Memento Mori"},
        		content: msg,
				whisper : ChatMessage.getWhisperRecipients(game.user.name)
		}).then(() => {
			setTimeout(() => {
			function openInNewTab(url) {
				const win = window.open(url, '_blank');
				win.focus();
			}
			const button = document.getElementById(buttonId);
			if (button) {
				button.addEventListener("click",function () {
					openInNewTab('https://github.com/pedrobaringo/memento-mori-csb-enit');
				});
			}
			}, 100);
		});
		game.user.setFlag("memento-mori-csb-enit", "welcomeMessage", true);
		game.settings.set("memento-mori-csb-enit", "firstTimeStart", false);
	}
})